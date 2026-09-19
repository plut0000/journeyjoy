import Link from "next/link";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {site.tagline} Independent guidance across Royal Caribbean,
            Celebrity, Princess, and quieter boutique ships.
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">
            Get in touch
          </p>
          <p className="mt-4 text-sm text-primary-foreground/75">
            {site.contact.emailLabel}
          </p>
          <p className="mt-1 text-sm text-primary-foreground/55">
            {site.contact.note}
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex text-sm text-gold underline-offset-4 hover:underline"
          >
            Open the enquiry form
          </Link>
        </div>
      </div>
      <Separator className="bg-white/10" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {site.name}. Independent cruise specialist.</p>
        <p>Catalogue only — no bookings or payments on this site.</p>
      </div>
    </footer>
  );
}
