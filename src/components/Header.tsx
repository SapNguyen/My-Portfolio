"use client";
import { useLenis } from "./LenisWrapper";
import { Menu, Github, Linkedin } from "lucide-react";

export default function Header() {
    const { lenis } = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      const element = document.querySelector(target);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <header className="fixed w-full flex justify-between items-center px-6 py-4 bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
      <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
      <nav className="hidden md:flex gap-6 text-gray-300">
      <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-blue-400 transition">
          Giới thiệu
        </a>
        <a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="hover:text-blue-400 transition">
          Dự án
        </a>
        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-blue-400 transition">
          Liên hệ
        </a>
      </nav>
      <div className="flex gap-4">
        <a href="https://github.com/yourgithub" target="_blank" className="hover:text-blue-400">
          <Github className="text-white transition" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="hover:text-blue-400">
          <Linkedin className="text-white transition" />
        </a>
        <Menu className="text-white md:hidden" />
      </div>
    </header>
  );
}
