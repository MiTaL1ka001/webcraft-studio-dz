import React from 'react';
import {
  Monitor,
  ShoppingBag,
  PenTool,
  Settings,
  Bell,
  Award,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Zap,
  Headphones,
  MessageSquare,
  Palette,
  Code2,
  Rocket,
} from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const WebCraftLogo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const isLight = variant === 'light';
  const primaryText = isLight ? '#FFFFFF' : '#0B1320';
  const secondaryText = isLight ? '#94A3B8' : '#4B5563';
  const lineColor = isLight ? '#334155' : '#CBD5E1';

  const dimensions = {
    sm: { svgWidth: 112, svgHeight: 42 },
    md: { svgWidth: 132, svgHeight: 48 },
    lg: { svgWidth: 168, svgHeight: 62 },
    xl: { svgWidth: 210, svgHeight: 78 },
  }[size];

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <svg
        width={dimensions.svgWidth}
        height={dimensions.svgHeight}
        viewBox="0 0 180 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="WebCraft Design Studio"
      >
        {/* W in Deep Navy (or White on dark surfaces) */}
        <path
          d="M46 6H55.2L60.6 29.4L66.5 6H74.1L80 29.4L85.4 6H94.5L85.1 41H76.4L70.3 18.8L64.2 41H55.5L46 6Z"
          fill={primaryText}
        />
        {/* C in Primary Electric Blue (#007BFF) */}
        <path
          d="M119.5 17.8C117.9 14.8 114.9 13.1 111.1 13.1C105.2 13.1 101.4 17.4 101.4 23.5C101.4 29.6 105.2 33.9 111.1 33.9C114.9 33.9 117.9 32.3 119.5 29.3L126.9 33C123.9 38.4 118.4 41.6 110.9 41.6C100.1 41.6 92.4 34.2 92.4 23.5C92.4 12.8 100.1 5.4 110.9 5.4C117.4 5.4 122.7 8 125.9 12.8L119.5 17.8Z"
          fill="#007BFF"
        />
        {/* Signature digital pixel squares on upper-right of C */}
        <rect x="122" y="3.5" width="5.5" height="5.5" rx="1" fill="#007BFF" />
        <rect x="129.5" y="1" width="4" height="4" rx="0.8" fill="#007BFF" />
        <rect x="129" y="8" width="3.2" height="3.2" rx="0.6" fill="#007BFF" opacity="0.8" />

        {/* WEBCRAFT Wordmark */}
        <text
          x="90"
          y="55"
          textAnchor="middle"
          fill={primaryText}
          fontFamily="Inter, sans-serif"
          fontWeight="800"
          fontSize="14.5"
          letterSpacing="3.2"
        >
          WEBCRAFT
        </text>

        {/* Subtle decorative rules + DESIGN STUDIO */}
        <line x1="22" y1="63.5" x2="46" y2="63.5" stroke={lineColor} strokeWidth="1" />
        <text
          x="90"
          y="66"
          textAnchor="middle"
          fill={secondaryText}
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fontSize="6.2"
          letterSpacing="2.4"
        >
          DESIGN STUDIO
        </text>
        <line x1="134" y1="63.5" x2="158" y2="63.5" stroke={lineColor} strokeWidth="1" />
      </svg>
      {showTagline && (
        <span
          className={`mt-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase ${
            isLight ? 'text-slate-300' : 'text-[#1F2937]'
          }`}
        >
          YOUR VISION. CRAFTED FOR THE WEB.
        </span>
      )}
    </div>
  );
};

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const InstagramColorBadgeIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8',
}) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="igGrad" x1="6" y1="42" x2="42" y2="6" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FD5949" />
        <stop offset="45%" stopColor="#D6249F" />
        <stop offset="100%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="11" fill="url(#igGrad)" />
    <rect
      x="12"
      y="12"
      width="24"
      height="24"
      rx="6.5"
      stroke="#FFFFFF"
      strokeWidth="2.6"
    />
    <circle cx="24" cy="24" r="5.5" stroke="#FFFFFF" strokeWidth="2.6" />
    <circle cx="31.2" cy="16.8" r="1.6" fill="#FFFFFF" />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export const WhatsAppColorBadgeIcon: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8',
}) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <rect x="4" y="4" width="40" height="40" rx="11" fill="#25D366" />
    <path
      d="M14 34L16.2 27.9C14.9 25.7 14.6 23.1 15.3 20.6C16.6 15.8 21.6 13 26.4 14.3C31.2 15.6 34 20.6 32.7 25.4C31.4 30.2 26.4 33 21.6 31.7C20.4 31.4 19.3 30.8 18.3 30.1L14 34Z"
      stroke="#FFFFFF"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 20.5C21 20.5 21.8 19.5 22.5 20.8C23.1 22 22.3 22.6 22.3 22.6C22.8 23.7 23.8 24.7 24.9 25.2C24.9 25.2 25.5 24.4 26.7 25C28 25.7 27 26.5 27 26.5C25.8 27.4 23.5 26.8 21.8 25.1C20.1 23.4 19.5 21.1 21 20.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const ServiceIcon: React.FC<{
  name: 'monitor' | 'shopping-bag' | 'layout' | 'settings';
  className?: string;
}> = ({ name, className = 'w-6 h-6 text-[#007BFF]' }) => {
  switch (name) {
    case 'monitor':
      return <Monitor className={className} strokeWidth={1.8} />;
    case 'shopping-bag':
      return <ShoppingBag className={className} strokeWidth={1.8} />;
    case 'layout':
      return <PenTool className={className} strokeWidth={1.8} />;
    case 'settings':
      return <Settings className={className} strokeWidth={1.8} />;
  }
};

export const ValueIndicatorIcon: React.FC<{
  name: 'sparkles' | 'smartphone' | 'zap' | 'headset';
  className?: string;
}> = ({ name, className = 'w-5 h-5 text-[#007BFF]' }) => {
  switch (name) {
    case 'sparkles':
      return <Sparkles className={className} strokeWidth={1.9} />;
    case 'smartphone':
      return <Smartphone className={className} strokeWidth={1.9} />;
    case 'zap':
      return <Zap className={className} strokeWidth={1.9} />;
    case 'headset':
      return <Headphones className={className} strokeWidth={1.9} />;
  }
};

export const AboutValueIcon: React.FC<{
  name: 'bell' | 'award' | 'check-circle';
  className?: string;
}> = ({ name, className = 'w-6 h-6 text-[#007BFF]' }) => {
  switch (name) {
    case 'bell':
      return <Bell className={className} strokeWidth={1.8} />;
    case 'award':
      return <Award className={className} strokeWidth={1.8} />;
    case 'check-circle':
      return <CheckCircle2 className={className} strokeWidth={1.8} />;
  }
};

export const ProcessStepIcon: React.FC<{
  name: 'message' | 'palette' | 'code' | 'rocket';
  className?: string;
}> = ({ name, className = 'w-5 h-5 text-[#007BFF]' }) => {
  switch (name) {
    case 'message':
      return <MessageSquare className={className} strokeWidth={1.8} />;
    case 'palette':
      return <Palette className={className} strokeWidth={1.8} />;
    case 'code':
      return <Code2 className={className} strokeWidth={1.8} />;
    case 'rocket':
      return <Rocket className={className} strokeWidth={1.8} />;
  }
};
