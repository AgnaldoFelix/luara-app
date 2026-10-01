type PhotoPlaceholderProps = {
  label: string;
  aspect?: string;
  className?: string;
};

/**
 * Placeholder editorial elegante para fotografias.
 * Quando a foto real da Luara estiver disponível, substitua este
 * componente por uma <img> mantendo o mesmo aspect ratio.
 */
export function PhotoPlaceholder({
  label,
  aspect = "4/5",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden bg-sand ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* Textura orgânica sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, oklch(0.96 0.02 90 / 0.9), transparent), radial-gradient(ellipse 70% 55% at 75% 85%, oklch(0.88 0.03 140 / 0.5), transparent)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="h-8 w-8 text-muted-foreground/60"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <p className="max-w-[22ch] text-xs font-medium tracking-wide text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
}
