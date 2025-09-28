"use client";

import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Inter, Montserrat } from "next/font/google";

interface WhyWorkWithMeItem {
  number: number;
  title: string;
  description: string;
}

const whyWorkWithMeData: WhyWorkWithMeItem[] = [
  {
    number: 1,
    title: "Deep Knowledge of the Local Market",
    description:
      "With years of experience in the local real estate landscape, I understand every neighborhood — from school districts and commute routes to upcoming developments. I use that insight to match you with the right property at the right time.",
  },
  {
    number: 2,
    title: "Personalized Client Approach",
    description:
      "Your goals are my priority. I take the time to listen, understand your unique needs, and tailor my strategy to achieve the best outcomes, whether you're buying, selling, or investing.",
  },
  {
    number: 3,
    title: "Expert Negotiation Skills",
    description:
      "Securing the best deal requires a keen eye and strong negotiation tactics. I am a skilled negotiator, dedicated to protecting your interests and maximizing your investment.",
  },
  {
    number: 4,
    title: "Seamless Transaction Management",
    description:
      "From initial consultation to closing, I manage every detail of your real estate transaction. You can expect clear communication, proactive problem-solving, and a stress-free experience.",
  },
];

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export function WhyWorkWithMe() {
  // Corrected typo: setCorrent -> setCurrent
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 1400 && latest < 1600) {
      setCurrent(0);
    } else if (latest >= 1600 && latest < 1900) {
      setCurrent(1);
    } else if (latest >= 1900 && latest < 2200) {
      setCurrent(2);
    } else if (latest >= 2200) {
      setCurrent(3);
    }
  });

  const currentItem = whyWorkWithMeData[current];

  return (
    <section className="relative h-[300vh]">
      <div className="responsive-container sticky top-[30%] md:top-[35%] flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-6 my-20">
        {/* Left Column (Sticky Title & Number) */}
        <div
          className={`w-full md:w-[40%] lg:w-[35%] ${montserrat.className}`}
        >
          {/* Animated Number */}
          <motion.span
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-action bg-transparent border-action border rounded-full py-2 px-5 text-center font-medium"
          >
            {currentItem.number}
          </motion.span>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl  text-white font-bold mt-4 md:mt-6">
            Why Work With Me
          </h1>
        </div>

        {/* Right Column (Scroll-Driven Content) */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className={`w-full md:w-[60%] lg:w-[65%] mt-8 md:mt-0 ${inter.className}`}
        >
          {/* Title */}
          <h4 className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium"}>
            {currentItem.title}
          </h4>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mt-3 md:mt-4 leading-6 md:leading-9 font-light">
            {currentItem.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
