"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96 "
      id="home"
    >
      {/* image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.3,
            }}
            className="rounded-full w-24 h-24 overflow-hidden flex items-center justify-center border-[.15rem] object-cover  border-slate-900 "
          >
            <Image
              alt="profile"
              src={"/profile.jpg"}
              width={250}
              height={250}
              className="hover:scale-110 transition-all"
              quality={"95"}
              priority={true}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-2xl absolute bottom-0 right-0 "
          >
            👍!
          </motion.h1>
        </div>
      </div>

      {/* paragraph */}
      <motion.h1
        className="capitalize mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, i am Ishak.</span> I am a
        <span className="font-bold"> full-stack developer .</span> A
        <span className="font-bold"> Student</span>. I enjoy building
        <span className="italic"> sites & apps</span>. My focus is
        <span className="underline"> React (Next.js) and tailwind </span>.
      </motion.h1>

      {/* buttons */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-base sm:text-lg font-medium  "
      >
        <Link
          href="#contact"
          className="bg-indigo-800 text-slate-200 outline-none  hover:scale-110 transition-all hover:bg-indigo-900 active:scale-105   px-7 py-3 flex items-center gap-2 rounded-full "
        >
          Contact me here <BsArrowRight />
        </Link>
        {/* <a
          href="/cv.pdf"
          download
          className="bg-slate-900 border-indigo-950 border  outline-none  hover:scale-110 transition-all hover:bg-slate-950 active:scale-105   px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Download CV <HiDownload />
        </a> */}
        <div className="flex gap-2 mt-2 sm:m-0 ">
          <Link
            href="https://www.linkedin.com/in/ishak-shekh-12bb94247/"
            target="_blank"
            rel="noopener"
            className="bg-slate-900 p-4 flex items-center text-[1.3rem]  rounded-full"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://github.com/ishakshekh-org"
            target="_blank"
            rel="noopener"
            className="bg-slate-900 p-4 flex items-center text-[1.3rem]  rounded-full"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
