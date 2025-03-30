"use client";
import { useLenis } from "./LenisWrapper";
import { Menu, Github, Instagram } from "lucide-react";

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
    <header className="fixed w-full flex justify-between items-center px-6 py-4 bg-gray-900/80 backdrop-blur-md z-50 shadow-lg">
      <a
        href="#"
        onClick={(e) => handleScroll(e, "body")}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 cursor-pointer hover:text-gray-100 transition-all duration-500"
      >
        The Anh&rsquo;s Portfolio
      </a>

      <nav className="hidden md:flex gap-8 text-gray-300">
        <a 
          href="#about" 
          onClick={(e) => handleScroll(e, "#about")} 
          className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105 text-xl"
        >
          Giới thiệu
        </a>
        <a 
          href="#education" 
          onClick={(e) => handleScroll(e, "#education")} 
          className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105 text-xl"
        >
          Học vấn
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleScroll(e, "#projects")} 
          className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105 text-xl"
        >
          Dự án
        </a>
        <a 
          href="#reviews" 
          onClick={(e) => handleScroll(e, "#reviews")} 
          className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105 text-xl"
        >
          Đánh giá
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleScroll(e, "#contact")} 
          className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105 text-xl"
        >
          Liên hệ
        </a>
      </nav>

      <div className="flex gap-4">
        <a 
          href="https://github.com/SapNguyen" 
          target="_blank" 
          className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
        >
          <Github className="text-white text-2xl" />
        </a>
        <a 
          href="https://www.instagram.com/_sappp_28a/" 
          target="_blank" 
          className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
        >
          <Instagram className="text-white text-2xl" />
        </a>
        <Menu className="text-white md:hidden cursor-pointer hover:text-blue-400 transition-all duration-300 transform hover:scale-110" />
      </div>
    </header>
  );
}
