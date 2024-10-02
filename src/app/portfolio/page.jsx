"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Quicklend",
    desc: "For Quicklend, a finance startup, I developed their entire frontend using Next.js, Tailwind CSS, and Shadcn. The project featured a responsive, high-performance website with modern design elements, optimized for both speed and user experience, aligning with Quicklend’s innovative approach in the financial sector.",
    img: "/quicklend.png",
    link: "https://www.quicklend.in/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Youtube extension",
    desc: "I developed a YouTube extension that displays the likes-to-views ratio when users hover over a video card. This feature helps users quickly assess a video's popularity and quality, aiding them in deciding whether to watch or skip the video, ultimately enhancing their browsing experience on YouTube.",
    img: "/youtube-extension.png",
    link: "/portfolio",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Loan-Form Workflow",
    desc: "a loan approval workflow I built at GirmanTech! Users fill a Zod-validated form, which passes through BM, RM, and Senior RM review stages. Notifications are sent at each stage, and the BM can assign someone to sign the contract once fully approved.",
    img: "/workflow-demo.png",
    link: "https://workflow-demo-girman.vercel.app/",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "GirmanTech Website",
    desc: "I developed the website for Girman Tech, creating a modern, user-friendly online presence for the company. Utilizing advanced technologies and design principles, I built a responsive site that effectively showcases Girman Tech’s services and expertise, enhancing its digital footprint and engaging visitors with a seamless browsing experience.",
    img: "/girman-website.png",
    link: "https://www.girmantech.com/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} passHref>
  <button
    className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded"
    onClick={(e) => {
      e.preventDefault(); // Prevent default link behavior
      window.open(item.link, '_blank', 'noopener,noreferrer'); // Open in a new tab
    }}
  >
    See Demo
  </button>
</Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
