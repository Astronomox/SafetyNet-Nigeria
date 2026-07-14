import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import {
  IconBeacon, IconShieldPulse, IconRoute, IconTower, IconScan, IconAirdrop,
  IconCommunity, IconSiren, IconSms, IconFlood, IconFire, IconCollapse, IconBarrier,
} from '../components/Icons';

/* Distinct imagery per section — Wikimedia Commons, CC BY-SA.
   Solid ink base + gradient overlays keep text readable if any image fails. */
const IMG_HERO = 'https://commons.wikimedia.org/wiki/Special:FilePath/Une%20voie%20inond%C3%A9e%20%C3%A0%20Niamey.jpg?width=1920';
const IMG_HOUSE = 'https://commons.wikimedia.org/wiki/Special:FilePath/Water%20house%20Lagos%20Island.jpg?width=1400';
const IMG_STREET = 'https://commons.wikimedia.org/wiki/Special:FilePath/Cms%20Odunlami%20Street.jpg?width=1400';

const Photo: React.FC<{ src: string; className?: string; overlay?: string }> = ({ src, className = '', overlay = 'bg-gradient-to-t from-ink via-ink/55 to-ink/25' }) => (
  <div className={`relative overflow-hidden bg-ink ${className}`}>
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} aria-hidden="true" />
    <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />
    <div className="absolute inset-0 scanline" aria-hidden="true" />
  </div>
);

const STEPS = [
  { n: '01', icon: IconBeacon, title: 'Report', body: 'Drop a pin, attach a photo, set severity. Your report is timestamped and geotagged in seconds — even on a weak connection.' },
  { n: '02', icon: IconScan, title: 'Verify', body: 'AI cross-checks your report against official feeds, weather data, and nearby community signals before anything goes out.' },
  { n: '03', icon: IconTower, title: 'Dispatch', body: 'Verified alerts reach responders and everyone in the impact zone, with safe routes and shelter locations attached.' },
];

const CAPABILITIES = [
  { icon: IconShieldPulse, title: 'Verified alerts', body: 'No panic, no rumors. Every alert is checked before it reaches your screen.' },
  { icon: IconRoute, title: 'Safe routes', body: 'Live routing around flooded roads, fires, and closures — updated as conditions change.' },
  { icon: IconSms, title: 'SMS backup', body: 'Critical alerts fall back to text message when data networks go down.' },
  { icon: IconAirdrop, title: 'Relief coordination', body: 'Shelters, supply drops, and medical points mapped and updated by ops teams.' },
  { icon: IconCommunity, title: 'Community verification', body: 'Neighbors confirm what is happening on the ground, building trust into every report.' },
  { icon: IconSiren, title: 'One-tap SOS', body: 'A single button shares your location with emergency contacts and nearby responders.' },
];

const COVERAGE = [
  { icon: IconFlood, label: 'Flooding' },
  { icon: IconFire, label: 'Fire outbreaks' },
  { icon: IconCollapse, label: 'Building collapse' },
  { icon: IconBarrier, label: 'Road incidents' },
  { icon: IconSiren, label: 'Civil emergencies' },
  { icon: IconTower, label: 'Infrastructure failure' },
];

export const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ink text-bone">
      {/* ============ Hero ============ */}
      <div className="relative">
        <Photo src={IMG_HERO} className="absolute inset-0" overlay="bg-gradient-to-t from-ink via-ink/70 to-ink/45" />
        <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-6xl flex-col px-5 py-5 lg:px-8">
          {/* Nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center border border-mint/40 bg-ink/60 backdrop-blur">
                <IconBeacon className="size-5 text-mint" />
              </div>
              <div>
                <p className="display text-base">SafetyNet</p>
                <p className="eyebrow text-[9px] text-mint">National Emergency Response</p>
              </div>
            </div>
            <button
              onClick={() => navigate(RoutePath.LOGIN)}
              className="eyebrow border border-line bg-ink/50 px-5 py-2.5 text-[10px] text-bone backdrop-blur transition-colors hover:border-mint hover:text-mint"
            >
              Sign in
            </button>
          </div>

          {/* Headline — clamped so it never overflows */}
          <div className="flex flex-1 flex-col justify-end pb-6 pt-12">
            <p className="eyebrow mb-3 text-mint">9.0820°N · 8.6753°E · Nigeria</p>
            <h1 className="display max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              When disaster hits,<br /><span className="text-mint">seconds count.</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-bone/80 lg:text-base">
              SafetyNet connects citizens, responders, and government agencies on one real-time network. Report incidents, get verified alerts, find safe routes.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate(RoutePath.SIGNUP)}
                className="ticks flex items-center justify-center gap-2 bg-mint px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink transition-all hover:shadow-glow-mint active:scale-[0.99]"
              >
                Join the Network
              </button>
              <button
                onClick={() => navigate(RoutePath.LOGIN)}
                className="flex items-center justify-center gap-2 border border-line bg-ink/50 px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-bone backdrop-blur transition-colors hover:border-mint hover:text-mint"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Ticker strip ============ */}
      <div className="overflow-hidden border-y border-line bg-panel py-2.5">
        <p className="eyebrow whitespace-nowrap text-center text-[9px] text-ash">
          Flood · Fire · Building collapse · Road incidents · Civil emergencies — <span className="text-mint">one network for all of them</span>
        </p>
      </div>

      {/* ============ The problem ============ */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20" aria-label="Why SafetyNet exists">
        <div>
          <p className="eyebrow text-flare">The problem</p>
          <h2 className="display mt-2 text-3xl lg:text-4xl">Help arrives late because information does.</h2>
          <p className="mt-4 text-sm leading-relaxed text-ash lg:text-base">
            In an emergency, the first reports live in scattered phone calls, social media posts, and word of mouth. By the time they reach the right agency, roads are impassable and the window to act has closed.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ash lg:text-base">
            SafetyNet closes that gap. Every report enters one shared picture of the situation — the same map your neighbors, first responders, and NEMA coordinators are looking at.
          </p>
        </div>
        <Photo src={IMG_HOUSE} className="ticks aspect-[4/3] border border-line" overlay="bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
      </section>

      {/* ============ How it works ============ */}
      <section className="border-y border-line bg-panel" aria-label="How it works">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <p className="eyebrow text-mint">How it works</p>
          <h2 className="display mt-2 text-3xl lg:text-4xl">From sighting to siren in three steps.</h2>
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-panel-2 p-7">
                <div className="flex items-center justify-between">
                  <s.icon className="size-8 text-mint" />
                  <span className="font-mono text-xs text-ash/60">{s.n}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-bone">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Capabilities ============ */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20" aria-label="Capabilities">
        <p className="eyebrow text-mint">Capabilities</p>
        <h2 className="display mt-2 max-w-2xl text-3xl lg:text-4xl">Built for the worst day, useful every day.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="ops-panel p-6 transition-colors hover:border-mint/40">
              <c.icon className="size-7 text-mint" />
              <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-bone">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Image break: community ============ */}
      <div className="relative border-y border-line">
        <Photo src={IMG_STREET} className="absolute inset-0" overlay="bg-gradient-to-r from-ink via-ink/75 to-ink/35" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="eyebrow text-mint">Community first</p>
          <blockquote className="display mt-3 max-w-2xl text-2xl leading-tight sm:text-3xl lg:text-4xl">
            "The people closest to an emergency are always the first responders. We just gave them a radio."
          </blockquote>
          <p className="eyebrow mt-5 text-[9px] text-ash">SafetyNet Operations — Lagos</p>
        </div>
      </div>

      {/* ============ Who it serves ============ */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20" aria-label="Who SafetyNet serves">
        <p className="eyebrow text-mint">One network, three seats</p>
        <h2 className="display mt-2 text-3xl lg:text-4xl">Everyone sees the same map.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="ops-panel p-6">
            <p className="eyebrow text-[9px] text-mint">Citizens</p>
            <h3 className="mt-2 font-display text-lg font-bold text-bone">Know before you go</h3>
            <p className="mt-2 text-sm leading-relaxed text-ash">Verified alerts for your area, safe routes home, an SOS that reaches family and responders in one tap.</p>
          </div>
          <div className="ops-panel p-6">
            <p className="eyebrow text-[9px] text-amber">Responders</p>
            <h3 className="mt-2 font-display text-lg font-bold text-bone">Arrive informed</h3>
            <p className="mt-2 text-sm leading-relaxed text-ash">Live incident detail, community verifications, and access conditions before you reach the scene.</p>
          </div>
          <div className="ops-panel p-6">
            <p className="eyebrow text-[9px] text-bone">Agencies</p>
            <h3 className="mt-2 font-display text-lg font-bold text-bone">Coordinate at scale</h3>
            <p className="mt-2 text-sm leading-relaxed text-ash">A single operational picture across states — shelters, assets, and alerts managed from one console.</p>
          </div>
        </div>
      </section>

      {/* ============ Coverage ============ */}
      <section className="border-t border-line bg-panel" aria-label="What SafetyNet covers">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-16">
          <p className="eyebrow text-mint">Coverage</p>
          <h2 className="display mt-2 text-3xl lg:text-4xl">Every kind of emergency.</h2>
          <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {COVERAGE.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3 bg-panel-2 px-3 py-7 text-center">
                <c.icon className="size-7 text-mint" />
                <p className="eyebrow text-[8px] text-bone">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Final CTA + footer ============ */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="ticks flex flex-col items-start justify-between gap-6 border border-line bg-panel p-8 sm:flex-row sm:items-center lg:p-10">
          <div>
            <h3 className="display text-2xl lg:text-3xl">Ready to respond?</h3>
            <p className="mt-2 text-sm text-ash">Create a free account and join your community's response network.</p>
          </div>
          <button
            onClick={() => navigate(RoutePath.SIGNUP)}
            className="ticks shrink-0 bg-flare px-9 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-glow-red transition-transform active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>

        <footer className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center border border-mint/40 bg-mint/10">
              <IconBeacon className="size-4.5 text-mint" />
            </div>
            <div>
              <p className="display text-sm">SafetyNet</p>
              <p className="eyebrow text-[8px] text-ash">Federal Republic of Nigeria</p>
            </div>
          </div>
          <div className="flex gap-6">
            <button onClick={() => navigate(RoutePath.LOGIN)} className="eyebrow text-[9px] text-ash hover:text-mint">Sign in</button>
            <button onClick={() => navigate(RoutePath.SIGNUP)} className="eyebrow text-[9px] text-ash hover:text-mint">Create account</button>
          </div>
          <p className="font-mono text-[10px] text-ash/60">v1.0.4 · Imagery: Wikimedia Commons (CC BY-SA)</p>
        </footer>
      </section>
    </div>
  );
};
