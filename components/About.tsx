"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After Passing Higher Secondary with{" "}
        <span className="font-medium">Bio Background</span>, I decided to pursue
        my passion for programming. I enrolled in BCA degree for{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        Designing and problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with C , Java and Python. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Free Lancing opportunity </span> as a
        software developer.
      </p>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games and watching movie. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Web Animations </span>.{" "}
      </p>
    </motion.section>
  );
};

export default About;
