import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import { SignalField } from '../components/SignalField';

const QUICK_OPS = [
  { icon: 'add_alert', label: 'Report', sub: 'File an incident', path: RoutePath.REPORT, accent: 'flare' },
  { icon: 'map', label: 'Live Map', sub: 'Active incidents', path: RoutePath.MAP, accent: 'mint' },
  { icon: 'smart_toy', label: 'AI Assist', sub: 'Safety guidance', path: RoutePath.CHAT, accent: 'mint' },
  { icon: 'menu_book', label: 'Library', sub: 'Survival guides', path: RoutePath.LIBRARY, accent: 'mint' },
  { icon: 'volunteer_activism', label: 'Impact', sub: 'Relief efforts', path: RoutePath.IMPACT, accent: 'mint' },
  { icon: 'favorite', label: 'Donate', sub: 'Fund response', path: RoutePath.DONATE, accent: 'mint' },
];

const FEED = [
  {
    tag: 'VERIFIED', tagColor: 'text-mint border-mint/40 bg-mint/10', icon: 'verified',
    title: 'Water receding on Adeola Odeku', place: 'Victoria Island, Lagos', time: '12 min ago',
    body: 'Vehicles moving slowly. 24 community verifications.',
  },
  {
    tag: 'OFFICIAL', tagColor: 'text-bone border-line bg-panel-2', icon: 'account_balance',
    title: 'Shelters open at National Stadium', place: 'Surulere, Lagos', time: '38 min ago',
    body: 'NEMA safe zones active with medical supplies and rations.',
  },
  {
    tag: 'AI WATCH', tagColor: 'text-amber border-amber/40 bg-amber/10', icon: 'smart_toy',
    title: 'Bridge stress reports in Kano', place: 'Kano Municipal', time: '1 hr ago',
    body: 'Analyzing incoming social reports. Verify before travel.',
  },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [clock, setClock] = useState('');

  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-ink pb-10">
      {/* Top status bar */}
      <header className="sticky top-0 z-30 border-b border-line bg-ink/85 backdrop-blur-xl pt-safe">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex size-9 items-center justify-center border border-mint/40 bg-mint/10">
              <span className="material-symbols-outlined text-[20px] text-mint">health_and_safety</span>
            </div>
            <div>
              <p className="display text-sm">SafetyNet</p>
              <p className="eyebrow text-[8px] text-mint">Console</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 lg:flex">
            <span className="eyebrow text-ash">Operations Console</span>
            <span className="eyebrow text-mint">Lagos Sector · Threat Low</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-ash" aria-label="Local time">{clock} WAT</span>
            <button
              onClick={() => navigate(RoutePath.PROFILE)}
              className="size-9 border border-line bg-cover bg-center transition-colors hover:border-mint"
              style={{ backgroundImage: 'url(https://picsum.photos/100)' }}
              aria-label="Open profile"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {/* Hero: the signal field */}
        <section className="ticks relative mt-5 overflow-hidden border border-line" aria-label="Network status">
          <div className="absolute inset-0">
            <SignalField />
          </div>
          <div className="absolute inset-0 scanline" />
          <div className="relative z-10 flex min-h-[380px] flex-col justify-between p-6 lg:min-h-[420px] lg:p-10">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 border border-mint/30 bg-ink/70 px-3 py-1.5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                </span>
                <span className="eyebrow text-[9px] text-mint">Live Monitoring · 36 States</span>
              </div>
              <span className="eyebrow hidden text-[9px] text-ash lg:block">6.5244°N · 3.3792°E</span>
            </div>

            <div className="max-w-2xl">
              <h1 className="display text-5xl lg:text-7xl">
                Respond<br /><span className="text-mint">faster.</span>
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ash lg:text-base">
                AI-verified incident tracking and coordinated emergency response for Nigeria, in real time.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate(RoutePath.REPORT)}
                  className="ticks flex items-center justify-center gap-2 bg-flare px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white shadow-glow-red transition-transform active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined filled text-[20px]">add_alert</span>
                  Report Incident
                </button>
                <button
                  onClick={() => navigate(RoutePath.MAP)}
                  className="flex items-center justify-center gap-2 border border-mint/40 bg-ink/60 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-mint backdrop-blur transition-colors hover:bg-mint/10"
                >
                  <span className="material-symbols-outlined text-[20px]">map</span>
                  Open Live Map
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Threat board */}
        <section className="mt-4 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4" aria-label="Sector status">
          {[
            { label: 'Threat Level', value: 'LOW', tone: 'text-mint' },
            { label: 'Active Incidents', value: '07', tone: 'text-amber' },
            { label: 'Responders Online', value: '142', tone: 'text-bone' },
            { label: 'Alerts Today', value: '23', tone: 'text-bone' },
          ].map((s) => (
            <div key={s.label} className="bg-panel px-4 py-4 lg:px-5">
              <p className="eyebrow text-[9px] text-ash">{s.label}</p>
              <p className={`mt-1 font-mono text-2xl font-semibold ${s.tone}`}>{s.value}</p>
            </div>
          ))}
        </section>

        {/* Two-column on desktop: quick ops + live feed */}
        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          {/* Quick operations */}
          <section className="lg:col-span-2" aria-label="Quick operations">
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="display text-xl">Operations</h2>
              <span className="eyebrow text-[9px] text-ash">6 modules</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {QUICK_OPS.map((op) => (
                <button
                  key={op.label}
                  onClick={() => navigate(op.path)}
                  className={`ops-panel group flex flex-col items-start gap-3 p-4 text-left transition-colors hover:border-${op.accent === 'flare' ? 'flare' : 'mint'}/50`}
                >
                  <span className={`material-symbols-outlined text-[24px] ${op.accent === 'flare' ? 'text-flare' : 'text-mint'}`}>{op.icon}</span>
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-bone">{op.label}</p>
                    <p className="mt-0.5 text-xs text-ash">{op.sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Live feed */}
          <section className="lg:col-span-3" aria-label="Live incident feed">
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="display text-xl">Live Feed</h2>
              <button onClick={() => navigate(RoutePath.ALERTS)} className="eyebrow text-[9px] text-mint hover:text-bone">
                All alerts →
              </button>
            </div>
            <div className="space-y-3">
              {FEED.map((item) => (
                <article key={item.title} className="ops-panel p-4 transition-colors hover:border-mint/40 lg:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`eyebrow inline-flex items-center gap-1.5 border px-2 py-1 text-[8px] ${item.tagColor}`}>
                      <span className="material-symbols-outlined text-[12px]">{item.icon}</span>
                      {item.tag}
                    </span>
                    <span className="font-mono text-[10px] text-ash">{item.time}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-bone">{item.title}</h3>
                  <p className="mt-1 font-mono text-[11px] text-mint/80">{item.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
