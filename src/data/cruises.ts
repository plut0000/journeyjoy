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
  {
    slug: "nordic-fjord-light",
    name: "Nordic Fjord Light",
    region: "Northern Europe",
    shipStyle: "Ocean",
    durationNights: 12,
    vibe: "Long summer evenings, glaciers, and hushed decks",
    shipName: "MV Nordlys",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    shortDescription:
      "Norway’s fjords in high summer — waterfalls, wooden villages, and a ship that stays quiet enough to hear the ice.",
    description:
      "Northern Europe rewards travellers who are willing to look. This itinerary threads the classic fjords without treating them as a checklist. We linger in Geiranger and the Hardanger, and we leave space in the programme for weather — because the light here is the point, not a backdrop.\n\nOn board, the mood is Nordic: pale woods, wool throws, and a spa that actually stays calm. Enrichment leans toward geology, Sámi culture, and the history of coastal steamers rather than trivia nights.",
    whoItsFor:
      "Walkers, photographers, and anyone who would rather watch a fjord wall slide past in silence than fill every hour with entertainment. Ideal for friends travelling together and for solo guests who like a sociable table at dinner.",
    highlights: [
      "Scenic cruising through Geirangerfjord and Nærøyfjord",
      "Guided walk to a farmstead above the waterline",
      "Onboard talks on glaciology and coastal culture",
      "Optional kayak morning in a sheltered arm of the fjord",
      "Adults-only spa with fjord-facing treatment rooms",
    ],
    itinerary: [
      { day: 1, port: "Bergen", note: "Embark beside the wooden warehouses of Bryggen." },
      { day: 2, port: "Flåm", note: "Aurlandsfjord; railway or valley walk." },
      { day: 3, port: "Olden", note: "Briksdal glacier country by coach or on foot." },
      { day: 4, port: "Geiranger", note: "Full day in the UNESCO fjord." },
      { day: 5, port: "Ålesund", note: "Art Nouveau streets and a hilltop viewpoint." },
      { day: 6, port: "Trondheim", note: "Nidaros cathedral and the river Nidelva." },
      { day: 7, port: "At sea", note: "Crossing toward the Lofoten wall." },
      { day: 8, port: "Svolvær", note: "Fishing cabins, Arctic light, stockfish racks." },
      { day: 9, port: "Tromsø", note: "A long evening above the Arctic Circle." },
      { day: 10, port: "Leknes", note: "White beaches that look Caribbean until the wind arrives." },
      { day: 11, port: "At sea", note: "Southbound; recap and a farewell dinner." },
      { day: 12, port: "Bergen", note: "Morning in port; disembark or stay on." },
      { day: 13, port: "Bergen", note: "Disembark after breakfast." },
    ],
    image: img("photo-1507272931001-fc06c17e4f43"),
    imageAlt: "Northern lights over still water and mountain peaks",
    gallery: [
      {
        src: img("photo-1501785888041-af3ef285b470"),
        alt: "Mountain lake surrounded by forested peaks",
      },
      {
        src: img("photo-1482192505345-5655af888cc4"),
        alt: "Mist over a mountain range above still water",
      },
    ],
  },
  {
    slug: "inside-passage-quietude",
    name: "Inside Passage Quietude",
    region: "Alaska",
    shipStyle: "Ocean",
    durationNights: 8,
    vibe: "Wilderness, wildlife, and a ship small enough to feel the scale",
    shipName: "MV Kodiak Light",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    shortDescription:
      "Southeast Alaska without the megaship crush — glaciers, rainforest boardwalks, and evenings of low conversation.",
    description:
      "The Inside Passage is often sold as spectacle. We treat it as a landscape you enter carefully. A smaller ocean ship lets us use quieter docks and spend more time with naturalists who actually live in the region.\n\nThere is no casino, no Broadway revue. There is a covered observation lounge, a serious pair of binoculars on every table, and a kitchen that understands wild salmon. When the weather closes in — and it will — the day is still a good one.",
    whoItsFor:
      "Adults who want wilderness with proper beds. Especially well suited to couples marking an anniversary and to friends who hike at different speeds but like the same dinner conversation.",
    highlights: [
      "Glacier viewing from the open decks, not a crowded rail",
      "Naturalist-led walks in temperate rainforest",
      "Whale watching with local skippers (seasonal)",
      "Evenings with Tlingit storytellers when in port",
      "No children under 18; a genuinely quiet ship",
    ],
    itinerary: [
      { day: 1, port: "Juneau", note: "Embark; evening sail into Stephens Passage." },
      { day: 2, port: "Tracy Arm", note: "Scenic cruising among ice and waterfalls." },
      { day: 3, port: "Sitka", note: "Russian cathedral, eagles, a forest walk." },
      { day: 4, port: "Icy Strait Point", note: "Hoonah and optional whale watching." },
      { day: 5, port: "Glacier Bay", note: "A full day in the national park waters." },
      { day: 6, port: "Haines", note: "A working harbour; optional floatplane over the icefield." },
      { day: 7, port: "Ketchikan", note: "Creek Street and totem heritage at an adult pace." },
      { day: 8, port: "Inside Passage", note: "Sea day south through the channels." },
      { day: 9, port: "Vancouver", note: "Disembark after breakfast." },
    ],
    image: img("photo-1476514525535-07fb3b4ae5f1"),
    imageAlt: "Kayaker on still water beneath forested Alaskan mountains",
    gallery: [
      {
        src: img("photo-1439066615861-d1af74d74000"),
        alt: "Turquoise alpine lake among forested mountains",
      },
      {
        src: img("photo-1464822759023-fed622ff2c3b"),
        alt: "Snow-capped mountain peaks above cloud",
      },
    ],
  },
  {
    slug: "mekong-still-waters",
    name: "Mekong Still Waters",
    region: "Asia",
    shipStyle: "River",
    durationNights: 11,
    vibe: "River light, markets at dawn, temple courtyards",
    shipName: "RV Saffron",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    shortDescription:
      "A river ship between Siem Reap and Saigon — villages, monasteries, and the Mekong’s slow, serious beauty.",
    description:
      "River cruising in this part of Asia is intimate by nature: you are close to the bank, close to the current, close to daily life. JourneyJoy’s Mekong sailing is adults-only so the ship can stay small and the conversations stay grown-up.\n\nWe move between Cambodia and Vietnam with local guides who are not reciting a script. There is time in a monastery courtyard, time in a floating market before the tour buses, and time to do nothing on the sun deck while the water hyacinth drifts past.",
    whoItsFor:
      "Curious travellers who have done the ‘greatest hits’ of Southeast Asia and want the river in between. Comfortable with heat, stairs, and the unexpected. Not a first trip for anyone who needs nightlife.",
    highlights: [
      "Dawn visit to a floating market before the crowds",
      "Private monastery conversation with a senior monk (arranged, never staged)",
      "French-colonial architecture in Phnom Penh at golden hour",
      "Cooking in a family kitchen on a Mekong island",
      "All-adult river ship with open-air lounge and no casino",
    ],
    itinerary: [
      { day: 1, port: "Siem Reap", note: "Hotel night; Angkor at a quiet hour the next morning." },
      { day: 2, port: "Siem Reap", note: "Temples, then overland to the ship at Kampong Cham." },
      { day: 3, port: "Kampong Cham", note: "Wat Nokor and village life along the river." },
      { day: 4, port: "Phnom Penh", note: "Royal Palace, the riverfront, an evening of Khmer music." },
      { day: 5, port: "Phnom Penh", note: "Optional Tuol Sleng / Killing Fields with a historian." },
      { day: 6, port: "Border / Chau Doc", note: "Cross into Vietnam; Cham community visit." },
      { day: 7, port: "Sa Đéc", note: "Colonial house, nurseries, and the river’s working boats." },
      { day: 8, port: "Cái Bè", note: "Fruit orchards and a hands-on cooking afternoon." },
      { day: 9, port: "Mỹ Tho", note: "Narrow canals by sampan." },
      { day: 10, port: "Ho Chi Minh City", note: "Dock overnight; city at your own pace." },
      { day: 11, port: "Ho Chi Minh City", note: "A last morning on board; disembark." },
      { day: 12, port: "Ho Chi Minh City", note: "Independent onward travel." },
    ],
    image: img("photo-1528127269322-539801943592"),
    imageAlt: "Limestone karsts and still water in a Southeast Asian bay",
    gallery: [
      {
        src: img("photo-1552465011-b4e21bf6e79a"),
        alt: "Long-tail boat on tropical turquoise water",
      },
      {
        src: img("photo-1508009603885-50cf7c579365"),
        alt: "Ornate temple spires against a warm sky",
      },
    ],
  },
  {
    slug: "windward-isles-unhurried",
    name: "Windward Isles Unhurried",
    region: "Caribbean",
    shipStyle: "Ocean",
    durationNights: 9,
    vibe: "Trade winds, volcanic islands, and no drum-show at sunset",
    shipName: "MV Tradewind",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    shortDescription:
      "The Windwards at yacht scale — Grenada to St. Lucia — with reef time, rum estates, and empty beaches at first light.",
    description:
      "Most Caribbean cruising is built for families and nightclubs. This one is not. We sail a compact ocean ship through the Windward Islands, overnighting in harbours where you can hear tree frogs, not a DJ.\n\nDays are for snorkelling gardens, walking a rum estate with the distiller, and reading under an awning. We avoid private-island water parks. We do not sell drinks packages. The bar knows how to make a proper rum punch and when to leave you alone.",
    whoItsFor:
      "Adults who like the Caribbean for water, spice, and landscape — not for a lanyard and a drinks package. Excellent for friends who want to travel together without sharing a mega-resort.",
    highlights: [
      "Overnight in harbour so evenings belong to the island",
      "Snorkel from a local boat, not a ship’s throng",
      "Estate rum tasting with the maker, not a gift-shop flight",
      "Optional ridge hike on St. Lucia’s Piton trail",
      "Adults-only guest list; no kids’ clubs, no foam parties",
    ],
    itinerary: [
      { day: 1, port: "St. George’s, Grenada", note: "Embark; nutmeg on the breeze." },
      { day: 2, port: "Grenada", note: "Grand Anse in the morning; sail at tea time." },
      { day: 3, port: "Bequia", note: "A walk to Princess Margaret Beach; model-boat makers." },
      { day: 4, port: "St. Vincent", note: "Botanical gardens and the windward coast." },
      { day: 5, port: "Mayreau / Tobago Cays", note: "Reef morning; barbecue on deck, not a beach club." },
      { day: 6, port: "St. Lucia (Soufrière)", note: "The Pitons at close range; optional hike or springs." },
      { day: 7, port: "Martinique", note: "Saint-Pierre and a Creole lunch ashore." },
      { day: 8, port: "Dominica", note: "Rainforest river and a serious botanical walk." },
      { day: 9, port: "At sea", note: "A last day of trade winds." },
      { day: 10, port: "Bridgetown, Barbados", note: "Disembark after breakfast." },
    ],
    image: img("photo-1507525428034-b723cf961d3e"),
    imageAlt: "Turquoise Caribbean water meeting pale sand and sky",
    gallery: [
      {
        src: img("photo-1544551763-46a013bb70d5"),
        alt: "Diver exploring a coral reef",
      },
      {
        src: img("photo-1474044159687-1ee9f3a51722"),
        alt: "Palm-lined tropical shoreline at the water’s edge",
      },
    ],
  },
  {
    slug: "rhine-castles-vineyards",
    name: "Rhine Castles & Vineyards",
    region: "Northern Europe",
    shipStyle: "River",
    durationNights: 8,
    vibe: "Half-timbered towns, Riesling slopes, chamber music",
    shipName: "RV Lorelei",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    shortDescription:
      "Amsterdam to Basel along the romantic Rhine — castles, cathedral cities, and vineyard walks without a coach convoy.",
    description:
      "The Rhine is one of Europe’s great adult rivers: history layered on both banks, wine that deserves attention, and towns that reward walking shoes. Our river ship is scaled for conversation. Suites open onto the water. The dining room serves the region you are passing, not a buffet of everything.\n\nWe time arrivals to miss the day-trip crush where we can, and we offer a serious Riesling walk in the Rheingau rather than a shopping shuttle.",
    whoItsFor:
      "Wine-curious travellers, architecture lovers, and anyone who has always wanted the Rhine without sharing it with a school group. Easy walking; lifts on board; a good choice for first-time river cruisers.",
    highlights: [
      "Slow transit of the Rhine Gorge with live commentary you can ignore",
      "Private tasting in a family estate above Rüdesheim",
      "After-hours cathedral visit in Cologne when available",
      "Bicycles on board for towpath rides",
      "Adults-only river ship; no kids’ pool, no disco",
    ],
    itinerary: [
      { day: 1, port: "Amsterdam", note: "Embark; canal lights after dinner." },
      { day: 2, port: "Cologne", note: "The cathedral and the old town at an adult tempo." },
      { day: 3, port: "Koblenz", note: "Deutsches Eck; optional fortress above the confluence." },
      { day: 4, port: "Rhine Gorge / Rüdesheim", note: "Castles all morning; vines in the afternoon." },
      { day: 5, port: "Heidelberg", note: "The castle terrace and the Philosophers’ Walk." },
      { day: 6, port: "Strasbourg", note: "Petite France and Alsatian wine." },
      { day: 7, port: "Breisach", note: "Gateway to the Black Forest or Colmar." },
      { day: 8, port: "Basel", note: "A last evening on the Rhine." },
      { day: 9, port: "Basel", note: "Disembark after breakfast." },
    ],
    image: img("photo-1467269204594-9661b134dd2b"),
    imageAlt: "Historic European town square with a clock tower and cafés",
    gallery: [
      {
        src: img("photo-1414235077428-338989a2e8c0"),
        alt: "A refined dining table with wine glasses and candles",
      },
      {
        src: img("photo-1551632811-561732d1e306"),
        alt: "A walking path through forested hills",
      },
    ],
  },
  {
    slug: "douro-valley-vintage",
    name: "Douro Valley Vintage",
    region: "Iberia",
    shipStyle: "River",
    durationNights: 7,
    vibe: "Terraced vineyards, azulejos, slow Portuguese afternoons",
    shipName: "RV Barca Nova",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    shortDescription:
      "Porto into the Douro’s schist terraces — quintas, river gorges, and port drawn from the barrel you are standing beside.",
    description:
      "The Douro is a specialist’s river: lock flights, steep terraces, and a wine culture that does not need explaining twice. We sail from Porto’s granite riverfront into Spain’s edge and back, staying adults-only so the ship can feel like a country house that happens to float.\n\nThere is time in a quinta kitchen, time in the Fundação Serralves, and time to watch the light move across the valley with a white port and tonic — the local answer to a gin and tonic, and a better one.",
    whoItsFor:
      "Wine lovers and design-minded travellers who like Porto as much as the valley. A strong choice for a milestone birthday. Walking is moderate; some quinta visits involve gravel and slopes.",
    highlights: [
      "Quinta visit with barrel tasting, not a coach-park pour",
      "Azulejo walking tour in Porto before embarkation",
      "Lock transit of the Douro’s dramatic gorges",
      "Fado evening in a small room, not a tourist dinner show",
      "Adults-only river ship with a proper wine cellar",
    ],
    itinerary: [
      { day: 1, port: "Porto", note: "Embark on the Gaia bank; Ribeira at twilight." },
      { day: 2, port: "Porto / Régua", note: "Sail the lower Douro; first terrace views." },
      { day: 3, port: "Pinhão", note: "Heart of the wine country; quinta lunch." },
      { day: 4, port: "Vega de Terrón", note: "The Spanish turnaround; Salamanca by coach if you wish." },
      { day: 5, port: "Barca d’Alva", note: "Almond country and a long, quiet afternoon." },
      { day: 6, port: "Régua", note: "Mateus palace gardens or a vineyard walk." },
      { day: 7, port: "Porto", note: "Return along the river; farewell dinner on board." },
      { day: 8, port: "Porto", note: "Disembark after breakfast." },
    ],
    image: img("photo-1555881400-74d7acaacd8b"),
    imageAlt: "Dom Luís I bridge and colourful riverfront houses in Porto",
    gallery: [
      {
        src: img("photo-1559339352-11d035aa65de"),
        alt: "Plated dinner in a softly lit restaurant",
      },
      {
        src: img("photo-1500530855697-b586d89ba3ee"),
        alt: "Sunlit hills and an open landscape at dusk",
      },
    ],
  },
  {
    slug: "seto-inland-sea",
    name: "Seto Inland Sea",
    region: "Asia",
    shipStyle: "Ocean",
    durationNights: 10,
    vibe: "Art islands, onsen towns, and a ship that whispers",
    shipName: "MV Shizuka",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    shortDescription:
      "A small-ship passage through Japan’s Inland Sea — Naoshima, Miyajima, and nights of kaiseki without the coach tour.",
    description:
      "The Seto Inland Sea is Japan at a human scale: islands, shrines, contemporary art, and ferries that the rest of the world has not yet fully claimed. We sail it on a small ocean ship with an adults-only complement, so the public rooms stay hushed and the dress code stays considered.\n\nOnshore, JourneyJoy works with local guides who can talk about the Iseada shrine carpenters and the Benesse art sites without rushing you to the gift shop. On board, kaiseki-inspired dinners and a cedar bath.",
    whoItsFor:
      "Design-literate travellers and anyone who wants Japan beyond Tokyo and Kyoto — though we begin in one and end near the other. Best for guests comfortable removing shoes, sitting on tatami when invited, and moving through temples with respect.",
    highlights: [
      "Naoshima and Teshima with timed museum entries",
      "Itsukushima shrine at a tide chosen for reflection, not photos only",
      "Onsen town evening in a ryokan bathhouse (tattoos policies briefed in advance)",
      "Kaiseki-inspired dining and a quiet sake hour",
      "Adults-only small ship; no karaoke palace",
    ],
    itinerary: [
      { day: 1, port: "Kobe", note: "Embark after an independent morning in the city." },
      { day: 2, port: "Naoshima", note: "Art houses and the sea that holds them." },
      { day: 3, port: "Teshima / Inujima", note: "A slower art day; picnic on deck." },
      { day: 4, port: "Hiroshima / Miyajima", note: "Peace Park with a historian; shrine island at dusk." },
      { day: 5, port: "Matsuyama", note: "Dōgo Onsen and a castle hill." },
      { day: 6, port: "Takamatsu", note: "Ritsurin Garden when the tour groups have left." },
      { day: 7, port: "Tomonoura", note: "A fishing town that still looks like a woodblock." },
      { day: 8, port: "Uno / Kurashiki", note: "Canal warehouses and the Ohara collection." },
      { day: 9, port: "Osaka", note: "Evening alongside; optional food walk in Dotonbori — or stay on board." },
      { day: 10, port: "Osaka", note: "A last morning; disembark for Kyoto or Kansai Airport." },
      { day: 11, port: "Osaka", note: "Independent onward travel." },
    ],
    image: img("photo-1493976040374-85c8e12f0c0e"),
    imageAlt: "A Japanese pagoda among blossoming trees",
    gallery: [
      {
        src: img("photo-1480796927426-f609979314bd"),
        alt: "Lantern-lit Japanese street at night",
      },
      {
        src: img("photo-1540959733332-eab4deabeeaf"),
        alt: "A city crossing in Japan at twilight",
      },
    ],
  },
  {
    slug: "cyclades-at-dusk",
    name: "Cyclades at Dusk",
    region: "Mediterranean",
    shipStyle: "Ocean",
    durationNights: 8,
    vibe: "Whitewashed islands, volcanic harbours, late swimming",
    shipName: "MV Asteri",
    line: "JourneyJoy Collection",
    collection: "Boutique",
    shortDescription:
      "An adults-only hop through the Cyclades — Santorini’s caldera, Sifnos kitchens, and Delos before the tenders arrive.",
    description:
      "The Greek islands are often sold as a party. This sailing is the other Greece: marble, thyme, and a caldera wall at the hour when day-boats have gone. We keep the ship small enough to sit in harbours overnight, so you can walk a village after dinner and come back to your own cabin.\n\nJourneyJoy’s hosts know when to arrange a table at a family taverna and when to leave you with a map. There is a classicist on board for Delos, and a swimming ladder that sees serious use.",
    whoItsFor:
      "Return visitors to Greece who want the islands without the package-holiday tempo, and first-timers who would rather have one perfect hour in a museum than five rushed ones. Warm-weather sailing; some tender ports.",
    highlights: [
      "Delos at opening, with a scholar rather than a flag",
      "Overnight in Santorini so sunset is not a stampede",
      "Sifnos for pottery and a cook’s table",
      "Sea swimming off the stern in settled weather",
      "Adults-only; no foam, no silent disco, no kids’ club",
    ],
    itinerary: [
      { day: 1, port: "Piraeus (Athens)", note: "Embark; Saronic light as you leave." },
      { day: 2, port: "Kea", note: "A quiet island; walking paths and a harbour swim." },
      { day: 3, port: "Syros", note: "Ermoupoli’s marble square and a Catholic-Orthodox skyline." },
      { day: 4, port: "Mykonos / Delos", note: "Delos in the morning; Mykonos after the day-trippers thin." },
      { day: 5, port: "Naxos", note: "The Portara at dusk; inland villages if you wish." },
      { day: 6, port: "Santorini", note: "Caldera overnight; Oia at a civilised hour." },
      { day: 7, port: "Sifnos", note: "Kitchens, trails, and pottery workshops." },
      { day: 8, port: "Hydra", note: "No cars, stone lanes, a last swim." },
      { day: 9, port: "Piraeus", note: "Disembark after breakfast." },
    ],
    image: img("photo-1613395877344-13d4a8e0d49e"),
    imageAlt: "Whitewashed buildings and a blue-domed church above the Aegean",
    gallery: [
      {
        src: img("photo-1570077188670-e3a8d69ac5ff"),
        alt: "Santorini rooftops overlooking a volcanic caldera",
      },
      {
        src: img("photo-1530841377377-3ff06c0ca713"),
        alt: "Sunlit stone walls and bougainvillea in a Mediterranean village",
      },
    ],
  },
  {
    slug: "royal-eastern-caribbean",
    name: "Eastern Caribbean Oasis",
    region: "Caribbean",
    shipStyle: "Ocean",
    durationNights: 7,
    vibe: "Resort-at-sea energy, private-island day, family-ready",
    shipName: "Wonder of the Seas",
    line: "Royal Caribbean",
    collection: "Mainstream",
    featured: true,
    shortDescription:
      "A Royal Caribbean week from Florida — St. Thomas, Philipsburg, and a private-island beach day on a ship built for neighbourhoods, pools, and a full evening programme.",
    description:
      "This is the other half of how people cruise: a proper ocean liner with a boardwalk, a theatre, and enough dining rooms that nobody has to eat at the same table twice. JourneyJoy presents it because many clients want Royal Caribbean — multi-generational groups, first-time cruisers, and anyone who likes a ship that feels like a destination of its own.\n\nWe help you choose the right neighbourhood on board, whether that is a connecting family block or a quieter suite corridor, and we talk honestly about sea days versus port days. There is a kids’ programme if you need it, and a cocktail bar if you do not.",
    whoItsFor:
      "Families, friend groups, and first-time cruisers who want the full Royal Caribbean experience — shows, water, and a private-island day — with someone to help sort cabins and dining before you sail.",
    highlights: [
      "Seven-night Eastern Caribbean itinerary from a Florida homeport",
      "Private-island beach day with more space than a typical tender port",
      "Neighbourhoods on board so energy and quiet can coexist",
      "Broadway-style evening shows and a full kids’ and teens’ programme",
      "JourneyJoy guidance on cabin location, dining, and who the ship suits",
    ],
    itinerary: [
      { day: 1, port: "Port Canaveral", note: "Embark; sail in the evening." },
      { day: 2, port: "At sea", note: "Ship day — pools, neighbourhoods, first show." },
      { day: 3, port: "Philipsburg, St. Maarten", note: "Two beaches, one French, one Dutch." },
      { day: 4, port: "Charlotte Amalie, St. Thomas", note: "Harbour views and an optional sail to St. John." },
      { day: 5, port: "Perfect Day at CocoCay", note: "Royal Caribbean’s private island — beach or thrills." },
      { day: 6, port: "At sea", note: "A last full day on board." },
      { day: 7, port: "At sea", note: "Pack, one more dinner, late sail-in talk." },
      { day: 8, port: "Port Canaveral", note: "Disembark after breakfast." },
    ],
    image: img("photo-1548574505-5e239809ee19"),
    imageAlt: "Large ocean cruise ships alongside a tropical harbour",
    gallery: [
      {
        src: img("photo-1507525428034-b723cf961d3e"),
        alt: "Turquoise Caribbean water and pale sand",
      },
      {
        src: img("photo-1544551763-46a013bb70d5"),
        alt: "Snorkelling over a coral reef",
      },
    ],
  },
  {
    slug: "celebrity-greek-isles",
    name: "Celebrity Greek Isles",
    region: "Mediterranean",
    shipStyle: "Ocean",
    durationNights: 7,
    vibe: "Premium ocean ship, island-hopping, design-led public rooms",
    shipName: "Celebrity Beyond",
    line: "Celebrity Cruises",
    collection: "Mainstream",
    featured: true,
    shortDescription:
      "A Celebrity week from Athens — Santorini, Mykonos, Rhodes, and Kusadasi — on a ship that leans premium: better dining, a quieter pool deck, still plenty of life after dark.",
    description:
      "Celebrity sits between a resort megaship and a yacht. The Greek Isles week is one of the lines we are asked about most: couples who want Santorini without giving up a spa and a proper theatre, and families who have outgrown water slides but still want a ship that knows how to host.\n\nJourneyJoy is not a Celebrity booking desk. We place this sailing next to our smaller Cyclades itinerary so you can see the trade-off — more ship, more polish, fewer overnight harbours — and choose with your eyes open.",
    whoItsFor:
      "Couples and multi-generational groups who want the Greek islands on a premium mainstream ship. Good for travellers who like Celebrity’s dining and design more than a theme-park at sea.",
    highlights: [
      "Seven nights from Piraeus with Santorini, Mykonos, and Ephesus country",
      "Celebrity Beyond — Edge-class ship, resort-casual evenings",
      "More included dining and a quieter pool deck than the biggest liners",
      "Optional comparison with our boutique Cyclades sailing",
      "No payment on this site — enquire and we talk through cabin and timing",
    ],
    itinerary: [
      { day: 1, port: "Piraeus (Athens)", note: "Embark after an independent morning in the city." },
      { day: 2, port: "Mykonos", note: "Windmills, lanes, and a late tender if you stay for sunset." },
      { day: 3, port: "Rhodes", note: "The old town walls and an optional Lindos terrace." },
      { day: 4, port: "Kusadasi", note: "Ephesus in the morning heat; the ship waits." },
      { day: 5, port: "Santorini", note: "Caldera tender; Oia or a quieter village if you prefer." },
      { day: 6, port: "At sea", note: "A recovery day between islands." },
      { day: 7, port: "Napflio or at sea", note: "Itinerary varies by departure — we confirm the week you want." },
      { day: 8, port: "Piraeus", note: "Disembark after breakfast." },
    ],
    image: img("photo-1570077188670-e3a8d69ac5ff"),
    imageAlt: "White rooftops and a blue-domed church above a volcanic caldera",
    gallery: [
      {
        src: img("photo-1515542622106-78bda8ba0e5b"),
        alt: "Sunlit classical colonnade in the Mediterranean",
      },
      {
        src: img("photo-1530841377377-3ff06c0ca713"),
        alt: "Bougainvillea and stone walls in a Greek village",
      },
    ],
  },
  {
    slug: "princess-alaska-passage",
    name: "Princess Alaska Passage",
    region: "Alaska",
    shipStyle: "Ocean",
    durationNights: 7,
    vibe: "Glacier viewing, a classic ocean ship, space for three generations",
    shipName: "Discovery Princess",
    line: "Princess Cruises",
    collection: "Mainstream",
    shortDescription:
      "A Princess week through the Inside Passage — Juneau, Skagway, Ketchikan, and glacier country — on a ship sized for families who still want a real view from the rail.",
    description:
      "Princess is how a great many people first see Alaska: a mid-to-large ocean ship, a covered promenade, and a glacier day that does not require a zodiac certificate. We include it because it is a strong, honest choice — not a compromise we hide behind boutique language.\n\nNext to our smaller Inside Passage Quietude sailing, this one has more entertainment, more dining rooms, and an easier time if grandparents and grandchildren are travelling together. JourneyJoy will tell you which of the two fits the week you actually want.",
    whoItsFor:
      "Families and mixed-age groups who want Alaska on a name they recognise. Also a good step up for travellers who have done a Caribbean megaship and want scenery instead of a private island.",
    highlights: [
      "Seven-night Inside Passage with a dedicated glacier-viewing day",
      "Princess medallion-class ship — app, dining, and cabin service",
      "Easier logistics for three generations than a small expedition vessel",
      "Optional comparison with our boutique Alaska sailing",
      "Enquire only — we do not ticket or take payment here",
    ],
    itinerary: [
      { day: 1, port: "Seattle or Vancouver", note: "Embark; evening sail into the channels." },
      { day: 2, port: "At sea", note: "Scenic cruising; first glacier briefing." },
      { day: 3, port: "Juneau", note: "Mendenhall country or a seaplane if the weather holds." },
      { day: 4, port: "Skagway", note: "White Pass railway or a walk through the gold-rush street." },
      { day: 5, port: "Glacier Bay or Hubbard", note: "A full day of ice, depending on the departure." },
      { day: 6, port: "Ketchikan", note: "Creek Street, totems, and a short rainforest walk." },
      { day: 7, port: "Inside Passage", note: "Southbound sea day." },
      { day: 8, port: "Seattle or Vancouver", note: "Disembark after breakfast." },
    ],
    image: img("photo-1464822759023-fed622ff2c3b"),
    imageAlt: "Snow-capped mountain peaks above cloud, Alaska scale",
    gallery: [
      {
        src: img("photo-1439066615861-d1af74d74000"),
        alt: "Turquoise glacial water among forested mountains",
      },
      {
        src: img("photo-1476514525535-07fb3b4ae5f1"),
        alt: "A kayaker on still water beneath Alaskan peaks",
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
