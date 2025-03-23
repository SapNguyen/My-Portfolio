import RootLayout from "./layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </RootLayout>
  );
}
