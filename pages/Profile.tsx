import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import { signOut, getCurrentUser, AuthUser } from '../services/authService';

const Toggle: React.FC<{ on: boolean; onChange: () => void; label: string }> = ({ on, onChange, label }) => (
  <button
    role="switch"
    aria-checked={on}
    aria-label={label}
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 shrink-0 items-center border transition-colors ${on ? 'border-mint bg-mint/20' : 'border-line bg-panel-2'}`}
  >
    <span className={`inline-block h-4 w-4 transform transition-transform ${on ? 'translate-x-6 bg-mint' : 'translate-x-1 bg-ash'}`} />
  </button>
);

const Row: React.FC<{
  icon: string; title: string; sub?: string; trailing?: React.ReactNode; onClick?: () => void; danger?: boolean;
}> = ({ icon, title, sub, trailing, onClick, danger }) => (
  <div
    onClick={onClick}
    className={`flex min-h-[60px] items-center justify-between gap-4 border-b border-line px-4 last:border-b-0 ${onClick ? 'cursor-pointer transition-colors hover:bg-white/5' : ''}`}
  >
    <div className="flex items-center gap-4">
      <div className={`flex size-9 shrink-0 items-center justify-center border ${danger ? 'border-flare/40 bg-flare/10 text-flare' : 'border-line bg-panel-2 text-mint'}`}>
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </div>
      <div>
        <p className={`text-sm font-medium ${danger ? 'text-flare' : 'text-bone'}`}>{title}</p>
        {sub && <p className="text-xs text-ash">{sub}</p>}
      </div>
    </div>
    {trailing ?? <span className="material-symbols-outlined text-[18px] text-ash">chevron_right</span>}
  </div>
);

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);
  const [communityUpdates, setCommunityUpdates] = useState(false);
  const [smsBackup, setSmsBackup] = useState(true);

  useEffect(() => {
    getCurrentUser().then((u) => {
      setUser(u);
      setIsLoading(false);
    });
  }, []);

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      await signOut();
      navigate(RoutePath.LOGIN);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink">
        <div className="size-10 animate-spin rounded-full border-2 border-mint border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink pb-10">
      <header className="sticky top-0 z-30 border-b border-line bg-ink/85 backdrop-blur-xl pt-safe">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 lg:px-8">
          <div>
            <p className="eyebrow text-mint">Operator File</p>
            <h1 className="display mt-1 text-2xl lg:text-3xl">Profile</h1>
          </div>
          <button className="eyebrow border border-line px-4 py-2 text-[9px] text-mint transition-colors hover:border-mint">Edit</button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pt-6 lg:grid lg:grid-cols-5 lg:gap-8 lg:px-8">
        {/* Operator card */}
        <section className="lg:col-span-2" aria-label="Operator identity">
          <div className="ticks ops-panel-solid p-6">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <div
                  className="size-20 border border-mint/40 bg-cover bg-center"
                  style={{ backgroundImage: user?.avatar ? `url(${user.avatar})` : 'url(https://picsum.photos/200)' }}
                />
                <button className="absolute -bottom-1.5 -right-1.5 flex size-7 items-center justify-center border border-line bg-panel text-mint" aria-label="Change photo">
                  <span className="material-symbols-outlined text-[14px]">edit</span>
                </button>
              </div>
              <div className="min-w-0">
                <h2 className="truncate font-display text-xl font-bold text-bone">{user?.name || 'Operator'}</h2>
                <p className="truncate font-mono text-xs text-ash">{user?.email}</p>
                <span className={`eyebrow mt-2 inline-flex items-center gap-1.5 border px-2 py-1 text-[8px] ${user?.verified ? 'border-mint/40 bg-mint/10 text-mint' : 'border-amber/40 bg-amber/10 text-amber'}`}>
                  <span className="material-symbols-outlined filled text-[12px]">{user?.verified ? 'verified' : 'pending'}</span>
                  {user?.verified ? 'Verified Operator' : 'Verification Pending'}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-px border border-line bg-line text-center">
              {[
                { label: 'Reports', value: '12' },
                { label: 'Verified', value: '48' },
                { label: 'Sector', value: 'LAG' },
              ].map((s) => (
                <div key={s.label} className="bg-panel px-2 py-3">
                  <p className="font-mono text-lg font-semibold text-bone">{s.value}</p>
                  <p className="eyebrow mt-0.5 text-[8px] text-ash">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button className="eyebrow flex items-center gap-2 border border-line px-4 py-2.5 text-[9px] text-bone transition-colors hover:border-mint">
                <span className="material-symbols-outlined text-[16px] text-mint">share_location</span>
                Share Location
              </button>
              <button className="eyebrow flex items-center gap-2 border border-line px-4 py-2.5 text-[9px] text-bone transition-colors hover:border-mint">
                <span className="material-symbols-outlined text-[16px] text-mint">update</span>
                Status Update
              </button>
            </div>
          </div>
        </section>

        {/* Settings */}
        <section className="mt-8 lg:col-span-3 lg:mt-0" aria-label="Settings">
          <h3 className="eyebrow mb-2 px-1 text-ash">Critical Safety</h3>
          <div className="ops-panel-solid overflow-hidden">
            <Row icon="phone_in_talk" title="Emergency Contacts" sub="Family and first responders" trailing={<span className="flex items-center gap-2 text-xs text-ash">3 active<span className="material-symbols-outlined text-[18px]">chevron_right</span></span>} onClick={() => {}} />
            <Row icon="medical_services" title="Medical ID" sub="Blood type, allergies" onClick={() => {}} />
          </div>

          <h3 className="eyebrow mb-2 mt-6 px-1 text-ash">Notifications</h3>
          <div className="ops-panel-solid overflow-hidden">
            <Row icon="warning" title="Emergency Alerts" trailing={<Toggle on={emergencyAlerts} onChange={() => setEmergencyAlerts(!emergencyAlerts)} label="Emergency alerts" />} />
            <Row icon="campaign" title="Community Updates" trailing={<Toggle on={communityUpdates} onChange={() => setCommunityUpdates(!communityUpdates)} label="Community updates" />} />
            <Row icon="sms" title="SMS Backup" sub="Critical alerts by text when data is unavailable" trailing={<Toggle on={smsBackup} onChange={() => setSmsBackup(!smsBackup)} label="SMS backup" />} />
          </div>

          <h3 className="eyebrow mb-2 mt-6 px-1 text-ash">Account</h3>
          <div className="ops-panel-solid overflow-hidden">
            <Row icon="history" title="Incident History" onClick={() => navigate(RoutePath.HISTORY)} />
            <Row icon="translate" title="Language" trailing={<span className="flex items-center gap-2 text-xs text-ash">English<span className="material-symbols-outlined text-[18px]">chevron_right</span></span>} onClick={() => {}} />
            <Row icon="map" title="Offline Maps" trailing={<span className="flex items-center gap-2"><span className="eyebrow border border-mint/40 bg-mint/10 px-2 py-0.5 text-[8px] text-mint">Lagos</span><span className="material-symbols-outlined text-[18px] text-ash">chevron_right</span></span>} onClick={() => {}} />
            <Row icon="logout" title="Logout" danger onClick={handleLogout} trailing={<span />} />
          </div>

          <p className="mt-8 text-center font-mono text-[10px] text-ash/60">SafetyNet Nigeria · v1.0.4</p>
        </section>
      </div>
    </div>
  );
};
