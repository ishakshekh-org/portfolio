"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        delay: 0.15,
      }}
      className="bg-slate-800 my-24 h-16 w-1 rounded-full hidden sm:block "
    >
      {" "}
    </motion.div>
  );
};

export default SectionDivider;
