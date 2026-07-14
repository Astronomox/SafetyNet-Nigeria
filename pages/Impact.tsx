import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

export const Impact: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-gradient-to-b from-slate-50 to-white dark:from-brand-dark dark:to-[#0a0e16] text-slate-900 dark:text-white font-display min-h-screen flex flex-col">
            {/* Premium Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => navigate(RoutePath.HOME)}
                        className="size-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-blue/10 to-blue-600/10 hover:from-primary-blue/20 hover:to-blue-600/20 cursor-pointer transition-all active:scale-95 group"
                    >
                        <span className="material-symbols-outlined text-primary-blue text-xl group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
                    </button>
                    <div>
                        <h2 className="text-lg font-bold leading-none tracking-tight">Impact Dashboard</h2>
                        <div className="flex items-center gap-1.5 mt-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                            </span>
                            <span className="text-[10px] font-medium text-success uppercase tracking-wider">Live Updates</span>
                        </div>
                    </div>
                </div>
                <button className="size-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-slate-600 dark:text-gray-300">share</span>
                </button>
            </header>

            <main className="flex-1 flex flex-col pb-24">
                {/* Hero Stats Section */}
                <div className="px-5 pt-6 pb-4">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">Real-Time Impact</h1>
                    <p className="text-sm text-slate-600 dark:text-gray-400">AI-driven disaster response across Nigeria</p>
                </div>

                {/* Premium Stat Cards */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 py-4 pb-6 no-scrollbar">
                    <div className="snap-center shrink-0 w-[260px] flex flex-col gap-3 p-6 rounded-3xl bg-gradient-to-br from-primary-blue to-blue-600 shadow-2xl shadow-primary-blue/30 text-white relative overflow-hidden group border border-blue-400/20">
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="flex justify-between items-start z-10">
                            <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-[28px]">favorite</span>
                            </div>
                            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">+12 Today</span>
                        </div>
                        <div className="z-10 mt-2">
                            <p className="text-5xl font-black tracking-tight drop-shadow-lg">1,248</p>
                            <p className="text-blue-100 text-base font-semibold mt-2">Lives Saved</p>
                        </div>
                    </div>

                    <div className="snap-center shrink-0 w-[260px] flex flex-col gap-3 p-6 rounded-3xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 relative overflow-hidden shadow-xl">
                        <div className="flex justify-between items-start">
                            <div className="size-12 rounded-2xl bg-warning/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-warning text-[28px]">notifications_active</span>
                            </div>
                            <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">+5% ↑</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">54k</p>
                            <p className="text-slate-600 dark:text-gray-400 text-base font-semibold mt-2">Alerts Dispatched</p>
                        </div>
                    </div>

                    <div className="snap-center shrink-0 w-[260px] flex flex-col gap-3 p-6 rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-2xl shadow-emerald-500/30 text-white relative overflow-hidden group border border-emerald-400/20">
                        <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="flex justify-between items-start z-10">
                            <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-[28px]">timer</span>
                            </div>
                            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">14m avg</span>
                        </div>
                        <div className="z-10 mt-2">
                            <p className="text-5xl font-black tracking-tight drop-shadow-lg">18m</p>
                            <p className="text-emerald-100 text-base font-semibold mt-2">Response Time</p>
                        </div>
                    </div>
                </div>

                {/* Trends Section */}
                <section className="px-5 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Historical Trends</h3>
                        <div className="flex bg-slate-100 dark:bg-white/5 rounded-xl p-1 gap-1 border border-slate-200 dark:border-white/10">
                            <button className="px-4 py-2 text-xs font-bold rounded-lg bg-white dark:bg-surface-dark shadow-sm text-primary-blue transition-all">7D</button>
                            <button className="px-4 py-2 text-xs font-bold rounded-lg text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">1M</button>
                            <button className="px-4 py-2 text-xs font-bold rounded-lg text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">3M</button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 border border-slate-200 dark:border-white/5 shadow-xl">
                        <div className="flex p-1.5 bg-slate-100 dark:bg-brand-dark rounded-2xl mb-6 gap-1.5">
                            <button className="flex-1 py-3 text-xs font-bold rounded-xl bg-white dark:bg-surface-dark text-primary-blue shadow-md transition-all">Lives Saved</button>
                            <button className="flex-1 py-3 text-xs font-semibold rounded-xl text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">Alerts Sent</button>
                            <button className="flex-1 py-3 text-xs font-semibold rounded-xl text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">Response</button>
                        </div>

                        <div className="relative w-full h-52">
                            <svg className="absolute inset-0 h-full w-full pb-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 350 150">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style={{stopColor: '#0d59f2', stopOpacity: 0.3}} />
                                        <stop offset="100%" style={{stopColor: '#0d59f2', stopOpacity: 0}} />
                                    </linearGradient>
                                </defs>
                                <path d="M0,150 L0,120 C20,115 40,130 58,100 C76,70 100,90 116,80 C132,70 150,40 175,50 C200,60 220,30 233,25 C246,20 270,35 291,15 C312,-5 330,10 350,5 L350,150 Z" fill="url(#chartGradient)"></path>
                                <path d="M0,120 C20,115 40,130 58,100 C76,70 100,90 116,80 C132,70 150,40 175,50 C200,60 220,30 233,25 C246,20 270,35 291,15 C312,-5 330,10 350,5" fill="none" stroke="#0d59f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                                <circle cx="175" cy="50" fill="white" r="4" stroke="#0d59f2" strokeWidth="3"></circle>
                                <circle cx="291" cy="15" fill="#0d59f2" r="6" stroke="white" strokeWidth="3"></circle>
                            </svg>
                            <div className="absolute top-[10%] right-[17%] transform -translate-y-1/2 z-10">
                                <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold py-2 px-3 rounded-xl shadow-2xl whitespace-nowrap">185 Lives</div>
                            </div>
                        </div>

                        <div className="flex justify-between text-[11px] text-slate-500 dark:text-gray-400 font-medium pt-3 px-2">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </div>
                </section>

                {/* Live Map Section */}
                <section className="px-5 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Live Crisis Map</h3>
                        <button 
                            onClick={() => navigate(RoutePath.MAP)}
                            className="text-sm font-bold text-primary-blue uppercase tracking-wider hover:underline flex items-center gap-1"
                        >
                            Open Map
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                    </div>

                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-surface-dark shadow-2xl border border-slate-200 dark:border-white/5 group cursor-pointer" onClick={() => navigate(RoutePath.MAP)}>
                        <div className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80)'}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Pulsing Marker */}
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
                            <div className="relative">
                                <div className="absolute w-6 h-6 bg-primary-blue rounded-full animate-ping opacity-75"></div>
                                <div className="relative w-6 h-6 bg-primary-blue rounded-full border-3 border-white shadow-[0_0_20px_rgba(13,89,242,0.8)]"></div>
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 flex items-center gap-3 shadow-2xl">
                            <div className="bg-primary-blue/20 p-3 rounded-xl backdrop-blur-sm">
                                <span className="material-symbols-outlined text-primary-blue text-lg">flood</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-white/70 uppercase font-semibold tracking-wide">Active Incident</p>
                                <p className="text-sm font-bold text-white mt-0.5">Flash Flood: Lagos Island</p>
                            </div>
                            <span className="text-xs font-bold text-white bg-red-500/90 px-3 py-1.5 rounded-lg backdrop-blur-sm">CRITICAL</span>
                        </div>
                    </div>
                </section>

                {/* Response Times */}
                <section className="px-5 py-4">
                    <h3 className="text-xl font-bold mb-4">Agency Response Times</h3>
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 border border-slate-200 dark:border-white/5 shadow-xl">
                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-semibold">Police Force</span>
                                    <span className="font-bold text-primary-blue">14 min</span>
                                </div>
                                <div className="h-3 w-full bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-primary-blue to-blue-500 rounded-full shadow-lg" style={{width: '35%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-semibold">Medical / Ambulance</span>
                                    <span className="font-bold text-emerald-600">18 min</span>
                                </div>
                                <div className="h-3 w-full bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full shadow-lg" style={{width: '45%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-semibold">Fire Service</span>
                                    <span className="font-bold text-orange-600">22 min</span>
                                </div>
                                <div className="h-3 w-full bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg" style={{width: '55%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Donation Impact */}
                <section className="px-5 py-4">
                    <div className="rounded-3xl bg-gradient-to-br from-[#1a2332] to-[#0f1521] p-7 border border-white/10 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <span className="material-symbols-outlined text-7xl">volunteer_activism</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Donation Impact</h3>
                        <p className="text-xs text-gray-400 mb-6">Transparent tracking of funds</p>
                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-5xl font-black text-white">$450k</span>
                            <span className="text-sm text-success font-medium mb-2">Total Raised</span>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                                        <span className="text-gray-300 text-sm">Direct Aid</span>
                                    </div>
                                    <span className="font-bold text-white">85%</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full shadow-lg" style={{width: '85%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                                        <span className="text-gray-300 text-sm">Operations</span>
                                    </div>
                                    <span className="font-bold text-white">10%</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full shadow-lg" style={{width: '10%'}}></div>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => navigate(RoutePath.DONATE)} 
                            className="w-full mt-6 bg-primary-blue hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all text-base flex items-center justify-center gap-2 shadow-xl shadow-primary-blue/30 active:scale-95"
                        >
                            <span>Donate Now</span>
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-2xl border-t border-slate-200 dark:border-white/5 pb-5 pt-3 px-6 shadow-2xl max-w-[480px] mx-auto">
                <div className="flex justify-between items-center">
                    <button className="flex flex-col items-center gap-1 text-primary-blue group">
                        <span className="material-symbols-outlined filled group-hover:scale-110 transition-transform">dashboard</span>
                        <span className="text-[10px] font-bold">Dashboard</span>
                    </button>
                    <button onClick={() => navigate(RoutePath.MAP)} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-gray-300 group">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">map</span>
                        <span className="text-[10px] font-medium">Map</span>
                    </button>
                    <button onClick={() => navigate(RoutePath.REPORT)} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-gray-300 group">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">report_problem</span>
                        <span className="text-[10px] font-medium">Report</span>
                    </button>
                    <button onClick={() => navigate(RoutePath.HOME)} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-gray-300 group">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">home</span>
                        <span className="text-[10px] font-medium">Home</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};