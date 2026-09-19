import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="relative flex size-8 items-center justify-center"
      >
        <svg
          viewBox="0 0 32 32"
          className="size-8 text-gold"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M6 16h20M16 6v20"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.55"
          />
          <path
            d="M16 7.5c2.4 3.6 5.2 6.4 8.5 8.5-3.3 2.1-6.1 4.9-8.5 8.5-2.4-3.6-5.2-6.4-8.5-8.5 3.3-2.1 6.1-4.9 8.5-8.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="font-heading text-[1.55rem] leading-none tracking-[0.02em] text-primary-foreground">
        Journey
        <span className="text-gold">Joy</span>
      </span>
      {!compact ? (
        <span className="sr-only">{site.name} — independent cruise specialist</span>
      ) : null}
    </span>
  );
}
