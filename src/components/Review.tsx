"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Công ty LND",
    message: "Một thành viên tuyệt vời của công ty, xứng đáng một trong những người đẹp trai nhất công ty!",
    avatar: "/images/LND.jpg",
  },
  {
    name: "Clown Five",
    message: "Một người sáng tạo giúp mọi người thêm nhiều ý tưởng!",
    avatar: "/images/clownfive.jpg",
  },
  {
    name: "Lom Dom FC",
    message: "Làm việc tận tâm, tham gia chăm chỉ.",
    avatar: "/images/Lomdom.jpg",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-20 text-white text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-blue-900 opacity-30 z-0"></div>

      <motion.h2
        className="text-5xl font-bold text-gradient bg-clip-text text-blue-400 mb-10 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Lời Nhắn & Đánh Giá
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 z-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-8 rounded-lg shadow-2xl border-l-4 border-blue-500 flex flex-col items-center text-center transition-all transform hover:scale-105 z-10"
          >
            <div className="w-24 h-24 mb-4">
              <Image
                src={review.avatar}
                alt={review.name}
                width={96}
                height={96}
                className="rounded-full object-cover border-4 border-blue-500 shadow-xl transition-all transform hover:scale-110"
              />
            </div>

            <p className="text-gray-300 italic flex items-center gap-2 text-lg relative">
              <Quote className="text-blue-400 absolute left-0 top-0" size={24} />
              <Quote className="text-blue-400 absolute right-0 top-0" size={24} />
              <span className="pl-10 pr-10">{review.message}</span>
            </p>

            <div className="mt-auto">
              <h4 className="text-lg font-semibold text-white">{review.name}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
