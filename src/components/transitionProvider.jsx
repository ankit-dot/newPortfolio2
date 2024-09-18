"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="fixed inset-0 bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto inset-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="fixed inset-x-0 bottom-0 bg-black rounded-t-[100px] z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <header className="h-24">
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider


