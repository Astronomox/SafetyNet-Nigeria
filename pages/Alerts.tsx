import React, { useState } from 'react';

const FILTERS = ['All', 'Official', 'Verified', 'AI Watch', 'Community'];

interface FeedItem {
  kind: string;
  tag: string;
  tagClass: string;
  icon: string;
  source: string;
  time: string;
  title: string;
  body: string;
  place: string;
  image?: string;
  verified?: number;
}

const ITEMS: FeedItem[] = [
  {
    kind: 'Official', tag: 'OFFICIAL', tagClass: 'text-bone border-line bg-panel-2', icon: 'account_balance',
    source: 'NEMA', time: '10 min ago',
    title: 'Emergency shelters opened at National Stadium',
    body: 'National Emergency Management Agency has established safe zones near the National Stadium with medical supplies and food rations.',
    place: 'Surulere, Lagos',
    image: 'https://picsum.photos/640/360?grayscale',
  },
  {
    kind: 'AI Watch', tag: 'AI WATCH', tagClass: 'text-amber border-amber/40 bg-amber/10', icon: 'smart_toy',
    source: 'SafetyNet AI', time: '25 min ago',
    title: 'Bridge collapse reported in Kano',
    body: 'Analyzing incoming social reports. Verify location safety before travel.',
    place: 'Kano Municipal',
  },
  {
    kind: 'Official', tag: 'OPS UPDATE', tagClass: 'text-mint border-mint/40 bg-mint/10', icon: 'flight',
    source: 'SafetyNet Ops', time: '1 hr ago',
    title: 'Drone reconnaissance deployed',
    body: 'Fleet coordinating food drops in sector 4. Please keep landing zones clear.',
    place: 'Sector 4, Lagos',
  },
  {
    kind: 'Community', tag: 'COMMUNITY', tagClass: 'text-bone border-line bg-panel-2', icon: 'group',
    source: 'Emmanuel Okafor', time: '2 hr ago',
    title: 'Water levels receding on Adeola Odeku',
    body: 'Vehicles are starting to move slowly. Road passable for high-clearance vehicles.',
    place: 'Victoria Island, Lagos',
    verified: 24,
  },
];

export const Alerts: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const visible = ITEMS.filter((i) => filter === 'All' || i.kind === filter || (filter === 'Verified' && i.verified));

  return (
    <div className="min-h-screen bg-ink pb-10">
      <header className="sticky top-0 z-30 border-b border-line bg-ink/85 backdrop-blur-xl pt-safe">
        <div className="mx-auto max-w-4xl px-4 pt-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow text-mint">Signal Traffic</p>
              <h1 className="display mt-1 text-2xl lg:text-3xl">Alerts</h1>
            </div>
            <button className="flex size-10 items-center justify-center border border-line text-ash transition-colors hover:border-mint hover:text-bone" aria-label="Search alerts">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-3 no-scrollbar" role="tablist" aria-label="Filter alerts">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`eyebrow shrink-0 border px-4 py-2 text-[9px] transition-colors ${
                  filter === f ? 'border-mint bg-mint/10 text-mint' : 'border-line text-ash hover:text-bone'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 pt-5 lg:px-8">
        {/* Urgent banner */}
        <div className="ticks animate-pulse-slow border border-flare/50 bg-flare/10 p-5">
          <div className="flex items-center gap-2 text-flare">
            <span className="material-symbols-outlined filled text-[18px]">warning</span>
            <p className="eyebrow text-[10px]">Urgent · Flash Flood Warning</p>
          </div>
          <h2 className="mt-2 font-display text-lg font-bold text-bone">Avoid low-lying areas in Lekki Phase 1</h2>
          <p className="mt-1 text-sm text-ash">Water levels rising rapidly. Safe routes are being updated on the live map.</p>
          <button className="ticks mt-4 w-full bg-flare py-2.5 font-display text-xs font-bold uppercase tracking-wide text-white transition-transform active:scale-[0.99] sm:w-auto sm:px-8">
            View Safe Route
          </button>
        </div>

        {/* Feed */}
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {visible.map((item) => (
            <article key={item.title} className="ops-panel overflow-hidden transition-colors hover:border-mint/40">
              {item.image && (
                <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
              )}
              <div className="p-4 lg:p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className={`eyebrow inline-flex items-center gap-1.5 border px-2 py-1 text-[8px] ${item.tagClass}`}>
                    <span className="material-symbols-outlined text-[12px]">{item.icon}</span>
                    {item.tag}
                  </span>
                  <span className="font-mono text-[10px] text-ash">{item.time}</span>
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ash">{item.source}</p>
                <h3 className="mt-1 font-display text-base font-bold leading-snug text-bone">{item.title}</h3>
                <p className="mt-1 font-mono text-[11px] text-mint/80">{item.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-ash">{item.body}</p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  {item.verified ? (
                    <span className="flex items-center gap-1.5 text-xs text-mint">
                      <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                      {item.verified} verified
                    </span>
                  ) : (
                    <button className="flex items-center gap-1 text-xs font-medium text-mint hover:text-bone">
                      Read full notice
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  )}
                  <div className="flex gap-3 text-ash">
                    <button className="hover:text-bone" aria-label="Share"><span className="material-symbols-outlined text-[18px]">share</span></button>
                    <button className="hover:text-bone" aria-label="Save"><span className="material-symbols-outlined text-[18px]">bookmark</span></button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};
