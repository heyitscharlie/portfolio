import { getSiteContent } from "../../sanity/lib/queries";
import { About, BackToTop, Contact, Hero, Nav, Projects } from "@/components/site";

// Server Component: fetches all CMS content in one round trip, then
// passes it down as props. Each component also has a hardcoded default
// (see site.tsx) it falls back to if a field comes back empty, so the
// site never renders blank -- e.g. a fresh Sanity dataset, a deleted
// singleton, or the fetch failing outright.
export default async function Home() {
  const content = await getSiteContent();

  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero hero={content.hero ?? undefined} skills={content.skills.length ? content.skills : undefined} />
        <Projects projects={content.projects.length ? content.projects : undefined} />
        <About about={content.about ?? undefined} />
        <Contact contact={content.contact ?? undefined} />
      </main>
      <BackToTop />
    </div>
  );
}
