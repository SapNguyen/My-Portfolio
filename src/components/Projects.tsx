"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Dự án A", description: "Mô tả dự án...", image: "/project-a.jpg" },
  { title: "Dự án B", description: "Mô tả dự án...", image: "/project-b.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold">Dự án của tôi</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-4 bg-gray-800">
            <Image 
                src={project.image} 
                alt={project.title} 
                width={500} 
                height={160} 
                className="w-full h-40 object-cover rounded-md" 
            />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
