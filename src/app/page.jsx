"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold ">
            Full Stack Developer: Bridging Frontend and Backend Solutions
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Full Stack Developer skilled in building and integrating frontend
            and backend systems for seamless, scalable, and high-performance web
            applications.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
              href="https://drive.google.com/file/d/1XpDC8KmAcsuVhXszKE_lPkIIeVcibAZr/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
            <Link className="p-4 rounded-lg ring-1 ring-black" href = "/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
