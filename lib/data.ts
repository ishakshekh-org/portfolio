// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import corpcommentImg from "@/public/corpcomment.png";
import reyben from "@/public/reyben-shery.png";
import quotes from "@/public/quotes.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "ReyBen",
    description:
      "A beautful animated page with help of Shery.js. Working Only on Desktop",
    tags: ["CSS", "Shery.js", "Gsap", "Three.js"],
    imageUrl: reyben,
    projectUrl: "https://rey-ben-shery-js.vercel.app/",
  },

  {
    title: "Quotes App",
    description: "An Awsome animated Quote genrator Web page with React.",
    tags: ["React", "Vite", "Tailwind"],
    imageUrl: quotes,
    projectUrl: "https://quotes-react-app-sigma.vercel.app/",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  //   projectUrl: "",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "Shery.js",
  "Git",
  "React",
  "Framer Motion",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express",
  "Python",
  "Java",
  "PHP",
  "Kotlin",
  "ASP.NET",
] as const;
