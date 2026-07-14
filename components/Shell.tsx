import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

/**
 * Responsive navigation shell.
 * - < lg : fixed bottom dock (5 slots, center SOS report)
 * - >= lg: fixed left rail with full nav, live status, SOS
 * Pages render inside <main> with left padding on desktop.
 */

const PRIMARY = [
  { path: RoutePath.HOME, icon: 'grid_view', label: 'Console' },
  { path: RoutePath.MAP, icon: 'map', label: 'Live Map' },
  { path: RoutePath.ALERTS, icon: 'notifications', label: 'Alerts' },
  { path: RoutePath.PROFILE, icon: 'person', label: 'Profile' },
];

const SECONDARY = [
  { path: RoutePath.CHAT, icon: 'smart_toy', label: 'AI Assist' },
  { path: RoutePath.LIBRARY, icon: 'menu_book', label: 'Library' },
  { path: RoutePath.HISTORY, icon: 'history', label: 'History' },
  { path: RoutePath.IMPACT, icon: 'volunteer_activism', label: 'Impact' },
  { path: RoutePath.RESPONDER, icon: 'medical_services', label: 'Responder' },
  { path: RoutePath.DONATE, icon: 'favorite', label: 'Donate' },
];

const RailItem: React.FC<{ icon: string; label: string; active: boolean; onClick: () => void; alert?: boolean }> = ({ icon, label, active, onClick, alert }) => (
  <button
    onClick={onClick}
    className={`group flex w-full items-center gap-3 rounded px-3 py-2.5 text-left transition-colors ${
      active ? 'bg-mint/10 text-mint' : 'text-ash hover:bg-white/5 hover:text-bone'
    }`}
  >
    <span className="relative">
      <span className={`material-symbols-outlined text-[20px] ${active ? 'filled' : ''}`}>{icon}</span>
      {alert && <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-flare" />}
    </span>
    <span className={`text-sm font-medium ${active ? 'text-mint' : ''}`}>{label}</span>
    {active && <span className="ml-auto h-4 w-0.5 bg-mint" />}
  </button>
);

const SideRail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (p: string) => location.pathname === p;

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-60 flex-col border-r border-line bg-panel lg:flex">
      {/* Brand */}
      <button onClick={() => navigate(RoutePath.HOME)} className="flex items-center gap-3 border-b border-line px-5 py-5 text-left">
        <div className="flex size-9 items-center justify-center border border-mint/40 bg-mint/10">
          <span className="material-symbols-outlined text-[20px] text-mint">health_and_safety</span>
        </div>
        <div>
          <p className="display text-[15px] text-bone">SafetyNet</p>
          <p className="eyebrow mt-0.5 text-[9px] text-ash">Federal Republic · NG</p>
        </div>
      </button>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 no-scrollbar">
        <p className="eyebrow mb-2 px-3 text-ash/70">Operations</p>
        {PRIMARY.map((n) => (
          <RailItem key={n.path} icon={n.icon} label={n.label} active={isActive(n.path)} onClick={() => navigate(n.path)} alert={n.path === RoutePath.ALERTS} />
        ))}
        <p className="eyebrow mb-2 mt-6 px-3 text-ash/70">Support</p>
        {SECONDARY.map((n) => (
          <RailItem key={n.path} icon={n.icon} label={n.label} active={isActive(n.path)} onClick={() => navigate(n.path)} />
        ))}
      </nav>

      {/* SOS + status */}
      <div className="border-t border-line p-4">
        <button
          onClick={() => navigate(RoutePath.REPORT)}
          className="ticks flex w-full items-center justify-center gap-2 bg-flare py-3 font-display text-sm font-bold uppercase tracking-wide text-white shadow-glow-red transition-transform active:scale-[0.98]"
        >
          <span className="material-symbols-outlined filled text-[20px]">add_alert</span>
          Report Incident
        </button>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="eyebrow text-[9px] text-mint">System Live</span>
          </div>
          <span className="font-mono text-[10px] text-ash">v1.0.4</span>
        </div>
      </div>
    </aside>
  );
};

const DockItem: React.FC<{ icon: string; label: string; active: boolean; onClick: () => void; alert?: boolean }> = ({ icon, label, active, onClick, alert }) => (
  <button onClick={onClick} className={`flex w-16 flex-col items-center gap-1 transition-colors ${active ? 'text-mint' : 'text-ash'}`}>
    <span className="relative">
      <span className={`material-symbols-outlined text-[24px] ${active ? 'filled' : ''}`}>{icon}</span>
      {alert && <span className="absolute right-0 top-0 size-2 rounded-full border border-ink bg-flare" />}
    </span>
    <span className={`eyebrow text-[8px] ${active ? 'text-mint' : 'text-ash/70'}`}>{label}</span>
  </button>
);

const BottomDock: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (p: string) => location.pathname === p;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="border-t border-line bg-panel/90 px-4 pb-safe backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between">
          <DockItem icon="grid_view" label="Console" active={isActive(RoutePath.HOME)} onClick={() => navigate(RoutePath.HOME)} />
          <DockItem icon="map" label="Map" active={isActive(RoutePath.MAP)} onClick={() => navigate(RoutePath.MAP)} />
          <div className="relative -top-5">
            <button
              onClick={() => navigate(RoutePath.REPORT)}
              aria-label="Report incident"
              className="ticks flex size-14 items-center justify-center bg-flare text-white shadow-glow-red transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined filled text-[26px]">add_alert</span>
            </button>
          </div>
          <DockItem icon="notifications" label="Alerts" active={isActive(RoutePath.ALERTS)} onClick={() => navigate(RoutePath.ALERTS)} alert />
          <DockItem icon="person" label="Profile" active={isActive(RoutePath.PROFILE)} onClick={() => navigate(RoutePath.PROFILE)} />
        </div>
      </div>
    </div>
  );
};

export const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-ink text-bone">
    <SideRail />
    <main className="min-h-screen pb-24 lg:pb-0 lg:pl-60">{children}</main>
    <BottomDock />
  </div>
);
