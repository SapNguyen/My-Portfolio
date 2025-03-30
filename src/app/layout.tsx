import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";
import Header from "@/components/Header";
import { Facebook, Mail } from "lucide-react";

export const metadata = {
  title: "The Anh's Portfolio",
  description: "Portfolio của Nguyen The Anh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900 text-white">
        <LenisWrapper>
          <Header />
          <main>{children}</main>

          <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            <a
              href="https://www.facebook.com/nguyen.the.anh.640526"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <Facebook className="text-white" size={30} />
            </a>
            <a
              href="mailto:ntheanh2801@gmail.com"
              className="bg-red-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <Mail className="text-white" size={30} />
            </a>
          </div>
        </LenisWrapper>
      </body>
    </html>
  );
}
