import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

// Reusing icon logic for consistency
const createPulsingIcon = (colorClass: string, iconName: string) => {
    return L.divIcon({
        className: 'custom-div-icon',
        html: `
        <div class="relative flex items-center justify-center size-8">
            <div class="absolute inset-0 ${colorClass} opacity-20 rounded-full animate-ping"></div>
            <div class="relative z-10 size-6 bg-brand-dark/90 rounded-full border border-white flex items-center justify-center shadow-md">
                <span class="material-symbols-outlined text-white text-[14px]">${iconName}</span>
            </div>
        </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
    });
};

const DangerIcon = createPulsingIcon('bg-red-500', 'flood');
const ResponderIcon = createPulsingIcon('bg-blue-500', 'ambulance');

export const Responder: React.FC = () => {
    return (
        <div className="bg-brand-dark text-white font-display min-h-screen flex flex-col overflow-hidden">
            {/* Status Bar */}
            <header className="bg-surface-dark/90 backdrop-blur-md border-b border-white/5 pt-safe">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="size-10 rounded-full border-2 border-warning bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/60)'}}></div>
                            <div className="absolute -bottom-0.5 -right-0.5 size-3.5 bg-brand-dark rounded-full flex items-center justify-center">
                                <div className="size-2.5 bg-warning rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-black tracking-widest text-warning uppercase">En Route</span>
                                <span className="text-[10px] text-gray-500">●</span>
                                <span className="text-[10px] font-mono text-gray-400">ID: NEMA-04</span>
                            </div>
                            <p className="text-sm font-bold text-white leading-none mt-0.5">Ambulance Unit Alpha</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                         <div className="h-9 px-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                            <span className="material-symbols-outlined text-green-500 text-[16px]">wifi</span>
                            <span className="text-[10px] font-bold font-mono">5G</span>
                        </div>
                    </div>
                </div>
                
                {/* Tab Navigation */}
                <div className="flex px-2 pb-1">
                    <button className="flex-1 pb-3 pt-1 border-b-2 border-primary-red text-white flex flex-col items-center gap-1">
                         <span className="material-symbols-outlined text-[20px] text-primary-red">emergency</span>
                         <span className="text-[10px] font-bold uppercase tracking-wide">Mission</span>
                    </button>
                    <button className="flex-1 pb-3 pt-1 border-b-2 border-transparent text-gray-500 flex flex-col items-center gap-1">
                         <span className="material-symbols-outlined text-[20px]">map</span>
                         <span className="text-[10px] font-bold uppercase tracking-wide">Map</span>
                    </button>
                    <button className="flex-1 pb-3 pt-1 border-b-2 border-transparent text-gray-500 flex flex-col items-center gap-1">
                         <span className="material-symbols-outlined text-[20px]">inventory</span>
                         <span className="text-[10px] font-bold uppercase tracking-wide">Log</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar pb-safe">
                {/* Live Map Preview */}
                 <div className="relative h-48 w-full bg-slate-800 border-b border-white/5 group z-0">
                    <MapContainer 
                        center={[6.44, 3.42]} 
                        zoom={13} 
                        zoomControl={false} 
                        className="h-full w-full bg-slate-900"
                        dragging={false}
                        touchZoom={false}
                        doubleClickZoom={false}
                        scrollWheelZoom={false}
                    >
                         <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        />
                        <Marker position={[6.43, 3.48]} icon={DangerIcon} />
                        <Marker position={[6.445, 3.425]} icon={ResponderIcon} />
                    </MapContainer>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent pointer-events-none"></div>
                    
                    {/* Navigation Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
                         <div className="glass-panel px-3 py-2 rounded-lg flex items-center gap-3 border-l-4 border-primary-blue shadow-lg">
                             <span className="material-symbols-outlined text-white text-2xl">turn_right</span>
                             <div>
                                 <p className="text-[10px] text-gray-400 font-bold uppercase">200m</p>
                                 <p className="text-sm font-bold text-white leading-none">Kingsway Rd.</p>
                             </div>
                         </div>
                         <button className="size-10 glass rounded-full flex items-center justify-center text-white active:scale-95 transition-transform">
                             <span className="material-symbols-outlined">near_me</span>
                         </button>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 z-10">
                        <span className="bg-primary-red/90 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wide">Incident Site</span>
                    </div>
                 </div>

                 {/* Mission Details */}
                 <div className="px-5 -mt-6 relative z-10">
                    <div className="glass-dark rounded-2xl p-5 border border-white/10 shadow-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="inline-block px-2 py-0.5 rounded bg-primary-red/20 text-primary-red text-[10px] font-bold uppercase tracking-wider border border-primary-red/20 mb-2">Critical Priority</span>
                                <h1 className="text-2xl font-bold text-white leading-tight">Building Collapse</h1>
                                <p className="text-gray-400 text-sm mt-0.5">Victoria Island, Lagos</p>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-mono font-bold text-primary-blue leading-none">08</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Mins ETA</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                             <button className="bg-primary-blue hover:bg-blue-600 text-white rounded-xl py-3 flex flex-col items-center gap-1 transition-colors active:scale-95">
                                <span className="material-symbols-outlined text-[22px]">navigation</span>
                                <span className="text-[10px] font-bold uppercase">Navigate</span>
                             </button>
                             <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl py-3 flex flex-col items-center gap-1 transition-colors active:scale-95">
                                <span className="material-symbols-outlined text-[22px]">call</span>
                                <span className="text-[10px] font-bold uppercase">Contact</span>
                             </button>
                             <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl py-3 flex flex-col items-center gap-1 transition-colors active:scale-95">
                                <span className="material-symbols-outlined text-[22px]">add_a_photo</span>
                                <span className="text-[10px] font-bold uppercase">Report</span>
                             </button>
                        </div>

                        {/* Status Slider */}
                        <div className="p-1 bg-black/40 rounded-xl border border-white/5 grid grid-cols-3 relative overflow-hidden">
                             <button className="py-2 text-[10px] font-bold text-gray-500 uppercase z-10">Assigned</button>
                             <button className="py-2 text-[10px] font-bold text-white uppercase z-10">En Route</button>
                             <button className="py-2 text-[10px] font-bold text-gray-500 uppercase z-10">On Scene</button>
                             <div className="absolute top-1 bottom-1 left-[33.33%] w-[33.33%] bg-primary-blue rounded-lg shadow-lg"></div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="mt-4 grid grid-cols-1 gap-4 pb-24">
                        <div className="bg-surface-dark border border-white/5 rounded-2xl p-4">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Incoming Intel</h3>
                            <div className="flex gap-3 items-start">
                                <div className="size-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-sm">smart_toy</span>
                                </div>
                                <div>
                                    <p className="text-sm text-white leading-snug"><span className="text-purple-400 font-bold">Guardian AI:</span> Structural integrity of North wall compromising. Approach from South entrance.</p>
                                    <p className="text-[10px] text-gray-500 mt-1">2 mins ago</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-dark border border-white/5 rounded-2xl p-4">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Resource Manifest</h3>
                             <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">medical_services</span>
                                        <span className="text-sm font-medium text-white">Trauma Kits</span>
                                    </div>
                                    <span className="text-xs font-bold text-green-500">Full Stock</span>
                                </div>
                                <div className="h-px bg-white/5"></div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">oxygen_bank</span>
                                        <span className="text-sm font-medium text-white">O2 Tanks</span>
                                    </div>
                                    <span className="text-xs font-bold text-yellow-500">2 Units</span>
                                </div>
                             </div>
                        </div>
                    </div>
                 </div>
            </main>

            {/* Quick Action FAB */}
            <div className="fixed bottom-6 right-6 z-40">
                <button className="size-16 rounded-full bg-primary-blue text-white shadow-2xl shadow-primary-blue/40 flex items-center justify-center active:scale-90 transition-transform border-4 border-brand-dark">
                    <span className="material-symbols-outlined text-3xl">mic</span>
                </button>
            </div>
        </div>
    );
};