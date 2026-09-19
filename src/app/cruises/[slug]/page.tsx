import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CruiseImage } from "@/components/cruise-image";
import { EnquireCta } from "@/components/enquire-cta";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cruises, formatDuration, getCruise } from "@/data/cruises";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cruises.map((cruise) => ({ slug: cruise.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cruise = getCruise(slug);
  if (!cruise) {
    return { title: "Sailing not found" };
  }
  return {
    title: cruise.name,
    description: cruise.shortDescription,
    openGraph: {
      title: `${cruise.name} · JourneyJoy`,
      description: cruise.shortDescription,
      images: [{ url: cruise.image, alt: cruise.imageAlt }],
    },
  };
}

export default async function CruiseDetailPage({ params }: Props) {
  const { slug } = await params;
  const cruise = getCruise(slug);
  if (!cruise) notFound();

  return (
    <article>
      <header className="relative isolate min-h-[58vh] overflow-hidden bg-navy text-primary-foreground">
        <CruiseImage
          slug={cruise.slug}
          src={cruise.image}
          alt={cruise.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/20" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-end px-4 pb-12 sm:px-6 sm:pb-16">
          <p className="text-[0.68rem] tracking-[0.24em] text-gold uppercase">
            {cruise.line} · {cruise.region} · {cruise.shipStyle}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl sm:text-6xl">
            {cruise.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            {cruise.shortDescription}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_18rem]">
        <div>
          <dl className="grid gap-6 sm:grid-cols-3">
            <Meta label="Duration" value={formatDuration(cruise.durationNights)} />
            <Meta label="Ship" value={`${cruise.shipName} · ${cruise.line}`} />
            <Meta label="Vibe" value={cruise.vibe} />
          </dl>

          <Separator className="my-10" />

          {cruise.description.split("\n\n").map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-5 text-base leading-relaxed text-foreground/85 first:mt-0"
            >
              {paragraph}
            </p>
          ))}

          <h2 className="mt-12 font-heading text-3xl">Highlights</h2>
          <ul className="mt-5 space-y-3">
            {cruise.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-heading text-3xl">Who it is for</h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            {cruise.whoItsFor}
          </p>

          <h2 className="mt-12 font-heading text-3xl">Itinerary snapshot</h2>
          <ol className="mt-6 divide-y divide-border border-y border-border">
            {cruise.itinerary.map((stop) => (
              <li
                key={`${stop.day}-${stop.port}`}
                className="grid gap-1 py-4 sm:grid-cols-[5.5rem_1fr]"
              >
                <span className="text-[0.68rem] tracking-[0.16em] text-gold uppercase">
                  Day {stop.day}
                </span>
                <div>
                  <p className="font-medium">{stop.port}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stop.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="border border-border bg-card p-6">
            <Badge className="rounded-sm bg-secondary text-[0.65rem] tracking-[0.16em] text-navy uppercase">
              {cruise.collection === "Mainstream"
                ? cruise.line
                : "Boutique & river"}
            </Badge>
            <p className="mt-4 font-heading text-2xl">{cruise.shipName}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {cruise.durationNights} nights on a {cruise.shipStyle.toLowerCase()}{" "}
              ship. Enquire for current availability — we do not sell cabins
              from this page.
            </p>
            <Link
              href={`/contact?sailing=${cruise.slug}`}
              className="mt-5 inline-flex text-[0.72rem] tracking-[0.16em] text-navy uppercase underline-offset-4 hover:underline"
            >
              Enquire about this sailing
            </Link>
          </div>
          <EnquireCta sailing={cruise.slug} compact />
        </aside>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-20 sm:grid-cols-2 sm:px-6">
        {cruise.gallery.map((shot) => (
          <div key={shot.src} className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="mt-2 font-heading text-xl leading-snug">{value}</dd>
    </div>
  );
}
