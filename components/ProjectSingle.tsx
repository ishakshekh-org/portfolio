"use client";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const ProjectSingle = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.10 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className=" bg-slate-950 group hover:bg-slate-950/60 transition max-w-[42rem] max-sm:min-w-[15rem] border border-white/15 overflow-hidden sm:pr-8 relative sm:h-[20rem] h-[17rem]  mb-3 sm:mb-8 last:mb-0 max-sm:z-10 max-sm:text-center rounded-xl "
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full  ">
        <Link href={projectUrl} target="_blank">
          <h3 className="text-2xl font-semibold underline-offset-1 underline hover:text-gray-400 relative w-fit  ">
            {" "}
            {title}
            <span className="absolute top-1 w-10 h-10">
              <Image
                src={"/arrowUp.svg"}
                alt="arrow-up"
                width={20}
                height={20}
              />
            </span>
          </h3>
        </Link>
        <p className="mt-2 leading-relaxed text-gray-500">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto  ">
          {tags.map((tag, index) => (
            <li
              className="bg-white/10 backdrop-blur-md px-3 py-1 text-[.7rem] uppercase tracking-wider rounded-full border border-white/25 hover:bg-black/20  "
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Link href={projectUrl} target="_blank">
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute max-sm:left-1/2 max-sm:-bottom-10 max-sm:-translate-x-1/2  max-sm:max-w-[15rem]  bottom-8 max-sm:-z-10 -right-44 w-[28.25rem] rounded-xl shadow-gray-700 shadow-lg max-sm:scale-110 opacity-65 
          sm:group-hover:-translate-x-3 
          sm:group-hover:translate-y-3 
          sm:group-hover:-rotate-2 
          max-sm:group-hover:bottom-0 
          group-hover:scale-110
          transition-all  
          "
        />
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
