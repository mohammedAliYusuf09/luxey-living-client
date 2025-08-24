import Image from "next/image";
import React from "react";
import JamesCarter from "@/public/assats/james-carter.png";
import { Montserrat, Oswald } from "next/font/google";
import Link from "next/link";

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
    <>
      <div className="responsive-container py-10">
        <div className="flex flex-col md:flex-row gap-6 text-white items-center  justify-between">
          <div
            className={`flex flex-col gap-4 items-center md:items-start ${montserrat.className} md:w-[50%]`}
          >
            <h4 className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-400 text-center md:text-left">MY NAME IS</h4>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-center md:text-left">James Carter</h2>
            <p className="bg-[#14171C] px-4 py-2 text-xl lg:text-2xl xl:text-3xl font-light max-w-[500px] text-[#10B981]
            border border-[#10B981] text-center md:text-left">
              Your Trusted Real Estate Expert in Austin, TX
            </p>
            <p className={`text-sm font-light leading-6 text-center md:text-left px-10 md:px-0`}>
              Hi, I’m James Carter — a licensed real estate agent based in
              Austin, Texas. With over 7 years of experience, I’ve helped dozens
              of families and investors find the perfect home. Whether it’s your
              first house or your fifth, I’m here to guide you every step of the
              way with honesty, clarity, and care.
            </p>

             <div>
              <Link href={"/about"}  className={`bg-gray-200 hover:bg-white text-black px-2 py-1 rounded-sm font-semibold cursor-pointer mt-6 ${oswald.className}`}>
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
    </>
  );
}

export default AboutHero;

//  <div classNameName="mx-30">
//           <div classNameName="w-full flex items-right relative mt-10">

//             <div>

//             </div>
//           </div>

//         </div>
