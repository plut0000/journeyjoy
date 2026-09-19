"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cruises } from "@/data/cruises";
import { cn } from "@/lib/utils";

export function ContactForm({ defaultSailing = "" }: { defaultSailing?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Please add your name, email, and a short message.");
      return;
    }

    // TODO: Wire this form to an email or CRM endpoint when contact details go live.
    setSubmitted(true);
    toast.success("Enquiry noted — nothing is sent yet.", {
      description:
        "This preview form does not deliver messages. Live email will be added later.",
    });
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate method="post" action="#">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            className="h-11 rounded-sm bg-card"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="h-11 rounded-sm bg-card"
            placeholder="you@example.com"
          />
        </Field>
      </div>
      <Field label="Sailing of interest" htmlFor="sailing">
        <select
          id="sailing"
          name="sailing"
          defaultValue={defaultSailing}
          className="h-11 w-full rounded-sm border border-input bg-card px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">I am still exploring</option>
          {cruises.map((cruise) => (
            <option key={cruise.slug} value={cruise.slug}>
              {cruise.line} · {cruise.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          className="min-h-32 rounded-sm bg-card"
          placeholder="When you like to travel, who is joining you, and what you hope the days will feel like."
        />
      </Field>
      <p className="text-sm text-muted-foreground">
        Submissions are not delivered yet. Use this form to see the enquiry
        flow; live contact details will replace the placeholders on this page.
      </p>
      <button
        type="submit"
        className={cn(
          buttonVariants({ size: "lg" }),
          "h-11 rounded-sm bg-navy px-6 text-[0.72rem] tracking-[0.18em] text-cream uppercase hover:bg-navy/90",
        )}
      >
        Send enquiry
      </button>
      {submitted ? (
        <p role="status" className="text-sm text-foreground">
          Thank you. When JourneyJoy email is connected, a note like this will
          reach us.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-[0.7rem] tracking-[0.16em] uppercase">
        {label}
      </Label>
      {children}
    </div>
  );
}
