import Image from "next/image";
import React from "react";
import JamesCarter from "@/public/assats/james-carter.png";
import { Montserrat, Oswald } from "next/font/google";
import Link from "next/link";
import * as motion from "motion/react-client";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300","400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

function AboutHero() {
  return (
    <motion.div
    initial={{ y: 80 }}
    whileInView={{ y: 0}}
    transition={{ duration: 0.8, ease: "easeOut", delay : 1}}
    >
      <div className="responsive-container py-10">
        <div className="flex flex-col md:flex-row gap-6 text-white items-center  justify-between">
          <div
            className={`flex flex-col gap-6 items-center md:items-start ${montserrat.className} md:w-[50%]`}
          >
            <motion.h4 
             initial={{ opacity: 0.1, y: 10}}
             whileInView={{ opacity: 1, y: 0}}
             transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3}}
            className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-400 text-center md:text-left">MY NAME IS</motion.h4>
            <motion.h2 
            initial={{ opacity: 0.1, y: 10}}
             whileInView={{ opacity: 1, y: 0}}
             transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4}}
            className="text-3xl lg:text-4xl xl:text-5xl font-normal text-center md:text-left">James Carter</motion.h2>
            <motion.p 
            initial={{ opacity: 0.1, y: 10}}
             whileInView={{ opacity: 1, y: 0}}
             transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5}}
            className="bg-[#14171C] px-4 py-2 text-xl lg:text-2xl xl:text-3xl font-light max-w-[500px] text-action
            border border-action text-center md:text-left">
              Your Trusted Real Estate Expert in Austin, TX
            </motion.p>
            <motion.p 
            initial={{ opacity: 0.1, y: 10}}
             whileInView={{ opacity: 1, y: 0}}
             transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5}}
            className={`text-sm font-light leading-6 text-center md:text-left px-10 md:px-0`}>
              Hi, I&rsquo;m James Carter — a licensed real estate agent based in
              Austin, Texas. With over 7 years of experience, I&rsquo;ve helped dozens
              of families and investors find the perfect home. Whether it&rsquo;s your
              first house or your fifth, I&rsquo;m here to guide you every step of the
              way with honesty, clarity, and care.
            </motion.p>

             <div>
              <Link href={"/about"}  className={`bg-gray-200 hover:bg-white text-black text-lg px-4 py-2 rounded-sm font-semibold cursor-pointer mt-6 ${oswald.className}`}>
           MORE ABOUT ME
        </Link>
             </div>
          </div>

          <Image
            className="md:w-[50%]"
            src={JamesCarter}
            alt="hero"
            width={600}
            height={800}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutHero;
