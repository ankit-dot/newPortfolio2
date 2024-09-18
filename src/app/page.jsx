"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Component() {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 gap-8">
        {/* IMAGE CONTAINER */}
        <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto lg:h-[calc(100vh-8rem)] relative">
          <Image src="/hero.png" alt="Hero image" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Full Stack Developer: Bridging Frontend and Backend Solutions
          </h1>
          {/* DESC */}
          <p className="text-base sm:text-lg md:text-xl">
            Full Stack Developer skilled in building and integrating frontend
            and backend systems for seamless, scalable, and high-performance web
            applications.
          </p>
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white text-center"
              href="https://drive.google.com/file/d/1XpDC8KmAcsuVhXszKE_lPkIIeVcibAZr/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
            <Link className="p-4 rounded-lg ring-1 ring-black text-center" href="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}