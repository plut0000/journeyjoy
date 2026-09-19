"use client";

import { ViewTransition } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return <ViewTransition>{children}</ViewTransition>;
}
