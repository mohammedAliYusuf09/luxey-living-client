import React from 'react'

import { Montserrat, Oswald, Inter } from "next/font/google";
import { Carousel } from "./Carousel";

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

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

function BlogsHeader() {
  return (
    <section className='responsive-container text-white py-14'>
        <h4 className={`${inter.className} text-gray-400`}>NEWS, ADVICE & LOCAL UPDATES</h4>
        <h2 className={`${montserrat.className} text-3xl font-medium mt-2`}>Stay informed with expert insights, buying advice, neighborhood spotlights, and the latest market trends.</h2>
      </section>
  )
}

export default BlogsHeader