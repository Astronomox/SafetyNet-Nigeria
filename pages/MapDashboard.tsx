import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import { RoutePath } from '../types';

// Mapbox Coords are [Lng, Lat]
const LAGOS_COORDS: [number, number] = [3.40, 6.45]; 
const INCIDENT_COORDS: [number, number] = [3.48, 6.43];
const SAFE_ZONE_COORDS: [number, number] = [3.36, 6.49];
const USER_COORDS: [number, number] = [3.42, 6.44];

// Set Access Token - Try from env first, fallback to placeholder
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || 
  'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGUwZyJ9.example';

mapboxgl.accessToken = MAPBOX_TOKEN;

export const MapDashboard: React.FC = () => {
    const navigate = useNavigate();
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [mapReady, setMapReady] = useState(false);
    const [mapError, setMapError] = useState<string | null>(null);

    const createMarkerElement = (colorClass: string, iconName: string) => {
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.innerHTML = `
            <div class="relative flex items-center justify-center size-10">
                <div class="absolute inset-0 ${colorClass} opacity-20 rounded-full animate-ping"></div>
                <div class="absolute inset-1 ${colorClass} opacity-40 rounded-full animate-pulse"></div>
                <div class="relative z-10 size-8 bg-brand-dark/90 rounded-full border-2 border-white flex items-center justify-center shadow-lg backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-white text-[18px]">${iconName}</span>
                </div>
            </div>
        `;
        return el;
    };

    useEffect(() => {
        if (map.current) return;
        if (!mapContainer.current) return;

        // Check if token is valid
        if (!MAPBOX_TOKEN || MAPBOX_TOKEN.includes('example')) {
            console.error("⚠️ Mapbox token missing or invalid. Get one at https://account.mapbox.com/");
            setMapError("Map token missing. Get a free token at https://account.mapbox.com/");
            setMapReady(true); // Show error state
            return;
        }

        try {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/dark-v11',
                center: LAGOS_COORDS,
                zoom: 12,
                attributionControl: false,
                pitch: 45,
                bearing: -17.6,
            });

            const mapInstance = map.current;

            mapInstance.on('load', () => {
                setMapReady(true);
                
                // Add 3D buildings
                const layers = mapInstance.getStyle().layers;
                const labelLayerId = layers?.find(
                    (layer) => layer.type === 'symbol' && 'text-field' in (layer.layout || {})
                )?.id;

                mapInstance.addLayer(
                    {
                        'id': 'add-3d-buildings',
                        'source': 'composite',
                        'source-layer': 'building',
                        'filter': ['==', 'extrude', 'true'],
                        'type': 'fill-extrusion',
                        'minzoom': 13,
                        'paint': {
                            'fill-extrusion-color': '#2a3441',
                            'fill-extrusion-height': [
                                'interpolate',
                                ['linear'],
                                ['zoom'],
                                13,
                                0,
                                13.05,
                                ['get', 'height']
                            ],
                            'fill-extrusion-base': [
                                'interpolate',
                                ['linear'],
                                ['zoom'],
                                13,
                                0,
                                13.05,
                                ['get', 'min_height']
                            ],
                            'fill-extrusion-opacity': 0.8
                        }
                    },
                    labelLayerId
                );

                // Add markers
                const incidentEl = createMarkerElement('bg-red-500', 'flood');
                new mapboxgl.Marker(incidentEl)
                    .setLngLat(INCIDENT_COORDS)
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25, closeButton: false })
                        .setHTML(`
                            <div class="font-display">
                                <h3 class="text-white font-bold text-sm">Flash Flood Warning</h3>
                                <p class="text-gray-300 text-xs mt-0.5">Lekki Phase 1</p>
                                <span class="inline-block mt-2 text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded">CRITICAL</span>
                            </div>
                        `)
                    )
                    .addTo(mapInstance);

                const safeEl = createMarkerElement('bg-green-500', 'health_and_safety');
                new mapboxgl.Marker(safeEl)
                    .setLngLat(SAFE_ZONE_COORDS)
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25, closeButton: false })
                        .setHTML(`
                            <div class="font-display">
                                <h3 class="text-white font-bold text-sm">Safe Zone</h3>
                                <p class="text-gray-300 text-xs mt-0.5">National Stadium</p>
                                <p class="text-green-400 text-xs mt-1 font-bold">Open • Capacity 80%</p>
                            </div>
                        `)
                    )
                    .addTo(mapInstance);

                const userEl = createMarkerElement('bg-primary-blue', 'my_location');
                new mapboxgl.Marker(userEl)
                    .setLngLat(USER_COORDS)
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25, closeButton: false })
                        .setHTML('<div class="font-bold text-sm">You are here</div>')
                    )
                    .addTo(mapInstance);
            });

            mapInstance.on('error', (e) => {
                console.error('Mapbox error:', e);
                setMapError("Map failed to load. Check your internet connection.");
            });

        } catch (error) {
            console.error('Map initialization error:', error);
            setMapError("Failed to initialize map");
            setMapReady(true);
        }

        return () => {
            map.current?.remove();
        };
    }, []);

    const zoomIn = () => map.current?.zoomIn();
    const zoomOut = () => map.current?.zoomOut();
    const flyToUser = () => {
        map.current?.flyTo({
            center: USER_COORDS,
            zoom: 15,
            pitch: 60,
            bearing: 0,
            essential: true
        });
    };

    return (
        <div className="h-screen bg-brand-dark flex flex-col relative overflow-hidden font-display">
            <div ref={mapContainer} className="absolute inset-0 z-0 bg-slate-900" />
                
            {!mapReady && !mapError && (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-dark z-50">
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-8 border-2 border-primary-blue border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-xs text-primary-blue font-bold uppercase tracking-widest">Initializing Satellites...</p>
                    </div>
                </div>
            )}

            {mapError && (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-dark z-50 p-6">
                    <div className="bg-surface-dark p-6 rounded-2xl border border-red-500/20 max-w-sm">
                        <div className="text-red-500 text-4xl mb-4 text-center">⚠️</div>
                        <h2 className="text-white font-bold text-lg mb-2 text-center">Map Unavailable</h2>
                        <p className="text-gray-400 text-sm text-center mb-4">{mapError}</p>
                        <button 
                            onClick={() => navigate(RoutePath.HOME)}
                            className="w-full bg-primary-blue text-white py-3 rounded-xl font-bold"
                        >
                            Return Home
                        </button>
                    </div>
                </div>
            )}

            {/* Header and other UI elements remain the same */}
            <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 pt-safe pb-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <button onClick={() => navigate(RoutePath.HOME)} className="size-11 flex items-center justify-center rounded-full glass hover:bg-white/10 text-white pointer-events-auto backdrop-blur-md transition-all active:scale-95">
                    <span className="material-symbols-outlined">grid_view</span>
                </button>
                <div className="flex flex-col items-center pointer-events-auto">
                    <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                        <span className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
                        <span className="text-xs text-white font-bold tracking-wide">LIVE SATELLITE</span>
                    </div>
                </div>
                <button className="size-11 flex items-center justify-center rounded-full glass hover:bg-white/10 text-white pointer-events-auto backdrop-blur-md relative transition-all active:scale-95">
                    <span className="material-symbols-outlined">layers</span>
                </button>
            </header>

            {/* Rest of the UI components */}
            <div className="absolute top-28 left-4 right-4 z-20 pointer-events-none">
                <div className="glass-panel p-4 rounded-2xl border-l-4 border-danger flex items-center justify-between shadow-2xl shadow-black/50 animate-in slide-in-from-top-4 duration-500 pointer-events-auto">
                    <div className="flex items-center gap-3.5">
                        <div className="size-10 rounded-full bg-danger/20 flex items-center justify-center shrink-0 border border-danger/30">
                            <span className="material-symbols-outlined text-danger text-[20px] animate-pulse">warning</span>
                        </div>
                        <div>
                            <p className="text-white text-sm font-bold leading-tight">Flash Flood Warning</p>
                            <p className="text-gray-400 text-xs mt-0.5">Lekki Phase 1 • Rising Rapidly</p>
                        </div>
                    </div>
                    <button className="size-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10">
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                </div>
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20 pointer-events-none">
                <button onClick={zoomIn} className="size-11 rounded-full glass-panel text-white flex items-center justify-center active:scale-95 transition-all shadow-lg pointer-events-auto">
                    <span className="material-symbols-outlined">add</span>
                </button>
                <button onClick={zoomOut} className="size-11 rounded-full glass-panel text-white flex items-center justify-center active:scale-95 transition-all shadow-lg pointer-events-auto">
                    <span className="material-symbols-outlined">remove</span>
                </button>
                <button onClick={flyToUser} className="size-11 rounded-full glass-panel text-white flex items-center justify-center active:scale-95 transition-all shadow-lg mt-4 pointer-events-auto">
                    <span className="material-symbols-outlined text-primary-blue">my_location</span>
                </button>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full z-20 pb-safe pointer-events-none">
                <div className="glass-dark rounded-t-3xl p-5 border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto">
                    <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-5"></div>
                    
                    <div className="flex items-center gap-3 mb-6">
                        <button 
                            onClick={() => navigate(RoutePath.REPORT)}
                            className="flex-1 h-14 bg-gradient-to-r from-danger to-red-600 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 active:scale-[0.98] transition-all">
                            <span className="material-symbols-outlined text-white text-[24px]">campaign</span>
                            <span className="text-white font-bold tracking-wide uppercase text-sm">Report Emergency</span>
                        </button>
                        <button onClick={flyToUser} className="size-14 glass-panel rounded-xl flex items-center justify-center text-white active:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-[24px]">near_me</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="glass-panel p-3 rounded-xl flex flex-col items-center gap-1 active:bg-white/5 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-blue-400">water_drop</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Flood</span>
                            <span className="text-xs font-bold text-white">Moderate</span>
                        </div>
                        <div className="glass-panel p-3 rounded-xl flex flex-col items-center gap-1 active:bg-white/5 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-yellow-500">warning</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Alerts</span>
                            <span className="text-xs font-bold text-white">3 Active</span>
                        </div>
                        <div onClick={() => navigate(RoutePath.CHAT)} className="glass-panel p-3 rounded-xl flex flex-col items-center gap-1 active:bg-white/5 transition-colors cursor-pointer border border-primary-blue/30 bg-primary-blue/10">
                            <span className="material-symbols-outlined text-primary-blue">smart_toy</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Guardian</span>
                            <span className="text-xs font-bold text-white">Ask AI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};