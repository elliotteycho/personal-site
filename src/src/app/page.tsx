import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="snap-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
