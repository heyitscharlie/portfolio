"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button, CardDescription, CardFooter, CardTitle, ModeToggle } from "@heyitscharlie/design-system";

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

const LINKEDIN_URL = "https://linkedin.com/in/charlie-martins";
const GITHUB_URL = "https://github.com/charlie-martins";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-border/60 sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-accent font-mono text-sm font-semibold">
          heyitscharlie
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-accent text-sm hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

const ROTATING_WORDS = ["cool", "awesome", "fast", "interesting"];
const ROTATE_INTERVAL_MS = 2200;
// Reserve space for the longest word so the headline's wrap point never
// changes as shorter words rotate through — otherwise the line (and
// everything below it) jumps every 2.2s whenever a word happens to be
// just short enough to fit where a longer one wrapped.
const ROTATING_WORD_MIN_CH = Math.max(...ROTATING_WORDS.map((word) => word.length));

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="text-accent inline-block font-mono italic"
      style={{ minWidth: `${ROTATING_WORD_MIN_CH}ch` }}
      aria-live="polite"
    >
      {ROTATING_WORDS[index]}
    </span>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
      <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-6xl">
        Let&apos;s build something <RotatingWord />
      </h1>

      <div className="mt-8 max-w-2xl space-y-4 text-foreground/80">
        <p>
          Senior product engineer with six years building SPAs, mobile apps,
          and design-system-driven frontends in React, React Native, and
          TypeScript. I work like a founder rather than a ticket-taker —
          conceiving, designing, and shipping product surfaces end-to-end,
          using AI-native workflows to build at start-up speed.
        </p>
        <p>
          Proof of that: Tero, an agentic AI chat platform for hosts, plus a
          portfolio of self-initiated products shipped solo. Currently
          completing an MSc
          in Computer Science with Artificial Intelligence at the University
          of York.
        </p>
      </div>

      <div className="mt-8 flex gap-3">
        <Button asChild variant="default" size="icon" aria-label="LinkedIn">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <LinkedinIcon className="size-4" />
          </a>
        </Button>
        <Button asChild variant="default" size="icon" aria-label="GitHub">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GithubIcon className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

const SKILLS = [
  "TypeScript",
  "React",
  "React Native",
  "JavaScript",
  "Node",
  "Python",
  "SDUI",
  "Contentful",
  "Algolia",
  "HubSpot",
  "Eppo",
  "Segment",
  "Storybook",
  "PostHog",
  "CI/CD",
  "GitHub Actions",
  "AI-native workflows (Claude)",
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

const CLIENT_PROJECTS = [
  {
    name: "Agentic AI",
    description:
      "Tero, an AI chat platform for hosts grounded in the HubSpot knowledge base — authenticated KB sync, PydanticAI agents, guardrail evals. Built end to end in a two-week R&D rotation: 227 commits, 10 PRs, ten working days.",
    tags: ["PydanticAI", "Python", "Celery"],
  },
  {
    name: "Passenger Flagging System",
    description:
      "Full-stack ownership of a passenger risk-flagging system — evaluation engine, event publishing, and GraphQL on the backend; the host-facing management UI on the frontend. One engineer carrying the whole build across both repos.",
    tags: ["Django", "GraphQL", "React"],
  },
  {
    name: "Automated Notifications System",
    description:
      "A fully automated, multi-channel notifications system tying together scheduling, orchestration, transactional email, and marketing automation — QStash, Knock, Mandrill, and HubSpot working as one pipeline. Part of a marketing capture project that lifted opt-ins by 20%.",
    tags: ["QStash", "Knock", "Mandrill"],
  },
  {
    name: "In-browser desktop environment",
    description:
      "NDA contract for a stealth US tech company: a full hardware-management rebuild in React, including a browser, a note-taking app, and exam evaluation logic, all running inside the browser.",
    tags: ["React"],
  },
  {
    name: "Mobile Applications",
    description:
      "React Native apps taken from scratch to launch as founding engineer — one MVP strong enough to raise £150k — plus ownership of existing apps through major redesigns and new feature work.",
    tags: ["React Native"],
  },
];

/** Tracks scroll progress through an element (0 at "just entered the
 * bottom of the viewport" to 1 at "just left the top") — rAF-throttled
 * so the scroll listener doesn't fire a state update on every pixel. */
function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const scrolled = vh - rect.top;
      setProgress(Math.min(1, Math.max(0, scrolled / total)));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { ref, progress };
}

// A holographic-foil look, not the design-system's own (deliberately
// subtle, single-hue) gradient token — this is a portfolio-only effect,
// modeled on Back Market's refurb-spec cards: a multi-hue pastel sweep
// plus a fine diagonal diffraction-line texture, both panning together
// on scroll so the whole row catches the light in sync. The hue sweep
// comes from the theme's own --primary/--accent (mixed toward white for
// the pastel-foil look) rather than hardcoded hex — stays on-palette
// automatically if mustard/space or light/dark changes, instead of an
// arbitrary rainbow unrelated to the site's actual colors. This is a
// plain inline style, not a Tailwind class/@apply, so it's parsed
// directly by the browser at runtime — none of the Lightning CSS
// @supports color-mix() fallback risk that bit the design-system's own
// gradient token applies here.
const HOLOGRAM_BACKGROUND = `linear-gradient(
  115deg,
  color-mix(in oklch, var(--primary) 30%, white),
  color-mix(in oklch, var(--accent) 35%, white),
  color-mix(in oklch, var(--primary) 15%, white),
  color-mix(in oklch, var(--accent) 45%, white),
  color-mix(in oklch, var(--primary) 30%, white)
)`;
const HOLOGRAM_LINES =
  "repeating-linear-gradient(115deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 3px)";

function HolographicCard({
  project,
  progress,
}: {
  project: (typeof CLIENT_PROJECTS)[number];
  progress: number;
}) {
  return (
    <div
      className="relative flex flex-col gap-3 overflow-hidden rounded-xl p-6"
      style={{
        background: HOLOGRAM_BACKGROUND,
        backgroundSize: "400% 400%",
        backgroundPosition: `${progress * 100}% ${progress * 100}%`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: HOLOGRAM_LINES, mixBlendMode: "overlay" }}
      />
      <div className="relative z-10 flex flex-col gap-3 text-neutral-900">
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <CardFooter>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </CardFooter>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>

      <h3 className="text-muted-foreground mt-8 font-mono text-sm tracking-wide uppercase">
        Client / Proprietary
      </h3>
      <div ref={ref} className="mt-4 grid gap-6 sm:grid-cols-2">
        {CLIENT_PROJECTS.map((project) => (
          <HolographicCard key={project.name} project={project} progress={progress} />
        ))}
      </div>

      <h3 className="text-muted-foreground mt-12 font-mono text-sm tracking-wide uppercase">
        Independent
      </h3>
      <p className="text-muted-foreground mt-4">Coming soon.</p>
    </section>
  );
}

const EDUCATION = [
  {
    qualification: "MSc, Computer Science with AI",
    org: "University of York",
    dates: "2026 – 2028, part-time, in progress",
  },
  {
    qualification: "BA, European Politics",
    org: "King's College London",
    dates: "2014 – 2017",
  },
  {
    qualification: "Full Stack Web Development",
    org: "Le Wagon",
    dates: "2019 – 2020",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight">About</h2>

      <p className="text-foreground/80 mt-6 max-w-2xl">
        I&apos;m a senior product engineer with six years of experience
        building SPAs, mobile apps, and design-system-driven frontends in
        React, React Native, and TypeScript. I work like a founder rather
        than a ticket-taker: I conceive, design, and ship product surfaces
        end-to-end, using AI-native workflows (Claude, agentic tooling) to
        build at start-up speed.
      </p>

      <h3 className="mt-10 text-sm font-semibold tracking-wide uppercase text-muted-foreground">
        Education
      </h3>
      <ul className="mt-4 space-y-3">
        {EDUCATION.map((entry) => (
          <li key={entry.qualification} className="flex flex-wrap items-baseline justify-between gap-x-4">
            <span>
              <span className="font-medium">{entry.qualification}</span>{" "}
              <span className="text-muted-foreground">— {entry.org}</span>
            </span>
            <span className="text-muted-foreground font-mono text-sm">{entry.dates}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 text-sm font-semibold tracking-wide uppercase text-muted-foreground">
        Memberships
      </h3>
      <p className="text-foreground/80 mt-4">
        <span className="font-medium">Founders of the Future</span> — Fellow.
        An invite-only community, launched by Founders Forum, for
        entrepreneurs under 30 identified as most likely to shape the next
        wave of technology startups.
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
      <p className="text-foreground/80 mt-4 max-w-2xl">
        London, UK (remote-first). Best reached via LinkedIn.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
