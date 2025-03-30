"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  const educationData = [
    {
      school: "Tiểu học Nguyễn Du",
      time: "2006 - 2011",
      degree: "Cấp 1",
      image: "/images/tieuhoc.jpg",
    },
    {
      school: "THCS Nguyễn Du",
      time: "2012 - 2016",
      degree: "Cấp 2",
      image: "/images/trunghoc.jpg",
    },
    {
      school: "THPT Lê Hồng Phong",
      time: "2017 - 2019",
      degree: "A8 Family",
      image: "/images/thpt.jpg",
    },
    {
      school: "Đại học Thăng Long",
      time: "2020 - 2024",
      degree: "Cử nhân Khoa học Máy tính",
      image: "/images/TLU.jpg",
    },
  ];

  return (
    <section id="education" className="py-20 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-blue-900 opacity-30"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-20 relative z-10">
        <motion.div
          className="w-full md:w-1/2 pl-8 md:pl-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl font-bold text-blue-400">Học vấn</h2>
          <div className="mt-6 space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-400 shadow-xl flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex flex-col w-2/3">
                  <h3 className="text-2xl font-semibold text-blue-400">{edu.school}</h3>
                  <p className="text-lg text-gray-400">{edu.time}</p>
                  <p className="mt-2 text-gray-300 text-xl">{edu.degree}</p>

                  <p className="mt-4 text-gray-500 text-sm italic">
                    Đây là nơi tôi bắt đầu hành trình học tập và phát triển.
                  </p>
                </div>

                <div className="relative w-[150px] h-[100px] ml-6">
                <Image
                  src={edu.image}
                  alt={`Hình ảnh của trường ${edu.school}`}
                  width={500} 
                  height={300} 
                  className="rounded-lg border-4 border-blue-400 shadow-lg"
                  style={{ objectFit: "cover" }}
                />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-[400px] h-[500px]">
          <Image
            src="/images/education.jpg"
            alt="Học vấn"
            width={400}
            height={500}
            className="rounded-lg border-4 border-blue-400 shadow-xl"
            style={{ objectFit: "cover" }} 
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
