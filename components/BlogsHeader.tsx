import React from 'react'
import *as motion from 'motion/react-client';

import { Montserrat, Inter } from "next/font/google";

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



function BlogsHeader() {
  return (
    <section className='responsive-container text-white py-14'>
        <motion.h4 
        initial={{ opacity: 0.5 , y: -20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ ease: "easeInOut", duration: 0.5}}
        className={`${inter.className} text-gray-400 mt-14`}>NEWS, ADVICE & LOCAL UPDATES</motion.h4>
        <motion.h2 
        initial={{ opacity: 0.5 }}
          animate={{ opacity: 1}}
          transition={{ ease: "easeInOut", duration: 0.5}}
        className={`${montserrat.className} text-3xl font-medium mt-2`}>Stay informed with expert insights, buying advice, neighborhood spotlights, and the latest market trends.</motion.h2>
    </section>
  )
}

export default BlogsHeader