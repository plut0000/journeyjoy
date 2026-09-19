import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
import { cruises } from "@/data/cruises";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about a JourneyJoy sailing. The form is a preview — live email and phone will be added when contact details are confirmed.",
};

type Props = {
  searchParams: Promise<{ sailing?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { sailing } = await searchParams;
  const known =
    sailing && cruises.some((cruise) => cruise.slug === sailing)
      ? sailing
      : "";

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
          Enquire
        </p>
        <h1 className="mt-3 font-heading text-4xl sm:text-6xl">
          Tell us how you like to travel.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          This is not a booking form. There is no payment step. Share a sailing
          you have been looking at — or simply the season and the feeling you
          want — and we will take it from there when live email is connected.
        </p>
        <div className="mt-10">
          <ContactForm defaultSailing={known} />
        </div>
      </div>

      <aside className="h-fit border border-border bg-card p-8 lg:sticky lg:top-24">
        <p className="text-[0.68rem] tracking-[0.2em] text-gold uppercase">
          Studio
        </p>
        <h2 className="mt-3 font-heading text-3xl">Contact details TBD</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {site.contact.note}
        </p>
        <dl className="mt-8 space-y-6 text-sm">
          <div>
            <dt className="text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
              Email
            </dt>
            {/* TODO: Replace with live JourneyJoy inbox */}
            <dd className="mt-1 text-foreground">{site.contact.emailLabel}</dd>
          </div>
          <div>
            <dt className="text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
              Telephone
            </dt>
            {/* TODO: Replace with live phone number */}
            <dd className="mt-1 text-foreground">
              {site.contact.phone || site.contact.phoneLabel}
            </dd>
          </div>
          <div>
            <dt className="text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
              Address
            </dt>
            {/* TODO: Replace with studio / postal address */}
            <dd className="mt-1 text-foreground">
              {site.contact.address || site.contact.addressLabel}
            </dd>
          </div>
          <div>
            <dt className="text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
              Hours
            </dt>
            <dd className="mt-1 text-foreground">{site.contact.hours}</dd>
          </div>
        </dl>
      </aside>
    </div>
  );
}
