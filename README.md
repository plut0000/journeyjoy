# JourneyJoy

Independent marketing site for **JourneyJoy**, a cruise specialist covering mainstream ocean lines (Royal Caribbean, Celebrity, Princess) and boutique river and ocean sailings. Visitors browse a curated catalogue and enquire — there is no cart, checkout, or payment flow.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:43147](http://localhost:43147).

Production build:

```bash
npm run build
npm start
```

## What’s included

- Home, cruises grid, cruise detail, about, and contact
- Sample sailings in `src/data/cruises.ts` (typed, easy to edit)
- Contact form UI with a client-side success toast — submissions are **not** emailed yet
- Placeholder contact block (`Email coming soon`, phone/address TBD)

## Contact details

Live email, phone, and address are not set. Look for `TODO` comments in `src/lib/site.ts` and `src/app/contact/page.tsx`, then replace the placeholders.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
