import React from 'react';

/**
 * SafetyNet icon set — original SVG icons drawn for this product.
 * Stroke-based, 24x24 viewBox, inherit currentColor, share the
 * corner-tick / signal-ring language of the ops console.
 */

type IconProps = { className?: string; strokeWidth?: number };

const base = (className = '') => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'square' as const,
  strokeLinejoin: 'miter' as const,
  className,
  'aria-hidden': true,
});

/** Distress beacon: pin with radiating signal arcs */
export const IconBeacon: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M12 21c-3.2-3.4-5-6-5-8.6A5 5 0 0 1 12 7a5 5 0 0 1 5 5.4c0 2.6-1.8 5.2-5 8.6Z" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    <path d="M6.5 4.5A8.5 8.5 0 0 0 4 8" opacity=".55" />
    <path d="M17.5 4.5A8.5 8.5 0 0 1 20 8" opacity=".55" />
    <path d="M9 2.8A10 10 0 0 1 15 2.8" opacity=".3" />
  </svg>
);

/** Verification shield: shield outline with pulse line running through */
export const IconShieldPulse: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M12 3 4.5 5.6v5.2c0 4.6 3 8 7.5 10.2 4.5-2.2 7.5-5.6 7.5-10.2V5.6L12 3Z" />
    <path d="M6.5 12h3l1.2-2.6 2 5 1.3-2.4h3.5" />
  </svg>
);

/** Safe route: map fold with plotted route and waypoint */
export const IconRoute: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20V6.5Z" />
    <path d="M6.5 14.5c2.5 0 2.5-4 5-4s2.5 3 5 3" strokeDasharray="2.2 1.8" />
    <circle cx="6.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    <path d="M16.5 10.5 18 9l1.5 1.5L18 12l-1.5-1.5Z" fill="currentColor" stroke="none" />
  </svg>
);

/** Radio tower: mast with broadcast arcs */
export const IconTower: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M12 8v13M8.5 21 12 13.5 15.5 21" />
    <circle cx="12" cy="6.5" r="1.5" />
    <path d="M8 3.5a6 6 0 0 0-2 3 6 6 0 0 0 .6 3" opacity=".55" />
    <path d="M16 3.5a6 6 0 0 1 2 3 6 6 0 0 1-.6 3" opacity=".55" />
  </svg>
);

/** AI eye: scanning eye with reticle ticks */
export const IconScan: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M3 12c2.4-3.8 5.4-5.7 9-5.7S18.6 8.2 21 12c-2.4 3.8-5.4 5.7-9 5.7S5.4 15.8 3 12Z" />
    <circle cx="12" cy="12" r="2.4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h1M20.5 12h1" opacity=".55" />
  </svg>
);

/** Relief drop: parachute crate */
export const IconAirdrop: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M4 9a8 8 0 0 1 16 0H4Z" />
    <path d="M4 9l5 5M20 9l-5 5M12 9v5" opacity=".7" />
    <path d="M9 14h6v6H9v-6Z" />
    <path d="M12 14v6" opacity=".55" />
  </svg>
);

/** Community: three figures in a row, center forward */
export const IconCommunity: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <circle cx="12" cy="7.5" r="2.5" />
    <path d="M7.5 20v-2.5A4.5 4.5 0 0 1 12 13a4.5 4.5 0 0 1 4.5 4.5V20" />
    <circle cx="4.8" cy="9.5" r="1.8" opacity=".55" />
    <path d="M2 19v-1.6A3.4 3.4 0 0 1 5.4 14" opacity=".55" />
    <circle cx="19.2" cy="9.5" r="1.8" opacity=".55" />
    <path d="M22 19v-1.6A3.4 3.4 0 0 0 18.6 14" opacity=".55" />
  </svg>
);

/** Siren: alarm dome with sound ticks */
export const IconSiren: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M7 18v-5a5 5 0 0 1 10 0v5" />
    <path d="M5 18h14v3H5v-3Z" />
    <path d="M12 3.5v1.8M5.2 5.8l1.3 1.3M18.8 5.8l-1.3 1.3" opacity=".7" />
  </svg>
);

/** Offline SMS: message square with signal slash resilience mark */
export const IconSms: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M4 5h16v11H9l-5 4V5Z" />
    <path d="M8 9h8M8 12h5" opacity=".7" />
  </svg>
);

/** Flood wave over road */
export const IconFlood: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M3 15c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />
    <path d="M3 19c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" opacity=".55" />
    <path d="M6 11l6-6 6 6" />
  </svg>
);

/** Fire */
export const IconFire: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M12 21c-3.6 0-6-2.3-6-5.6C6 11.6 9 9.8 9.6 6.8c2 1.2 2.9 2.7 3 4.6 1-.6 1.6-1.6 1.8-3.1 2.4 1.9 3.6 4 3.6 7.1 0 3.3-2.4 5.6-6 5.6Z" />
    <path d="M12 21c-1.6 0-2.7-1.1-2.7-2.7 0-1.5 1.1-2.4 2.7-4 1.6 1.6 2.7 2.5 2.7 4 0 1.6-1.1 2.7-2.7 2.7Z" opacity=".55" />
  </svg>
);

/** Building collapse */
export const IconCollapse: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M4 21V8l6-3v16" />
    <path d="M10 21l7-2 3 2" />
    <path d="M13 12l4-1.2M13 16l5-1.4" opacity=".7" />
    <path d="M6.5 9.5v2M6.5 14v2" opacity=".55" />
  </svg>
);

/** Roadblock / accident barrier */
export const IconBarrier: React.FC<IconProps> = ({ className, strokeWidth = 1.6 }) => (
  <svg {...base(className)} strokeWidth={strokeWidth}>
    <path d="M3 9h18v5H3V9Z" />
    <path d="M6 9l3 5M11 9l3 5M16 9l3 5" opacity=".7" />
    <path d="M5.5 14v6M18.5 14v6" />
  </svg>
);
