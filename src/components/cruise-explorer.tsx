"use client";

import { useMemo, useState } from "react";

import { CruiseCard } from "@/components/cruise-card";
import {
  collections,
  cruises,
  regions,
  type Collection,
  type Region,
} from "@/data/cruises";
import { cn } from "@/lib/utils";

export function CruiseExplorer() {
  const [region, setRegion] = useState<Region | "All">("All");
  const [collection, setCollection] = useState<Collection | "All">("All");

  const filtered = useMemo(() => {
    return cruises.filter((cruise) => {
      const regionOk = region === "All" || cruise.region === region;
      const collectionOk =
        collection === "All" || cruise.collection === collection;
      return regionOk && collectionOk;
    });
  }, [region, collection]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
        <fieldset className="min-w-0">
          <legend className="text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
            Region
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterChip
              active={region === "All"}
              onClick={() => setRegion("All")}
            >
              All
            </FilterChip>
            {regions.map((item) => (
              <FilterChip
                key={item}
                active={region === item}
                onClick={() => setRegion(item)}
              >
                {item}
              </FilterChip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
            Style
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterChip
              active={collection === "All"}
              onClick={() => setCollection("All")}
            >
              All
            </FilterChip>
            {collections.map((item) => (
              <FilterChip
                key={item}
                active={collection === item}
                onClick={() => setCollection(item)}
              >
                {item === "Mainstream" ? "Royal, Celebrity & more" : "Boutique & river"}
              </FilterChip>
            ))}
          </div>
        </fieldset>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-muted-foreground">
          No sailings match these filters. Try another region or style.
        </p>
      ) : (
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cruise) => (
            <li key={cruise.slug}>
              <CruiseCard cruise={cruise} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-8 items-center rounded-sm px-3 text-[0.7rem] tracking-[0.12em] uppercase transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none",
        active
          ? "bg-navy text-cream"
          : "border border-foreground/15 bg-transparent hover:bg-secondary",
      )}
    >
      {children}
    </button>
  );
}
