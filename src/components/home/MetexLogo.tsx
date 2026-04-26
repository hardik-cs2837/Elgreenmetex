"use client";

export function MetexLogo({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src="/assets/images/metex-logo.png"
      alt="Metex Logo"
      style={{ height: size }}
      className={`object-contain ${className}`}
    />
  );
}
