// One-off seed: populates Sanity with the site's current hardcoded copy,
// so Studio opens with real content to edit instead of a blank slate.
// Run once with: node --env-file=.env.local scripts/seed-sanity.mjs
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: "2026-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const CORE_SKILLS = ["TypeScript", "React", "React Native", "JavaScript", "Node", "AI-native workflows"];
const OTHER_SKILLS = [
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
];

const CLIENT_PROJECTS = [
  {
    name: "Agentic AI",
    description:
      "I built Tero, an AI chat platform for hosts grounded in the HubSpot knowledge base — authenticated KB sync, PydanticAI agents, guardrail evals — end to end in a two-week R&D rotation: 227 commits, 10 PRs, ten working days.",
    tags: ["PydanticAI", "Python", "Celery"],
  },
  {
    name: "Mobile Applications",
    description:
      "I've taken React Native apps from scratch to launch as founding engineer — one MVP strong enough to raise £150k — and owned existing apps through major redesigns and new feature work.",
    tags: ["React Native"],
  },
  {
    name: "Automated Notifications System",
    description:
      "I built a fully automated, multi-channel notifications system tying together scheduling, orchestration, transactional email, and marketing automation — QStash, Knock, Mandrill, and HubSpot working as one pipeline. Part of a marketing capture project that lifted opt-ins by 20%.",
    tags: ["QStash", "Knock", "Mandrill"],
  },
  {
    name: "Passenger Flagging System",
    description:
      "I owned a passenger risk-flagging system full-stack — evaluation engine, event publishing, and GraphQL on the backend, the host-facing management UI on the frontend — carrying the whole build across both repos myself.",
    tags: ["Django", "GraphQL", "React"],
  },
  {
    name: "In-browser desktop environment",
    description:
      "Under NDA for a stealth US tech company, I rebuilt an internal hardware-management system in React — a full in-browser desktop environment, complete with its own browser, a note-taking app, and exam-evaluation logic.",
    tags: ["React"],
  },
];

const INDEPENDENT_PROJECTS = [
  {
    name: "This Portfolio",
    description: "This site, actually — built with Next.js and my own heyitscharlie design system.",
    links: [{ type: "github", href: "https://github.com/heyitscharlie/portfolio" }],
  },
  {
    name: "Design System",
    description: "The component library and design tokens I built to power this site — and whatever I build next.",
    links: [
      { type: "github", href: "https://github.com/heyitscharlie/design-system" },
      { type: "npm", href: "https://www.npmjs.com/package/@heyitscharlie/design-system" },
    ],
  },
  { name: "Coming soon", description: "In progress.", links: [] },
];

const EDUCATION = [
  {
    qualification: "MSc, Computer Science with AI",
    org: "University of York",
    dates: "2026 – 2028, part-time, in progress",
  },
  { qualification: "Full Stack Web Development", org: "Le Wagon", dates: "2019 – 2020" },
  { qualification: "BA, European Politics", org: "King's College London", dates: "2014 – 2017" },
];

async function run() {
  const tx = client.transaction();

  tx.createIfNotExists({
    _id: "hero",
    _type: "hero",
    rotatingWords: ["cool", "awesome", "fast", "interesting"],
    introParagraphs: [
      "I'm a senior product engineer with six years building SPAs, mobile apps, and design-system-driven frontends in React, React Native, and TypeScript. I work like a founder rather than a ticket-taker — I conceive, design, and ship product surfaces end-to-end, and I lean on AI-native workflows to build at start-up speed.",
      "I'm currently completing an MSc in Computer Science with Artificial Intelligence at the University of York — the tools keep changing, and I want to understand them properly, not just use them.",
    ],
  });

  tx.createIfNotExists({
    _id: "about",
    _type: "about",
    introParagraph:
      "I'm a senior product engineer with six years of experience building SPAs, mobile apps, and design-system-driven frontends in React, React Native, and TypeScript. I work like a founder rather than a ticket-taker: I conceive, design, and ship product surfaces end-to-end, using AI-native workflows and agentic tooling to build at start-up speed.",
    education: EDUCATION.map((entry, i) => ({ ...entry, _type: "educationEntry", _key: `education-${i}` })),
    membershipsText:
      "I'm a Fellow of Founders of the Future — an invite-only community, launched by Founders Forum, for entrepreneurs under 30 identified as most likely to shape the next wave of technology startups.",
  });

  tx.createIfNotExists({
    _id: "contact",
    _type: "contact",
    blurb: "I'm based in London, UK (remote-first) — best way to reach me is LinkedIn.",
    footerNotes: [
      {
        _type: "footerNote",
        _key: "footer-illustrations",
        text: "Illustrations by my lively wife,",
        linkText: "@bingu.zinha",
        linkHref: "https://instagram.com/bingu.zinha",
        icon: "instagram",
      },
      {
        _type: "footerNote",
        _key: "footer-builtwith",
        text: "This page was made using",
        linkText: "@heyitscharlie/design-system",
        linkHref: "https://www.npmjs.com/package/@heyitscharlie/design-system",
        icon: "npm",
      },
      {
        _type: "footerNote",
        _key: "footer-copyright",
        text: "© 2026 Charlie Martins",
        icon: "none",
      },
    ],
  });

  CORE_SKILLS.forEach((name, i) => {
    tx.createIfNotExists({ _id: `skill-core-${i}`, _type: "skill", name, core: true, order: i });
  });
  OTHER_SKILLS.forEach((name, i) => {
    tx.createIfNotExists({ _id: `skill-other-${i}`, _type: "skill", name, core: false, order: i });
  });

  CLIENT_PROJECTS.forEach((p, i) => {
    tx.createIfNotExists({
      _id: `project-client-${i}`,
      _type: "project",
      name: p.name,
      description: p.description,
      group: "client",
      tags: p.tags,
      order: i,
    });
  });
  INDEPENDENT_PROJECTS.forEach((p, i) => {
    tx.createIfNotExists({
      _id: `project-independent-${i}`,
      _type: "project",
      name: p.name,
      description: p.description,
      group: "independent",
      links: p.links.map((l) => ({ ...l, _type: "object", _key: l.type })),
      order: i,
    });
  });

  const result = await tx.commit();
  console.log(`Seeded ${result.results.length} documents.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
