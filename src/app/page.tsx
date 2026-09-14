import { Hero, Nav, PlaceholderSections, Skills } from "@/components/site";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Skills />
        <PlaceholderSections />
      </main>
    </div>
  );
}
