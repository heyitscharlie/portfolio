"use client";

import { useEffect, useState } from "react";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// Importing config here (inside a Client Component file) rather than in
// the server page and passing it down as a prop — Sanity's config object
// embeds React icon components and functions, which aren't serializable
// across the server/client boundary. A plain module-level import stays
// entirely within the client bundle, so nothing needs to cross that
// boundary at all.
//
// NextStudio only renders after `mounted` flips true in an effect, i.e.
// strictly after this component's own first commit — not via
// next/dynamic's ssr:false, which still tried to reveal Studio mid-way
// through its own lazy-load/Suspense lifecycle and tripped a "state
// update on a component that hasn't mounted yet" warning from something
// inside Studio's own startup sequence. Gating on a plain mounted flag
// guarantees Studio never starts running until after mount has fully
// settled.
export default function StudioClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <NextStudio config={config} />;
}
