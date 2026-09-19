import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl sm:text-5xl">
        That page has sailed.
      </h1>
      <p className="mt-4 text-muted-foreground">
        The sailing or page you asked for is not in the JourneyJoy catalogue.
        Browse current destinations, or send an enquiry.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/cruises"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 rounded-sm bg-navy px-6 text-[0.72rem] tracking-[0.18em] text-cream uppercase hover:bg-navy/90",
          )}
        >
          Browse cruises
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 rounded-sm px-6 text-[0.72rem] tracking-[0.18em] uppercase",
          )}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
