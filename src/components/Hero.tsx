"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const roles = ["Lập trình viên Web", "Backend Developer", "Frontend Developer"];

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-4 md:px-16 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-blue-900 opacity-30"></div>

      <motion.div
        className="relative w-full md:w-1/2 flex justify-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <div className="relative w-[400px] h-[400px] overflow-hidden rounded-full border-4 border-blue-400 shadow-xl transition hover:scale-105 hover:rotate-2">
          <Image
            src="/images/introduce.jpg"
            alt="Ảnh đại diện"
            width={400}
            height={400}
            quality={100}
            priority
            className="rounded-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 max-w-[600px] text-center md:text-left relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <h1 className="text-6xl font-extrabold uppercase leading-tight">
          NGUYỄN THẾ ANH
        </h1>

        <p className="text-2xl text-blue-400 mt-2 h-8">
          <ReactTyped
            strings={roles}
            typeSpeed={100}
            backSpeed={50} 
            backDelay={1000}
            loop
            showCursor
          />
        </p>

        <p className="mt-4 text-lg text-gray-300">
          Tôi là một lập trình viên trẻ, đam mê phát triển web với{" "}
          <span className="text-white font-semibold">Laravel, VueJS, ReactJS</span>.  
          Tôi luôn tìm cách tối ưu hiệu suất, nâng cao trải nghiệm người dùng  
          và xây dựng các sản phẩm linh hoạt, dễ mở rộng.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition animate-pulse"
          >
            Xem Dự Án
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg shadow-lg hover:bg-blue-400 hover:text-white transition"
          >
            Liên Hệ
          </a>
        </div>

        <div className="mt-6 text-xl text-blue-400 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee whitespace-nowrap text-xl text-blue-400 font-bold">
            <p>Chào mừng bạn đến với trang của tôi! 👋 Xem Dự Án của tôi để biết thêm chi tiết...</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
