import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "JourneyJoy is an independent cruise specialist — Royal Caribbean, Celebrity, Princess, and boutique river and ocean sailings, with personal guidance and no checkout on this site.",
};

const principles = [
  {
    title: "The lines people ask for",
    body: "Royal Caribbean, Celebrity, Princess and their peers sit in the catalogue because that is how most travellers start. We do not hide the big ships behind boutique language.",
  },
  {
    title: "Boutique when it fits",
    body: "Adult-focused river and small-ship weeks are here too. If you want a quieter guest mix, we will say so — and we will also say when a megaship is the better week.",
  },
  {
    title: "Guidance, not a cart",
    body: "This site is a portfolio. When you are ready, you enquire. We help you choose; we do not process payments or issue tickets from these pages.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate min-h-[48vh] overflow-hidden bg-navy text-primary-foreground">
        <Image
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=2000&q=80"
          alt="Ocean cruise ships alongside a tropical harbour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-6xl flex-col justify-end px-4 pb-12 sm:px-6 sm:pb-16">
          <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
            The studio
          </p>
          <h1 className="mt-3 font-heading text-4xl sm:text-6xl">
            A specialist desk for every kind of cruise.
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl">
              Independent — and not only adults-only.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              JourneyJoy started as a way to talk about ships without a
              checkout. The brief was never “hide the big lines.” Families ask
              for Royal Caribbean. Couples ask for Celebrity. Alaska groups ask
              for Princess. We put those sailings next to quieter river and
              boutique ocean weeks so the comparison is honest.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The brand is independent. We will tell you when an Oasis-class
              week is the right circus, and when you would be happier on a
              river boat. The advice you get here is ours.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
              alt="A restaurant terrace overlooking the water"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="mt-20 grid gap-10 md:grid-cols-3">
          {principles.map((item, index) => (
            <li key={item.title} className="border-t border-gold/50 pt-6">
              <span className="text-[0.68rem] tracking-[0.2em] text-gold uppercase">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-20 flex flex-col items-start gap-4 border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-heading text-3xl">Shall we look at a sailing?</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Browse Royal Caribbean, Celebrity, Princess, and the boutique
              collection — or send a note describing how you like to travel.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
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
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-sm px-6 text-[0.72rem] tracking-[0.18em] uppercase",
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
