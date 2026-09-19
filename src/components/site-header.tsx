"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-primary-foreground backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <Link
          href="/"
          className="rounded-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus-visible:outline-none"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[0.72rem] font-medium tracking-[0.22em] uppercase transition-colors",
                  active ? "text-gold" : "text-primary-foreground/80 hover:text-gold",
                  "after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold after:transition-all",
                  active ? "after:w-full" : "after:w-0 hover:after:w-full",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-sm bg-gold px-4 text-[0.7rem] tracking-[0.18em] text-navy uppercase hover:bg-gold/90",
            )}
          >
            Enquire
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            nativeButton
            className="inline-flex size-8 items-center justify-center rounded-sm text-primary-foreground transition-colors hover:bg-white/10 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-navy/10 bg-navy text-primary-foreground"
          >
            <SheetHeader>
              <SheetTitle className="text-primary-foreground">
                <Logo compact />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-2 py-3 font-heading text-2xl text-primary-foreground/90 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
