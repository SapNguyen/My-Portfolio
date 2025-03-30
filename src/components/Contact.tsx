import { Facebook, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-900 text-white text-center relative overflow-hidden"
    >
      <h2 className="text-5xl font-extrabold bg-clip-text text-blue-400 mb-8 transform transition duration-500 hover:scale-110 hover:text-gray-100">
        Liên hệ với tôi
      </h2>
      
      <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto opacity-0 animate-fadeIn animate-duration-1000">
        Hãy kết nối với tôi qua các nền tảng sau để trao đổi và hợp tác!
      </p>

      <div className="flex justify-center gap-8 mt-12">
        <a
          href="https://www.facebook.com/nguyen.the.anh.640526"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-lg text-white font-semibold hover:bg-blue-700 transition transform hover:scale-110 shadow-xl hover:shadow-2xl duration-300"
        >
          <Facebook className="w-6 h-6" />
          Facebook
        </a>
        <a
          href="mailto:ntheanh2801@gmail.com"
          className="flex items-center gap-3 bg-red-500 px-8 py-4 rounded-lg text-white font-semibold hover:bg-red-600 transition transform hover:scale-110 shadow-xl hover:shadow-2xl duration-300"
        >
          <Mail className="w-6 h-6" />
          Email
        </a>
      </div>

      <div className="mt-12 bg-gray-800 px-8 py-6 rounded-lg shadow-2xl inline-block max-w-3xl mx-auto relative overflow-hidden">
        <p className="text-lg text-gray-300 italic relative z-10">
          &rdquo;Cảm ơn bạn đã dành thời gian ghé thăm portfolio của tôi.  
          Rất mong có cơ hội hợp tác và phát triển cùng bạn!&rdquo;
        </p>
        <p className="mt-4 text-lg font-semibold text-blue-400 relative z-10">- Nguyễn Thế Anh</p>
      </div>
    </section>
  );
}
