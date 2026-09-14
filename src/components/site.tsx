"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@heyitscharliem/design-system";
import { Mail } from "lucide-react";

// lucide-react dropped brand/logo glyphs (trademark policy) — inlined here
// since GitHub/LinkedIn aren't available as importable icons any more.
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-border/60 sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-brand-ink font-mono text-sm font-semibold">
          heyitscharlie
        </Link>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-ink text-sm hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

const ROTATING_WORDS = ["audacious", "resilient", "relentless", "10x"];
const ROTATE_INTERVAL_MS = 2200;

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-brand-ink font-mono italic" aria-live="polite">
      {ROTATING_WORDS[index]}
    </span>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
      <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-6xl">
        Let&apos;s build something <RotatingWord />.
      </h1>

      {/* TODO: replace with real copy */}
      <div className="mt-8 max-w-2xl space-y-4 text-foreground/80">
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>

      <div className="mt-8 flex gap-3">
        <Button asChild variant="default" size="icon" aria-label="Email">
          <a href="mailto:heyitscharliem@gmail.com">
            <Mail />
          </a>
        </Button>
        <Button asChild variant="default" size="icon" aria-label="LinkedIn">
          <a href="https://linkedin.com/in/heyitscharlie" target="_blank" rel="noreferrer">
            <LinkedinIcon className="size-4" />
          </a>
        </Button>
        <Button asChild variant="default" size="icon" aria-label="GitHub">
          <a href="https://github.com/heyitscharlie" target="_blank" rel="noreferrer">
            <GithubIcon className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "SQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Figma",
  "CI/CD",
  "Testing",
  "System Design",
  "REST APIs",
  "PostgreSQL",
];

export function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <h2 className="text-3xl font-bold tracking-tight">Skills &amp; background</h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="border-border rounded-md border px-3 py-1 font-mono text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

const PLACEHOLDER_SECTIONS = [
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

/** Anchor targets for the nav links above the fold. Content TBD. */
export function PlaceholderSections() {
  return (
    <>
      {PLACEHOLDER_SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>
          <p className="text-muted-foreground mt-4">Content coming soon.</p>
        </section>
      ))}
    </>
  );
}
