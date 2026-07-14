import React from 'react';
import { useNavigate } from 'react-router-dom';

export const History: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-brand-light dark:bg-brand-dark shadow-2xl">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-brand-light/90 dark:bg-brand-dark/90 backdrop-blur-md px-4 py-4 border-b border-gray-200 dark:border-white/5">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px] text-slate-900 dark:text-white">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center text-slate-900 dark:text-white">My Reports</h1>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px] text-slate-900 dark:text-white">filter_list</span>
        </button>
      </header>

      <section className="px-4 py-6 w-full">
        <div className="flex gap-3 w-full">
          <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 border border-gray-100 dark:border-white/5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Pending</p>
            <p className="text-2xl font-bold text-amber-500">1</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 border border-primary-blue/20 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-blue/5 group-hover:bg-primary-blue/10 transition-colors"></div>
            <p className="text-xs font-medium uppercase tracking-wider text-primary-blue">Active</p>
            <p className="text-2xl font-bold text-primary-blue">1</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 border border-gray-100 dark:border-white/5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Resolved</p>
            <p className="text-2xl font-bold text-emerald-500">2</p>
          </div>
        </div>
      </section>

      <main className="flex-1 px-4 flex flex-col gap-4 pb-24">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Recent Activity</h2>
        
        <article className="group relative flex flex-col gap-3 rounded-2xl bg-white dark:bg-surface-dark p-3 border border-gray-100 dark:border-white/5 shadow-sm active:scale-[0.99] transition-transform duration-100 cursor-pointer overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-blue"></div>
          <div className="flex gap-4">
            <div className="relative shrink-0 overflow-hidden rounded-xl size-20 bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/100?grayscale)'}}></div>
            </div>
            <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold leading-tight truncate pr-2 text-slate-900 dark:text-white">Flash Flood - Lekki Phas...</h3>
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ID: #REF-2094</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-blue/10 px-2.5 py-1 text-xs font-bold text-primary-blue ring-1 ring-inset ring-primary-blue/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
                  </span>
                  In Progress
                </span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">2 hours ago</span>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative flex flex-col gap-3 rounded-2xl bg-white dark:bg-surface-dark p-3 border border-gray-100 dark:border-white/5 shadow-sm active:scale-[0.99] transition-transform duration-100 cursor-pointer">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
          <div className="flex gap-4">
            <div className="relative shrink-0 overflow-hidden rounded-xl size-20 bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/101?grayscale)'}}></div>
            </div>
            <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold leading-tight line-clamp-2 pr-2 text-slate-900 dark:text-white">Road Obstruction - Third Mainland Bridge</h3>
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ID: #REF-2093</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-500 ring-1 ring-inset ring-amber-500/20">
                  <span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                  Pending
                </span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Yesterday</span>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative flex flex-col gap-3 rounded-2xl bg-white dark:bg-surface-dark p-3 border border-gray-100 dark:border-white/5 shadow-sm active:scale-[0.99] transition-transform duration-100 cursor-pointer">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
          <div className="flex gap-4">
            <div className="relative shrink-0 overflow-hidden rounded-xl size-20 bg-gray-200 dark:bg-gray-800">
               <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/102?grayscale)'}}></div>
            </div>
            <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold leading-tight truncate pr-2 text-slate-900 dark:text-white">Fallen Tree - Victoria Isl...</h3>
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ID: #REF-1982</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Resolved
                </span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Oct 12, 2023</span>
              </div>
            </div>
          </div>
        </article>
        
        <article className="group relative flex flex-col gap-3 rounded-2xl bg-white dark:bg-surface-dark p-3 border border-gray-100 dark:border-white/5 shadow-sm active:scale-[0.99] transition-transform duration-100 cursor-pointer opacity-80">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
          <div className="flex gap-4">
            <div className="relative shrink-0 overflow-hidden rounded-xl size-20 bg-gray-200 dark:bg-gray-800">
               <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/103?grayscale)'}}></div>
            </div>
            <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold leading-tight truncate pr-2 text-slate-900 dark:text-white">Power Outage - Ikeja GRA</h3>
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ID: #REF-1855</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Resolved
                </span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Sep 04, 2023</span>
              </div>
            </div>
          </div>
        </article>
      </main>

      <div className="fixed bottom-24 right-6 z-30">
        <button className="flex items-center justify-center size-14 rounded-full bg-primary-blue text-white shadow-lg shadow-primary-blue/40 hover:bg-primary-blue/90 transition-all active:scale-95">
          <span className="material-symbols-outlined text-[28px]">notifications</span>
        </button>
      </div>
    </div>
  );
};