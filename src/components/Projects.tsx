"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "🎬 Hệ thống Quản lý Vé Xem Phim",
    description: "Ứ dụng giúp người dùng đặt vé xem phim, xem thông tin phim và lịch chiếu một cách nhanh chóng.",
    team: "3 người",
    specs: "Android Studio, Laravel, SQL Server, Firebase",
    details: "Ứng dụng hỗ trợ quản lý vé, cho phép người dùng xem lịch chiếu, lựa chọn ghế và thanh toán vé trực tuyến.",
    image: "/images/film.jpg"
  },
  {
    title: "👟 Quản lý Bán Sneaker",
    description: "Phần mềm quản lý bán hàng, theo dõi thông tin khách hàng và đơn hàng.",
    team: "1 người",
    specs: "React.js, Laravel, MySQL, Firebase",
    details: "Ứng dụng giúp quản lý thông tin khách hàng, đơn hàng, và phân tích dữ liệu bán hàng để tối ưu chiến lược kinh doanh.",
    image: "/images/sneakerbuzz.jpg"
  },
  {
    title: "🛒 Quản lý Bán Hàng Zalo Mini App",
    description: "Ứng dụng mini trên Zalo giúp quản lý bán hàng, đơn hàng và khách hàng.",
    team: "3 người",
    specs: "React.js, Laravel, Zalo API, SQL Server",
    details: "Quản lý bán hàng qua Zalo, theo dõi đơn hàng, giao dịch và khách hàng trực tiếp trong ứng dụng.",
    image: "/images/zalo-mini-app.jpg"
  },
  {
    title: "💳 Quản lý Bán Hàng Máy POS",
    description: "Hệ thống quản lý bán hàng tích hợp với máy POS để theo dõi doanh thu và đơn hàng.",
    team: "3 người",
    specs: "Laravel, MySQL, POS Integration",
    details: "Quản lý bán hàng qua máy POS, theo dõi đơn hàng và doanh thu theo thời gian thực.",
    image: "/images/pos.jpg"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-10 px-8 md:px-20">
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl font-bold text-blue-400">Dự án & Kinh nghiệm</h2>
          <p className="mt-4 text-lg text-gray-300">Danh sách các dự án tôi đã tham gia.</p>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`p-6 bg-gray-800 border-l-4 rounded-lg shadow-lg cursor-pointer transition-all hover:bg-gray-700 ${
                selectedProject.title === project.title ? "border-blue-400 shadow-lg shadow-blue-500" : "border-gray-600"
              }`}
              onMouseEnter={() => setSelectedProject(project)}
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-lg text-gray-300 mt-2">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-2xl border-l-4 border-blue-400 flex flex-col items-center justify-center min-h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="w-full h-100 mb-6 overflow-hidden rounded-lg shadow-xl transform transition duration-500 ease-in-out"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           <Image
            src={selectedProject.image} 
            alt={selectedProject.title} 
            width={600} 
            height={400}
            priority 
            className="object-cover rounded-lg transform transition duration-500 hover:scale-110 w-full"
          />
          </motion.div>

          <h3 className="text-3xl font-semibold text-blue-400">{selectedProject.title}</h3>
          <p className="mt-4 text-lg text-gray-300 text-center">{selectedProject.details}</p>
          <p className="mt-4 text-gray-400"><strong>👥 Số người tham gia:</strong> {selectedProject.team}</p>
          <p className="mt-2 text-gray-400"><strong>🛠 Công nghệ:</strong> {selectedProject.specs}</p>
        </motion.div>
      </div>
    </section>
  );
}
