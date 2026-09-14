import { About, Contact, Hero, Nav, Projects } from "@/components/site";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
