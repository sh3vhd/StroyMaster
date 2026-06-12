import React from 'react';

type IconProps = {
  className?: string;
  size?: number;
};

const base = (size?: number) => ({
  width: size ?? 24,
  height: size ?? 24,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
});

export const HouseIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-6h4v6" />
  </svg>
);

export const BuildingIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    <path d="M10 21v-3h4v3" />
  </svg>
);

export const HardHatIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17h18v2H3z" />
    <path d="M5 17v-2a7 7 0 0 1 14 0v2" />
    <path d="M10 8V5h4v3" />
  </svg>
);

export const HammerIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9" />
    <path d="M17.64 15 22 10.64" />
    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
  </svg>
);

export const TrowelIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4 4 11l5 5 7-7-5-5z" />
    <path d="m14 14 6 6" />
    <path d="m17 17 3-3" />
  </svg>
);

export const RulerIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0L2.7 16.7a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z" />
    <path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2" />
  </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="15.5" r="4.5" />
    <path d="m10.7 12.3 10-10" />
    <path d="m17 6 3 3" />
    <path d="m14 9 3 3" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2 4 5v7c0 4.5 3.4 8.7 8 10 4.6-1.3 8-5.5 8-10V5l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const AwardIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9.5" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const LogoIcon: React.FC<IconProps> = ({ className, size }) => (
  <svg
    width={size ?? 36}
    height={size ?? 36}
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="36" height="36" rx="8" fill="#ea580c" />
    <path
      d="M8 26 20 14l12 12"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11 26v6h18v-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 32v-4h4v4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
