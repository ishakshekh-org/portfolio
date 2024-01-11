"use client";
import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitButton";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)] "
      initial={{ opacity: 0, x: 0 }}
      whileInView={{
        opacity: 1,
        x: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
    >
      <SectionHeading>Contact Me !</SectionHeading>
      <p className="text-gray-500">
        Contact me directly at{" "}
        <a href="mailto:shekhishak90@gmail.com" className="underline">
          {" "}
          shekhishak90@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="senderEmail"
          type="email"
          className="h-12 rounded-lg border border-white/20 bg-transparent p-4 "
          placeholder="Your Email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="rounded-lg border border-white/20 bg-transparent p-4 h-52 my-3 "
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
