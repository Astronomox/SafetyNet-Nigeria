import React, { useEffect, useRef } from 'react';

/**
 * SignalField — raw WebGL shader background.
 * Animated terrain contour lines with radar ping ripples propagating
 * outward, like emergency signals across a map. Zero dependencies.
 * Respects prefers-reduced-motion (renders a single static frame),
 * pauses when offscreen/hidden, caps DPR for battery.
 */

const VERT = `
attribute vec2 p;
void main(){ gl_Position = vec4(p, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_intensity;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for(int i = 0; i < 5; i++){
    v += a * noise(p);
    p = p * 2.03 + vec2(11.3, 7.7);
    a *= 0.5;
  }
  return v;
}

float ping(vec2 uv, vec2 center, float t, float period){
  float d = length(uv - center);
  float phase = mod(t, period) / period;      // 0..1
  float r = phase * 0.85;                      // expanding radius
  float ring = smoothstep(0.035, 0.0, abs(d - r));
  float fade = (1.0 - phase) * (1.0 - phase);
  return ring * fade;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 asp = vec2(u_res.x / u_res.y, 1.0);
  vec2 q = uv * asp;

  // Slowly drifting elevation field
  float t = u_time * 0.03;
  float elev = fbm(q * 2.6 + vec2(t, -t * 0.6));

  // Contour lines from elevation
  float bands = 18.0;
  float f = fract(elev * bands);
  float line = smoothstep(0.06, 0.0, min(f, 1.0 - f));
  // Every 4th contour is an index line (brighter)
  float idx = step(0.75, fract(floor(elev * bands) / 4.0 + 0.001));
  float contour = line * mix(0.35, 1.0, idx);

  // Radar pings (emergency signals)
  float pings = 0.0;
  pings += ping(q, vec2(0.30, 0.62) * asp, u_time,        7.0);
  pings += ping(q, vec2(0.74, 0.30) * asp, u_time + 2.5,  9.0);
  pings += ping(q, vec2(0.55, 0.80) * asp, u_time + 5.0, 11.0);

  // Palette: ink -> deep green -> mint
  vec3 ink    = vec3(0.024, 0.039, 0.031);
  vec3 deep   = vec3(0.000, 0.220, 0.135);
  vec3 mint   = vec3(0.424, 0.941, 0.706);
  vec3 flare  = vec3(1.000, 0.267, 0.200);

  vec3 col = ink;
  col += deep * elev * 0.55;
  col = mix(col, mint, contour * (0.10 + 0.16 * u_intensity));
  col = mix(col, mint, pings * 0.55);
  // Faint red core at the freshest ping
  col = mix(col, flare, pings * pings * 0.25);

  // Vignette
  float vig = smoothstep(1.25, 0.35, length(uv - 0.5) * 1.6);
  col *= mix(0.55, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
}
`;

interface SignalFieldProps {
  className?: string;
  intensity?: number; // 0..1 contour brightness
}

export const SignalField: React.FC<SignalFieldProps> = ({ className = '', intensity = 0.8 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return; // graceful: CSS background shows instead

    // Paint ink immediately — the canvas must never flash white,
    // even if shader compilation fails below.
    gl.clearColor(0.024, 0.039, 0.031, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('SignalField shader failed, keeping static ink background:', gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return; // canvas stays ink-colored
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('SignalField link failed:', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uInt = gl.getUniformLocation(prog, 'u_intensity');
    gl.uniform1f(uInt, intensity);

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(uRes, w, h);
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let running = true;
    const start = performance.now();

    const frame = () => {
      if (!running) return;
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduced) raf = requestAnimationFrame(frame);
    };
    frame();

    const io = new IntersectionObserver(([e]) => {
      if (reduced) return;
      if (e.isIntersecting && !running) { running = true; frame(); }
      else if (!e.isIntersecting) { running = false; cancelAnimationFrame(raf); }
    });
    io.observe(canvas);

    const onVis = () => {
      if (reduced) return;
      if (document.hidden) { running = false; cancelAnimationFrame(raf); }
      else if (!running) { running = true; frame(); }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block h-full w-full bg-ink ${className}`}
    />
  );
};
