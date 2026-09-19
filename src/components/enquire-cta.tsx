import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EnquireCta({
  sailing,
  className,
  compact = false,
}: {
  sailing?: string;
  className?: string;
  compact?: boolean;
}) {
  const href = sailing
    ? `/contact?sailing=${encodeURIComponent(sailing)}`
    : "/contact";

  return (
    <div
      className={cn(
        "border border-gold/40 bg-navy px-6 py-10 text-primary-foreground sm:px-10",
        className,
      )}
    >
      <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
        Personal guidance
      </p>
      <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
        Enquire about this journey
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
        JourneyJoy does not take bookings or payments online. Tell us what you
        are considering and we will follow up by email once contact details are
        live.
      </p>
      <Link
        href={href}
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-6 h-11 rounded-sm bg-gold px-6 text-[0.72rem] tracking-[0.18em] text-navy uppercase hover:bg-gold/90",
          compact && "mt-4",
        )}
      >
        Get in touch
      </Link>
    </div>
  );
}
