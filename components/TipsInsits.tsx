import { Montserrat, Oswald } from 'next/font/google';
import React from 'react'
import BlogGrid from './BlogGrid';
import *as motion from "motion/react-client";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

function TipsInsits() {
  return (
    <div className='responsive-container py-14'>
        <div className="flex flex-col items-start gap-4 mb-6">
            <motion.h1 
            initial={{ opacity: 0.1}}
            whileInView={{ opacity: 1}}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3}}
            className={`${oswald.className} font-semibold text-4xl text-white`}>Latest Listings</motion.h1>
            <motion.p 
            initial={{ opacity: 0.1, y: 10}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4}}
            className={`font-medium text-white ${montserrat.className} font-normal max-w-[500px]`}>Discover the monst resent house on the mercet - updated in real time for serious buyers like you</motion.p>
        </div>

        <BlogGrid />
    </div>
  )
}

export default TipsInsits