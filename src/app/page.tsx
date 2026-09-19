import Image from "next/image";
import Link from "next/link";
import { Compass, Ship, Sparkles } from "lucide-react";

import { CruiseCard } from "@/components/cruise-card";
import { buttonVariants } from "@/components/ui/button";
import { getFeaturedCruises } from "@/data/cruises";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=2200&q=80";

const pillars = [
  {
    icon: Ship,
    title: "The big lines, too",
    body: "Royal Caribbean, Celebrity, Princess — the ocean ships most people mean when they say they want a cruise. We place them in the catalogue on purpose.",
  },
  {
    icon: Sparkles,
    title: "Boutique and river as well",
    body: "If you want a quieter guest mix or a European river week, that sits here too. Same desk. An honest comparison, not a hard sell either way.",
  },
  {
    icon: Compass,
    title: "Personal guidance",
    body: "JourneyJoy is a specialist, not a search engine. We help you choose the line and the sailing that match how you actually travel.",
  },
];

export default function Home() {
  const featured = getFeaturedCruises();

  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-navy text-primary-foreground">
        <Image
          src={heroImage}
          alt="Ocean cruise ships in a tropical harbour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/88 via-navy/70 to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24">
          <p className="animate-fade-up text-[0.72rem] tracking-[0.32em] text-gold uppercase">
            Independent cruise specialist
          </p>
          <h1 className="animate-fade-up mt-5 max-w-3xl font-heading text-5xl leading-[0.95] sm:text-7xl lg:text-[5.4rem]">
            {site.name}
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
            Royal Caribbean, Celebrity, Princess, and quieter boutique
            ships — one desk to help you pick the sailing that actually fits.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/cruises"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-sm bg-gold px-7 text-[0.72rem] tracking-[0.2em] text-navy uppercase hover:bg-gold/90",
              )}
            >
              Browse cruises
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-sm border-primary-foreground/35 bg-transparent px-7 text-[0.72rem] tracking-[0.2em] text-primary-foreground uppercase hover:bg-white/10 hover:text-gold",
              )}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
            Why JourneyJoy
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            Not only the quiet ships.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Some clients want Wonder of the Seas and a private-island day.
            Others want a river boat and no kids’ club. JourneyJoy holds both
            in the same catalogue so you can compare — then enquire. This is a
            specialist desk, not a checkout.
          </p>
        </div>
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="border-t border-gold/50 pt-6"
            >
              <pillar.icon className="size-5 text-gold" aria-hidden />
              <h3 className="mt-4 font-heading text-2xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
                Featured sailings
              </p>
              <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
                A first look at the season.
              </h2>
            </div>
            <Link
              href="/cruises"
              className="text-[0.72rem] tracking-[0.18em] text-navy uppercase underline-offset-4 hover:underline"
            >
              All destinations
            </Link>
          </div>
          <ul className="mt-12 grid gap-8 lg:grid-cols-3">
            {featured.map((cruise) => (
              <li key={cruise.slug}>
                <CruiseCard cruise={cruise} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <blockquote className="relative mx-auto max-w-3xl px-4 py-24 text-center text-primary-foreground sm:px-6 sm:py-32">
          <p className="font-heading text-3xl leading-snug sm:text-4xl">
            “We thought we had to pick a side — megaship or boutique. JourneyJoy
            laid Royal Caribbean next to a river week and let us decide.”
          </p>
          <footer className="mt-8 text-[0.7rem] tracking-[0.2em] text-gold uppercase">
            A guest, Celebrity sailing · 2025
          </footer>
        </blockquote>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80"
            alt="A quiet canal and historic waterfront at golden hour"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
            The specialist desk
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            One catalogue, more than one kind of cruise.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            JourneyJoy is independent. We are not a booking engine and we do
            not take payment here. What we offer is a considered mix of the
            major ocean lines and boutique river and ocean sailings — plus a
            conversation about which one belongs to you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-sm px-6 text-[0.72rem] tracking-[0.18em] uppercase",
              )}
            >
              About the studio
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-sm bg-navy px-6 text-[0.72rem] tracking-[0.18em] text-cream uppercase hover:bg-navy/90",
              )}
            >
              Start an enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
