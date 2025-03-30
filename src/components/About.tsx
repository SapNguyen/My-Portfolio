"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-20">
        <motion.div
          className="w-full md:w-1/2 pl-8 md:pl-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4 transform transition-transform duration-300 hover:scale-105">
            Về tôi
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Xin chào! Tôi là <span className="text-white font-semibold">Nguyễn Thế Anh</span>, một lập trình viên với niềm đam mê công nghệ.
          </p>
          <div className="mt-6 space-y-2 text-gray-400">
            <p>📅 <strong>Tuổi:</strong> 22</p>
            <p>📍 <strong>Địa chỉ:</strong> Hà Nội, Việt Nam</p>
            <p>♌ <strong>Cung hoàng đạo:</strong> Bảo Bình</p>
            <p>🎨 <strong>Sở thích:</strong> Code, du lịch, chơi game, xem phim, nghe nhạc</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Kỹ năng</h3>
            <div className="flex flex-wrap gap-6 mt-3">
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-2 rounded-full text-sm font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105">
                Next.js
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-2 rounded-full text-sm font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105">
                Laravel
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-2 rounded-full text-sm font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105">
                SQL Server
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-2 rounded-full text-sm font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105">
                React.js
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-2 rounded-full text-sm font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105">
                Vue.js
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-2 rounded-full text-sm font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105">
                Tailwind CSS
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-end mt-12 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-[400px] h-[500px] rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
          <Image
            src="/images/about.jpg"
            alt="Ảnh giới thiệu"
            width={400}
            height={500}
            priority
            className="rounded-xl border-4 border-blue-400 shadow-xl transition-transform duration-500 transform hover:rotate-6 hover:scale-105"
            style={{ objectFit: "cover" }}
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
