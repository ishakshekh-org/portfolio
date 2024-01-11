"use client";
import { skillsData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
useInView;

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg ">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="capitalize text-gray-400 hover:text-white transition-all cursor-pointer  hover:scale-105  bg-black/20 hover:bg-black/5  backdrop-blur-md border border-white/20 rounded-md px-3 py-1   "
            initial={{
              opacity: 0,
              y: 30,
            }}
            custom={index}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.05 * index,
              },
            }}
            viewport={{ once: false }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
