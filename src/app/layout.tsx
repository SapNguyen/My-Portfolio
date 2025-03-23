import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";
import Header from "@/components/Header";

export const metadata = {
  title: "My Portfolio",
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
        </LenisWrapper>
      </body>
    </html>
  );
}
