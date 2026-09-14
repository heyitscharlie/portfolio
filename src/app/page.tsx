import { About, Contact, Hero, Nav, Projects, Skills } from "@/components/site";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
