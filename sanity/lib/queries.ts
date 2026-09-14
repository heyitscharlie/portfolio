import { client } from "./client";

export type HeroData = { rotatingWords: string[]; introParagraphs: string[] };
export type SkillData = { name: string; core: boolean };
export type ProjectLink = { type: "github" | "npm"; href: string };
export type ProjectData = {
  name: string;
  description: string;
  group: "client" | "independent";
  tags: string[] | null;
  links: ProjectLink[] | null;
};
export type EducationEntry = { qualification: string; org: string; dates: string };
export type AboutData = { introParagraph: string; education: EducationEntry[]; membershipsText: string };
export type FooterNote = {
  text: string;
  linkText: string | null;
  linkHref: string | null;
  icon: "none" | "instagram" | "github" | "npm" | null;
};
export type ContactData = { blurb: string; footerNotes: FooterNote[] | null };

export type SiteContent = {
  hero: HeroData | null;
  about: AboutData | null;
  contact: ContactData | null;
  skills: SkillData[];
  projects: ProjectData[];
};

// One round trip for the whole page -- singletons fetched by their fixed
// document id (see sanity/structure.ts), skills/projects ordered the
// same way as their Studio "Display order" orderings.
const QUERY = /* groq */ `{
  "hero": *[_id == "hero"][0]{ rotatingWords, introParagraphs },
  "about": *[_id == "about"][0]{ introParagraph, education, membershipsText },
  "contact": *[_id == "contact"][0]{ blurb, footerNotes },
  "skills": *[_type == "skill"] | order(core desc, order asc){ name, core },
  "projects": *[_type == "project"] | order(order asc){ name, description, group, tags, links }
}`;

export async function getSiteContent(): Promise<SiteContent> {
  return client.fetch(QUERY, {}, { next: { revalidate: 60 } });
}
