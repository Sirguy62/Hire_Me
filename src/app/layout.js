import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black w-full text-white">
        <div className="min-h-screen flex justify-center lg:items-center">
          <div className="max-w-7xl min-h-screen w-full flex flex-col lg:flex-row gap-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}