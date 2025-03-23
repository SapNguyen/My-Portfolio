"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Xin chào, tôi là <span className="text-blue-400">[Tên bạn]</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        Tôi là lập trình viên chuyên về Next.js, Laravel, SQL Server.
      </motion.p>
    </section>
  );
}
