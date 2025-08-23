"use client";

import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Montserrat } from "next/font/google";
import WrapButton from "@/components/ui/wrap-button";
import { Globe } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuVariants: Variants = {
    initial: {
      y: "-100vh", // Start off-screen at the top
    },
    animate: {
      y: 0, // Move to the top of the screen
      transition: {
        type: "tween", // Use a simple tween for a smooth effect
        ease: "easeOut",
        duration: 0.5,
      },
    },
    exit: {
      y: "-100vh", // Exit by moving back up off-screen
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.3,
      },
    },
  };

  return (
    <div className="md:hidden">
      <span
        className="text-3xl text-[#10B981]"
        onClick={() => setIsMenuOpen(true)}
      >
        <FiMenu />
      </span>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 h-screen w-screen bg-[#14171C] z-40 flex flex-col items-center justify-center overflow-hidden"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Menu close button */}
            <span
              className="absolute top-4 right-4 text-4xl cursor-pointer hover:text-gray-400 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <MdClose />
            </span>

            <WrapButton className="absolute top-4 left-4" href="/properties">
              <Globe className="animate-spin" />
              FIND
            </WrapButton>

            {/* Menu links */}
            <nav className={`${montserrat.className}`}>
              <ul className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="hover:bg-[#262626] p-2 text-2xl font-semibold rounded-md text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">HOME</span>
                </Link>

                <Link
                  href="/properties"
                  className="hover:bg-[#262626] p-2 text-2xl font-semibold rounded-md text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">PROPERTIES</span>
                </Link>
                <Link
                  href="/blogs"
                  className="hover:bg-[#262626] p-2 text-2xl font-semibold rounded-md text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">BLOGS</span>
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-[#262626] p-2 text-2xl font-semibold rounded-md text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">ABOUT</span>
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-[#262626] p-2 text-2xl font-semibold rounded-md text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">CONTACT</span>
                </Link>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
