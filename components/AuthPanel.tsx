import React from 'react';

/**
 * AuthPanel — photographic side panel for auth and landing pages.
 * Real disaster-response imagery (flooded house, Lagos Island — Wikimedia
 * Commons, CC BY-SA) under a heavy ink gradient so text is always readable,
 * even if the image fails to load (the base layer is solid ink).
 */

export const DISASTER_IMG =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Water%20house%20Lagos%20Island.jpg?width=1600';

export const AuthPanel: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden bg-ink ${className}`}>
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${DISASTER_IMG})` }}
      aria-hidden="true"
    />
    {/* Readability overlays: never below 70% ink where text sits */}
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" aria-hidden="true" />
    <div className="absolute inset-0 scanline" aria-hidden="true" />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);
