import { Montserrat, Oswald } from 'next/font/google';
import React from 'react'

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

function Consultation() {
  return (
    <div className='bg-grid-white py-14 text-gray-900 flex flex-col items-center'>
        <h2 className={`${oswald.className} text-center font-blold text-4xl mb-6`}>Trusted by Homebyers and Sellers</h2>
        <p className={`font-medium ${montserrat.className} font-normal max-w-[500px] text-center`}>Let’s talk about your goals, your budget, and your dream location. No pressure — just honest guidance and local expertise.</p>
        <input type="text" placeholder="Enter your email" className="bg-[#14171C] border border-[#10B981] text-[#10B981] px-4 py-2 text-xl lg:text-2xl xl:text-3xl font-light mt-6 rounded-md w-full md:w-[50%]"/>
        <button className={`bg-[#14171C] hover:bg-[#2c2c35] text-2xl text-white px-4 py-2 rounded-sm font-semibold cursor-pointer mt-6 ${oswald.className}`}>
           FREE CONSTULTATION
        </button>
    </div>
  )
}

export default Consultation