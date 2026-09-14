"use client";

import Link from "next/link";
import InlineSVG from "react-inlinesvg";
import { Nav } from "@/components/site";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        {/* Same hand-drawn line art as the hero's laptop illustration —
         * fetched from the shared Blob store and inlined by react-inlinesvg
         * so stroke="currentColor" can follow text-foreground per theme. */}
        <InlineSVG
          src={`${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/magnifier.svg`}
          aria-hidden="true"
          className="text-foreground w-28 sm:w-36"
        />
        <h1 className="mt-8 text-3xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="text-foreground/80 mt-3 max-w-md">
          Whatever you were looking for isn&apos;t here.
        </p>
        <Link href="/" className="text-primary mt-6 text-sm hover:underline">
          Back home
        </Link>
      </main>
    </div>
  );
}
