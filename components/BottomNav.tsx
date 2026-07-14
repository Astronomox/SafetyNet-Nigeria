import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-safe">
        <div className="glass-dark w-full max-w-[480px] pointer-events-auto px-6 pt-3 pb-2 border-t border-white/5 backdrop-blur-xl bg-brand-dark/80 supports-[backdrop-filter]:bg-brand-dark/60">
            <div className="flex justify-between items-center h-14">
                <button 
                onClick={() => navigate(RoutePath.HOME)}
                className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 ${isActive(RoutePath.HOME) ? 'text-primary-blue -translate-y-1' : 'text-slate-400 hover:text-white'}`}
                >
                    <span className={`material-symbols-outlined text-[26px] ${isActive(RoutePath.HOME) ? 'filled drop-shadow-[0_0_8px_rgba(13,89,242,0.5)]' : ''}`}>grid_view</span>
                    <span className={`text-[10px] font-bold ${isActive(RoutePath.HOME) ? 'opacity-100' : 'opacity-0'}`}>Home</span>
                </button>
                
                <button 
                onClick={() => navigate(RoutePath.MAP)}
                className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 ${isActive(RoutePath.MAP) ? 'text-primary-blue -translate-y-1' : 'text-slate-400 hover:text-white'}`}
                >
                    <span className={`material-symbols-outlined text-[26px] ${isActive(RoutePath.MAP) ? 'filled drop-shadow-[0_0_8px_rgba(13,89,242,0.5)]' : ''}`}>map</span>
                    <span className={`text-[10px] font-bold ${isActive(RoutePath.MAP) ? 'opacity-100' : 'opacity-0'}`}>Map</span>
                </button>

                <div className="relative -top-6">
                     <button 
                        onClick={() => navigate(RoutePath.REPORT)}
                        className="size-14 rounded-full bg-primary-red text-white shadow-glow-red flex items-center justify-center active:scale-95 transition-transform border-4 border-brand-light dark:border-brand-dark">
                         <span className="material-symbols-outlined text-[28px] filled">add_alert</span>
                     </button>
                </div>

                <button 
                onClick={() => navigate(RoutePath.ALERTS)}
                className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 ${isActive(RoutePath.ALERTS) ? 'text-primary-blue -translate-y-1' : 'text-slate-400 hover:text-white'}`}
                >
                    <div className="relative">
                        <span className={`material-symbols-outlined text-[26px] ${isActive(RoutePath.ALERTS) ? 'filled drop-shadow-[0_0_8px_rgba(13,89,242,0.5)]' : ''}`}>notifications</span>
                        <span className="absolute top-0 right-0.5 h-2 w-2 rounded-full bg-primary-red border border-brand-dark"></span>
                    </div>
                    <span className={`text-[10px] font-bold ${isActive(RoutePath.ALERTS) ? 'opacity-100' : 'opacity-0'}`}>Alerts</span>
                </button>

                <button 
                onClick={() => navigate(RoutePath.PROFILE)}
                className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 ${isActive(RoutePath.PROFILE) ? 'text-primary-blue -translate-y-1' : 'text-slate-400 hover:text-white'}`}
                >
                    <span className={`material-symbols-outlined text-[26px] ${isActive(RoutePath.PROFILE) ? 'filled drop-shadow-[0_0_8px_rgba(13,89,242,0.5)]' : ''}`}>person</span>
                    <span className={`text-[10px] font-bold ${isActive(RoutePath.PROFILE) ? 'opacity-100' : 'opacity-0'}`}>Profile</span>
                </button>
            </div>
        </div>
    </div>
  );
};