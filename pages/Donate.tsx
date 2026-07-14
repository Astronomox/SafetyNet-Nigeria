import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Donate: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-brand-light dark:bg-brand-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col pb-safe">
             <header className="flex items-center px-4 py-3 justify-between bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-gray-800">
                <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Donate to SafetyNet</h1>
                <button className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined">share</span>
                </button>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
                <div className="p-4 pb-2">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-sm group">
                        <div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover transform group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url(https://picsum.photos/500/300?grayscale)'}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                            <span className="inline-block px-2 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-white bg-primary-blue rounded w-fit">Urgent</span>
                            <h2 className="text-white text-2xl font-bold leading-tight mb-1">Support Rapid Response</h2>
                            <p className="text-gray-200 text-sm font-medium">Your contribution powers AI-driven disaster relief in Nigeria.</p>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-2">
                    <div className="bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
                         <div className="flex justify-between items-end mb-2">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-slate-900 dark:text-white">₦7.5M</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">raised of ₦10M goal</span>
                            </div>
                            <span className="text-primary-blue font-bold text-sm bg-primary-blue/10 px-2 py-1 rounded">75%</span>
                        </div>
                        <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-blue rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <div className="flex items-center gap-2 mt-3 text-slate-500 dark:text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-base">group</span>
                            <span>1,240 donors contributed this week</span>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gray-200 dark:bg-gray-800 mx-4 my-2"></div>

                <div className="px-4 py-2 flex flex-col gap-6">
                     <div>
                        <h3 className="sr-only">Donation Frequency</h3>
                        <div className="flex p-1 bg-gray-200 dark:bg-gray-800 rounded-xl relative">
                             <label className="flex-1 text-center relative z-10 cursor-pointer">
                                <input className="peer sr-only" name="frequency" type="radio" value="once" defaultChecked />
                                <div className="py-2.5 text-sm font-semibold text-slate-500 dark:text-slate-400 peer-checked:text-primary-blue peer-checked:bg-white dark:peer-checked:bg-surface-dark peer-checked:shadow-sm rounded-lg transition-all duration-200">One-Time</div>
                            </label>
                            <label className="flex-1 text-center relative z-10 cursor-pointer">
                                <input className="peer sr-only" name="frequency" type="radio" value="monthly" />
                                <div className="py-2.5 text-sm font-semibold text-slate-500 dark:text-slate-400 peer-checked:text-primary-blue peer-checked:bg-white dark:peer-checked:bg-surface-dark peer-checked:shadow-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-1">
                                    Monthly <span className="material-symbols-outlined text-[16px]">favorite</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold">Select Amount</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <button className="py-3 px-2 rounded-xl border-2 border-transparent bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 font-bold hover:border-primary-blue/50 focus:border-primary-blue focus:bg-primary-blue/5 focus:text-primary-blue transition-all shadow-sm text-sm">₦1,000</button>
                            <button className="py-3 px-2 rounded-xl border-2 border-primary-blue bg-primary-blue/5 text-primary-blue font-bold shadow-sm text-sm ring-1 ring-primary-blue/20">₦5,000</button>
                            <button className="py-3 px-2 rounded-xl border-2 border-transparent bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 font-bold hover:border-primary-blue/50 focus:border-primary-blue focus:bg-primary-blue/5 focus:text-primary-blue transition-all shadow-sm text-sm">₦10,000</button>
                            <button className="py-3 px-2 rounded-xl border-2 border-transparent bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 font-bold hover:border-primary-blue/50 focus:border-primary-blue focus:bg-primary-blue/5 focus:text-primary-blue transition-all shadow-sm text-sm">₦20,000</button>
                            <button className="py-3 px-2 rounded-xl border-2 border-transparent bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 font-bold hover:border-primary-blue/50 focus:border-primary-blue focus:bg-primary-blue/5 focus:text-primary-blue transition-all shadow-sm text-sm">₦50,000</button>
                            <button className="py-3 px-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-transparent text-slate-500 dark:text-slate-400 font-medium hover:border-primary-blue hover:text-primary-blue focus:border-primary-blue focus:text-primary-blue transition-all text-sm">Custom</button>
                        </div>
                    </div>
                </div>
            </main>
             <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 dark:bg-[#101622]/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-30 flex flex-col gap-3">
                 <button className="w-full bg-black text-white hover:bg-gray-900 active:scale-[0.98] transition-all rounded-xl h-12 flex items-center justify-center gap-2 font-medium text-lg shadow-md">
                     <span className="material-symbols-outlined">apple</span>
                 </button>
                 <button className="w-full bg-primary-blue text-white hover:bg-blue-600 active:bg-blue-700 active:scale-[0.98] transition-all rounded-xl h-14 flex items-center justify-center font-bold text-lg shadow-lg shadow-primary-blue/20">
                    Donate ₦5,000
                </button>
                 <div className="flex items-center justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all pt-1">
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px] text-green-600">lock</span>
                        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">Secure SSL</span>
                    </div>
                    <div className="h-3 w-px bg-gray-300 dark:bg-gray-600"></div>
                     <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">PAYSTACK</span>
                        <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">FLUTTERWAVE</span>
                    </div>
                 </div>
             </div>
        </div>
    );
};