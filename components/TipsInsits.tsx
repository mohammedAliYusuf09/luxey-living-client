import { Montserrat, Oswald } from 'next/font/google';
import React from 'react'
import BlogGrid from './BlogGrid';

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
            <h1 className={`${oswald.className} font-semibold text-4xl text-white`}>Latest Listings</h1>
            <p className={`font-medium text-white ${montserrat.className} font-normal max-w-[500px]`}>Discover the monst resent house on the mercet - updated in real time for serious buyers like you</p>
        </div>

        <BlogGrid />
    </div>
  )
}

export default TipsInsits