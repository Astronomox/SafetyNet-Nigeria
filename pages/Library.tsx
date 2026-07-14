import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

export const Library: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-brand-light dark:bg-brand-dark text-slate-900 dark:text-white font-display min-h-screen pb-20">
             <header className="sticky top-0 z-20 bg-brand-light/95 dark:bg-brand-dark/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-2xl font-bold tracking-tight">Library</h1>
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">settings</span>
                </button>
            </header>

            <div className="px-4 py-4">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-primary-blue">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input className="block w-full p-3.5 pl-10 text-sm text-gray-900 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-primary-blue focus:border-primary-blue dark:placeholder-gray-400 dark:text-white shadow-sm" placeholder="Search guides, e.g., 'CPR' or 'Floods'" required type="text" />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary-blue transition-colors">
                        <span className="material-symbols-outlined">mic</span>
                    </button>
                </div>
            </div>

             <div className="flex gap-3 px-4 pb-6 overflow-x-auto no-scrollbar">
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-blue px-5 shadow-lg shadow-primary-blue/20 transition-transform active:scale-95">
                    <span className="text-white text-sm font-semibold">All</span>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-5 hover:border-primary-blue/50 transition-colors">
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">Floods</span>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-5 hover:border-primary-blue/50 transition-colors">
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">First Aid</span>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-5 hover:border-primary-blue/50 transition-colors">
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">Fire</span>
                </button>
            </div>

            <div className="flex flex-col gap-3 pb-8">
                <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-bold tracking-tight">Essential Preparedness</h2>
                    <a className="text-sm font-medium text-primary-blue hover:text-primary-blue/80" href="#">See all</a>
                </div>
                 <div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar">
                     <div className="flex flex-col gap-3 shrink-0 w-64 group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url(https://picsum.photos/400/250)'}}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md rounded-md px-2 py-1 flex items-center gap-1">
                                <span className="material-symbols-outlined text-white text-[16px]">book</span>
                                <span className="text-xs font-medium text-white">Guide</span>
                            </div>
                            <div className="absolute bottom-3 left-3">
                                <span className="inline-flex items-center rounded-md bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300 ring-1 ring-inset ring-green-500/30 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-[14px] mr-1">offline_pin</span> Offline Ready
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base leading-tight text-gray-900 dark:text-white mb-1 group-hover:text-primary-blue transition-colors">Emergency Go-Bag Guide</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">10 min read • Updated today</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 shrink-0 w-64 group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url(https://picsum.photos/401/250)'}}></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="h-10 w-10 bg-primary-blue/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white">play_arrow</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base leading-tight text-gray-900 dark:text-white mb-1 group-hover:text-primary-blue transition-colors">CPR Basics Video</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Video Course • Medical</p>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="flex flex-col px-4 gap-4">
                <h2 className="text-lg font-bold tracking-tight mb-1">Latest Resources</h2>
                
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm active:scale-[0.99] transition-transform">
                    <div className="h-20 w-20 shrink-0 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/150/150)'}}></div>
                    <div className="flex flex-col flex-1 h-full justify-between py-0.5">
                        <div>
                            <div className="flex items-start justify-between">
                                <h3 className="font-semibold text-base text-gray-900 dark:text-white line-clamp-2 leading-snug">Treating Burns: Immediate Action</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">Learn the first steps to take for thermal burns.</p>
                        </div>
                         <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-400">First Aid</span>
                            </div>
                            <button className="text-gray-400 hover:text-primary-blue">
                                <span className="material-symbols-outlined text-[20px]">download</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm active:scale-[0.99] transition-transform">
                    <div className="h-20 w-20 shrink-0 rounded-lg bg-cover bg-center relative overflow-hidden" style={{backgroundImage: 'url(https://picsum.photos/151/150)'}}>
                         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-2xl drop-shadow-lg">play_circle</span>
                        </div>
                    </div>
                     <div className="flex flex-col flex-1 h-full justify-between py-0.5">
                        <div>
                            <div className="flex items-start justify-between">
                                <h3 className="font-semibold text-base text-gray-900 dark:text-white line-clamp-2 leading-snug">Recognizing Structural Cracks</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">Expert guide on building safety signals.</p>
                        </div>
                         <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 text-xs font-medium text-orange-700 dark:text-orange-400">Safety</span>
                                <span className="text-xs text-gray-400">4:20</span>
                            </div>
                            <button className="text-gray-400 hover:text-primary-blue">
                                <span className="material-symbols-outlined text-[20px]">download</span>
                            </button>
                        </div>
                    </div>
                </div>

                 <div className="flex items-start gap-4 p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm active:scale-[0.99] transition-transform">
                    <div className="h-20 w-20 shrink-0 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/152/150)'}}></div>
                     <div className="flex flex-col flex-1 h-full justify-between py-0.5">
                        <div>
                            <div className="flex items-start justify-between">
                                <h3 className="font-semibold text-base text-gray-900 dark:text-white line-clamp-2 leading-snug">Lagos State Emergency Contacts</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">Direct lines for Fire, Police, and Ambulance.</p>
                        </div>
                         <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded bg-red-50 dark:bg-red-900/30 px-2 py-0.5 text-xs font-medium text-red-700 dark:text-red-400">Urgent</span>
                            </div>
                             <button className="text-primary-blue hover:text-primary-blue/80">
                                <span className="material-symbols-outlined text-[20px] fill-current">offline_pin</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

             <div className="fixed bottom-24 right-4 z-30">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg shadow-red-600/40 transition-transform active:scale-90 hover:bg-red-700">
                    <span className="material-symbols-outlined text-white text-2xl font-bold">sos</span>
                </button>
            </div>

            <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe">
                <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
                     <button onClick={() => navigate(RoutePath.HOME)} className="flex flex-col items-center gap-1 w-full text-gray-400 hover:text-primary-blue transition-colors">
                        <span className="material-symbols-outlined text-[26px]">home</span>
                        <span className="text-[10px] font-medium">Home</span>
                    </button>
                     <button onClick={() => navigate(RoutePath.MAP)} className="flex flex-col items-center gap-1 w-full text-gray-400 hover:text-primary-blue transition-colors">
                        <span className="material-symbols-outlined text-[26px]">map</span>
                        <span className="text-[10px] font-medium">Map</span>
                    </button>
                     <button className="flex flex-col items-center gap-1 w-full text-primary-blue transition-colors">
                        <span className="material-symbols-outlined text-[26px] filled">library_books</span>
                        <span className="text-[10px] font-medium">Library</span>
                    </button>
                     <button onClick={() => navigate(RoutePath.ALERTS)} className="flex flex-col items-center gap-1 w-full text-gray-400 hover:text-primary-blue transition-colors">
                        <span className="material-symbols-outlined text-[26px]">notifications</span>
                        <span className="text-[10px] font-medium">Alerts</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};