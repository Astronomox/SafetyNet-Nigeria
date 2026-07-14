import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-safe">
      <div className="w-full max-w-[480px] pointer-events-auto px-6 pt-4 pb-3 border-t border-slate-200 dark:border-white/5 backdrop-blur-2xl bg-white/95 dark:bg-brand-dark/95 shadow-2xl">
        <div className="flex justify-between items-center h-16">
          {/* Home */}
          <button 
            onClick={() => navigate(RoutePath.HOME)}
            className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 group ${
              isActive(RoutePath.HOME) 
                ? 'text-primary-blue -translate-y-1' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <div className={`relative ${isActive(RoutePath.HOME) ? 'animate-bounce' : ''}`}>
              <span className={`material-symbols-outlined text-[28px] ${
                isActive(RoutePath.HOME) 
                  ? 'filled drop-shadow-[0_0_10px_rgba(13,89,242,0.6)]' 
                  : 'group-hover:scale-110 transition-transform'
              }`}>
                grid_view
              </span>
              {isActive(RoutePath.HOME) && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-blue animate-pulse"></div>
              )}
            </div>
            <span className={`text-[10px] font-bold transition-opacity ${
              isActive(RoutePath.HOME) ? 'opacity-100' : 'opacity-0'
            }`}>
              Home
            </span>
          </button>
          
          {/* Map */}
          <button 
            onClick={() => navigate(RoutePath.MAP)}
            className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 group ${
              isActive(RoutePath.MAP) 
                ? 'text-primary-blue -translate-y-1' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <div className={`relative ${isActive(RoutePath.MAP) ? 'animate-bounce' : ''}`}>
              <span className={`material-symbols-outlined text-[28px] ${
                isActive(RoutePath.MAP) 
                  ? 'filled drop-shadow-[0_0_10px_rgba(13,89,242,0.6)]' 
                  : 'group-hover:scale-110 transition-transform'
              }`}>
                map
              </span>
              {isActive(RoutePath.MAP) && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-blue animate-pulse"></div>
              )}
            </div>
            <span className={`text-[10px] font-bold transition-opacity ${
              isActive(RoutePath.MAP) ? 'opacity-100' : 'opacity-0'
            }`}>
              Map
            </span>
          </button>

          {/* Report Button (Center) */}
          <div className="relative -top-7">
            <button 
              onClick={() => navigate(RoutePath.REPORT)}
              className="size-16 rounded-full bg-gradient-to-br from-primary-red to-red-600 text-white shadow-2xl shadow-red-500/40 flex items-center justify-center active:scale-95 transition-all border-4 border-white dark:border-brand-dark group hover:shadow-red-500/60"
            >
              <span className="material-symbols-outlined text-[32px] filled group-hover:scale-110 transition-transform">add_alert</span>
            </button>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary-red/30 to-transparent rounded-full"></div>
          </div>

          {/* Alerts */}
          <button 
            onClick={() => navigate(RoutePath.ALERTS)}
            className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 group ${
              isActive(RoutePath.ALERTS) 
                ? 'text-primary-blue -translate-y-1' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <div className={`relative ${isActive(RoutePath.ALERTS) ? 'animate-bounce' : ''}`}>
              <span className={`material-symbols-outlined text-[28px] ${
                isActive(RoutePath.ALERTS) 
                  ? 'filled drop-shadow-[0_0_10px_rgba(13,89,242,0.6)]' 
                  : 'group-hover:scale-110 transition-transform'
              }`}>
                notifications
              </span>
              {/* Notification Badge */}
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-primary-red border-2 border-white dark:border-brand-dark animate-pulse"></span>
              {isActive(RoutePath.ALERTS) && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-blue animate-pulse"></div>
              )}
            </div>
            <span className={`text-[10px] font-bold transition-opacity ${
              isActive(RoutePath.ALERTS) ? 'opacity-100' : 'opacity-0'
            }`}>
              Alerts
            </span>
          </button>

          {/* Profile */}
          <button 
            onClick={() => navigate(RoutePath.PROFILE)}
            className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 group ${
              isActive(RoutePath.PROFILE) 
                ? 'text-primary-blue -translate-y-1' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <div className={`relative ${isActive(RoutePath.PROFILE) ? 'animate-bounce' : ''}`}>
              <span className={`material-symbols-outlined text-[28px] ${
                isActive(RoutePath.PROFILE) 
                  ? 'filled drop-shadow-[0_0_10px_rgba(13,89,242,0.6)]' 
                  : 'group-hover:scale-110 transition-transform'
              }`}>
                person
              </span>
              {isActive(RoutePath.PROFILE) && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-blue animate-pulse"></div>
              )}
            </div>
            <span className={`text-[10px] font-bold transition-opacity ${
              isActive(RoutePath.PROFILE) ? 'opacity-100' : 'opacity-0'
            }`}>
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};