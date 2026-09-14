import { About, Contact, Hero, Nav, Projects, Skills, Work } from "@/components/site";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
