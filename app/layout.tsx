import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishak | Personal Portfolio",
  description: "Aspiring Full stack Developer based In India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={
          inter.className +
          "  bg-slate-950 text-white pt-28 sm:pt36 !scroll-smooth  "
        }
      >
        <div className="w-36 h-36 bg-[#d6f f30] fixed blur-[180px]   top-1/3  left-1/3  max-md:left-40">
          {" "}
        </div>
        <div className="w-36 h-36 bg-cyan-400 fixed blur-[180px]   top-16  right-1/4  max-md:right-40">
          {" "}
        </div>
        <div className="w-36 h-36 bg-[#ff43f9] fixed blur-[180px]   top-1/3   right-1/3  max-md:right-52 ">
          {" "}
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
