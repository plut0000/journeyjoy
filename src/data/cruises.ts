/**
 * Sample JourneyJoy sailings. Edit this file to add, remove, or rewrite offerings.
 * This is a marketing catalogue only — no booking, inventory, or payment data.
 */

export type ShipStyle = "Ocean" | "River";

export type Collection = "Mainstream" | "Boutique";

export type CruiseLine =
  | "Royal Caribbean"
  | "Celebrity Cruises"
  | "Princess Cruises"
  | "JourneyJoy Collection";

export type Region =
  | "Mediterranean"
  | "Northern Europe"
  | "Alaska"
  | "Asia"
  | "Caribbean"
  | "Iberia";

export type ItineraryDay = {
  day: number;
  port: string;
  note: string;
};

export type Cruise = {
  slug: string;
  name: string;
  region: Region;
  shipStyle: ShipStyle;
  durationNights: number;
  vibe: string;
  shipName: string;
  line: CruiseLine;
  collection: Collection;
  shortDescription: string;
  description: string;
  whoItsFor: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  featured?: boolean;
};

const img = (id: string, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const cruises: Cruise[] = [
  {
    slug: "amalfi-adriatic-sojourn",
    name: "Amalfi & Adriatic Sojourn",
    region: "Mediterranean",
    shipStyle: "Ocean",
    durationNights: 10,
    vibe: "Coastal elegance, long lunches, unhurried harbours",
    shipName: "MV Solenne",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    featured: true,
    shortDescription:
      "A grown-up circuit of the Italian and Dalmatian coasts — lemon groves, stone harbours, and evenings that linger on deck.",
    description:
      "This sailing is built for travellers who want the Mediterranean at a civilised pace. Days begin with espresso on a quiet promenade deck, not a queue for a water slide. You call at cliff towns and Venetian-era ports where the pleasure is walking, tasting, and sitting still long enough to notice the light change.\n\nJourneyJoy keeps the guest mix adult-only, so public spaces stay conversational. Ashore, we favour small-group walks with local historians over megaphone tours. Evenings are for regional wine, a properly set table, and the option of silence if you want it.",
    whoItsFor:
      "Couples and independent travellers who prefer culture to cabaret — people happy to dress for dinner, skip the kids’ club (there isn’t one), and spend an afternoon in a palazzo courtyard rather than a shopping arcade.",
    highlights: [
      "Adults-only guest list and a quieter onboard rhythm",
      "Small-ship access to harbours the mega-liners cannot enter",
      "Hosted tasting of Campanian wines and Adriatic olive oils",
      "Optional dawn walk above Positano before the day-trippers arrive",
      "Evenings with a pianist, not a production show",
    ],
    itinerary: [
      { day: 1, port: "Civitavecchia (Rome)", note: "Embark in the late afternoon; sail at dusk." },
      { day: 2, port: "Portofino", note: "Anchor off the harbour; tender ashore for a coastal walk." },
      { day: 3, port: "Portofino / at sea", note: "Leisurely sea day along the Ligurian coast." },
      { day: 4, port: "Amalfi", note: "Clifftop paths, paper mills, and a long lunch in town." },
      { day: 5, port: "Taormina (Giardini Naxos)", note: "Greek theatre and Etna on the horizon." },
      { day: 6, port: "At sea", note: "Deck time, a cooking demonstration, open library." },
      { day: 7, port: "Kotor", note: "The bay at first light; fortress walk for those who want it." },
      { day: 8, port: "Hvar", note: "Lavender terraces and a harbour swim from the marina." },
      { day: 9, port: "Split", note: "Diocletian’s palace at a human pace." },
      { day: 10, port: "Venice (Chioggia)", note: "Lagoon approach; overnight on board." },
      { day: 11, port: "Venice", note: "Disembark after breakfast." },
    ],
    image: img("photo-1516483638261-f4dbaf036963"),
    imageAlt: "Colourful cliffside houses along the Italian coast",
    gallery: [
      {
        src: img("photo-1523906834658-6e24ef2386f9"),
        alt: "Historic canal and stone architecture at golden hour",
      },
      {
        src: img("photo-1515542622106-78bda8ba0e5b"),
        alt: "Sunlit classical colonnade in Italy",
      },
    ],
  },
];

export const regions: Region[] = [
  "Mediterranean",
  "Northern Europe",
  "Alaska",
  "Asia",
  "Caribbean",
  "Iberia",
];

export const collections: Collection[] = ["Mainstream", "Boutique"];

export const lines: CruiseLine[] = [
  "Royal Caribbean",
  "Celebrity Cruises",
  "Princess Cruises",
  "JourneyJoy Collection",
];

export function getCruise(slug: string): Cruise | undefined {
  return cruises.find((cruise) => cruise.slug === slug);
}

export function getFeaturedCruises(): Cruise[] {
  return cruises
    .filter((cruise) => cruise.featured)
    .sort((a, b) => {
      if (a.collection === b.collection) return 0;
      return a.collection === "Mainstream" ? -1 : 1;
    });
}

export function formatDuration(nights: number): string {
  const days = nights + 1;
  return `${nights} nights · ${days} days`;
}
