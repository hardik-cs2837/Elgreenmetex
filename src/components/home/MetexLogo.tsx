"use client";

export function MetexLogo({
  size = 40,
  showText = true,
  className = "",
}: {
  size?: number;
  showText?: boolean;
  className?: string;
}) {
  const h = showText ? Math.round(size * 1.55) : size;
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 60 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="METEX Logo"
    >
      {/* Outer subtle ring */}
      <circle cx="30" cy="30" r="26" stroke="rgba(0,255,178,0.12)" strokeWidth="1" />

      {/* Main recycling loop — clockwise arc */}
      <path
        d="M30 6 A24 24 0 1 1 6.5 37"
        stroke="#00FFB2"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Dashed counter-arc for depth */}
      <path
        d="M30 6 A24 24 0 0 0 6.5 37"
        stroke="rgba(0,255,178,0.35)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 3"
        fill="none"
      />

      {/* Arrow head at top of loop */}
      <polygon points="30,3 24,13 36,13" fill="#00FFB2" opacity="0.9" />

      {/* Element node — Ni (top) */}
      <circle cx="30" cy="6" r="3.5" fill="#020d0a" stroke="#00FFB2" strokeWidth="1.5" />
      <text x="30" y="9.5" textAnchor="middle" fill="#00FFB2" fontSize="4" fontFamily="monospace" fontWeight="700">Ni</text>

      {/* Element node — Mn (right) */}
      <circle cx="54" cy="30" r="3.5" fill="#020d0a" stroke="rgba(0,255,178,0.6)" strokeWidth="1.5" />
      <text x="54" y="33.5" textAnchor="middle" fill="rgba(0,255,178,0.8)" fontSize="4" fontFamily="monospace" fontWeight="700">Mn</text>

      {/* Element node — Co (bottom) */}
      <circle cx="30" cy="54" r="3.5" fill="#020d0a" stroke="rgba(0,255,178,0.6)" strokeWidth="1.5" />
      <text x="30" y="57.5" textAnchor="middle" fill="rgba(0,255,178,0.8)" fontSize="4" fontFamily="monospace" fontWeight="700">Co</text>

      {/* Element node — Li (left) */}
      <circle cx="6" cy="30" r="3.5" fill="#020d0a" stroke="rgba(0,255,178,0.6)" strokeWidth="1.5" />
      <text x="6" y="33.5" textAnchor="middle" fill="rgba(0,255,178,0.8)" fontSize="4" fontFamily="monospace" fontWeight="700">Li</text>

      {/* Center emblem */}
      <circle cx="30" cy="30" r="8" fill="rgba(0,255,178,0.06)" stroke="rgba(0,255,178,0.3)" strokeWidth="1" />
      <circle cx="30" cy="30" r="3.5" fill="#00FFB2" opacity="0.9" />

      {/* METEX wordmark */}
      {showText && (
        <>
          <line x1="8" y1="70" x2="52" y2="70" stroke="rgba(0,255,178,0.2)" strokeWidth="0.5" />
          <text
            x="30"
            y="82"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="3"
          >
            METEX
          </text>
          <text
            x="30"
            y="91"
            textAnchor="middle"
            fill="rgba(0,255,178,0.55)"
            fontSize="4.5"
            fontFamily="system-ui, sans-serif"
            letterSpacing="1.5"
          >
            CIRCULAR INTELLIGENCE
          </text>
        </>
      )}
    </svg>
  );
}
