import RootLayout from "./layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Reviews from "@/components/Review";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Reviews />
      <Contact />
    </RootLayout>
  );
}
