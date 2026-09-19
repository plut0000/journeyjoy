import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CruiseImage } from "@/components/cruise-image";
import { formatDuration, type Cruise } from "@/data/cruises";
import { cn } from "@/lib/utils";

export function CruiseCard({
  cruise,
  className,
}: {
  cruise: Cruise;
  className?: string;
}) {
  return (
    <Link
      href={`/cruises/${cruise.slug}`}
      className={cn(
        "group block rounded-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:outline-none",
        className,
      )}
    >
      <article className="flex h-full flex-col overflow-hidden bg-card ring-1 ring-foreground/8 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_50px_-24px_rgba(16,32,51,0.45)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <CruiseImage
            slug={cruise.slug}
            src={cruise.image}
            alt={cruise.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
          <Badge className="absolute top-3 left-3 rounded-sm bg-cream/95 text-[0.65rem] tracking-[0.16em] text-navy uppercase">
            {cruise.line}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <p className="text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
            {cruise.region} · {formatDuration(cruise.durationNights)}
          </p>
          <h3 className="font-heading text-2xl leading-tight text-foreground">
            {cruise.name}
          </h3>
          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {cruise.shortDescription}
          </p>
          <p className="text-sm text-foreground/80 italic">{cruise.vibe}</p>
          <span className="mt-1 inline-flex items-center gap-1 text-[0.7rem] tracking-[0.18em] text-navy uppercase">
            View sailing
            <ArrowUpRight className="size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
