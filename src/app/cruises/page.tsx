import type { Metadata } from "next";

import { CruiseExplorer } from "@/components/cruise-explorer";

export const metadata: Metadata = {
  title: "Cruises & destinations",
  description:
    "Browse JourneyJoy’s catalogue — Royal Caribbean, Celebrity, Princess, and boutique river and ocean sailings across the Mediterranean, Alaska, the Caribbean, and more.",
};

export default function CruisesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
          Catalogue
        </p>
        <h1 className="mt-3 font-heading text-4xl sm:text-6xl">
          Cruises & destinations
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mainstream ocean lines and boutique river and ocean weeks, written as
          we would brief a client: line, region, ship, and the feeling of the
          days. Open any card for the itinerary snapshot — then enquire.
          Nothing here is a checkout.
        </p>
      </header>
      <div className="mt-12">
        <CruiseExplorer />
      </div>
    </div>
  );
}
