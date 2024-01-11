"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

const header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none sm:border border-b  border-white border-opacity-10 bg-black/20 backdrop-blur-sm sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full   "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className=" flex fixed top-[.15rem] max-sm:w-full  left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0  ">
        <ul className="h-full flex max-sm:w-full   flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5   ">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4   flex items-center justify-center"
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
              }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-400 transition  "
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default header;
