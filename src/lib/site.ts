export const site = {
  name: "JourneyJoy",
  tagline: "Ocean and river cruises, from the lines you know to the quieter ships.",
  description:
    "JourneyJoy is an independent cruise specialist. We help you compare Royal Caribbean, Celebrity, Princess, and boutique adult-focused river and ocean sailings — then enquire. We do not take bookings or payments on this site.",
  url: "https://journeyjoy.example",
  // TODO: Replace with live JourneyJoy contact details when available.
  contact: {
    emailLabel: "Email coming soon",
    email: "",
    phoneLabel: "Phone TBD",
    phone: "",
    addressLabel: "Studio address TBD",
    address: "",
    hours: "Replies: weekdays, by appointment",
    note: "Contact details TBD — this page is ready for live email, phone, and address.",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/cruises", label: "Cruises" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
