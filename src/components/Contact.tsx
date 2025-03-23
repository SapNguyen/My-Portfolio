export default function Contact() {
    return (
      <section id="contact" className="py-20 px-6 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-semibold">Liên hệ với tôi</h2>
        <p className="mt-4 text-gray-300">Hãy để lại tin nhắn của bạn!</p>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Tên của bạn" className="w-full p-3 mb-4 rounded-md bg-gray-700 text-white" />
          <input type="email" placeholder="Email của bạn" className="w-full p-3 mb-4 rounded-md bg-gray-700 text-white" />
          <textarea placeholder="Nội dung tin nhắn" className="w-full p-3 mb-4 rounded-md bg-gray-700 text-white" rows={4}></textarea>
          <button className="bg-blue-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-600">
            Gửi tin nhắn
          </button>
        </form>
      </section>
    );
  }
  