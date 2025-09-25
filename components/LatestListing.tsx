import { Montserrat, Oswald } from "next/font/google";
import { Carousel } from "./Carousel";
import * as motion from "motion/react-client";

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
function LatestListing() {
  return (
    <motion.div 
    initial={{ scaleY: 1.8}}
    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7}}
    whileInView={{ scaleY: 1 }}
    className="py-14 bg-[#14171C]">
        <div className="responsive-container">
            <div className="flex flex-col items-center gap-4">
                <motion.h1 
                initial={{ opacity: 0.1}}
                whileInView={{ opacity: 1}}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4}}
                className={`${oswald.className} font-semibold text-4xl text-white`}>Latest Listings</motion.h1>
                <motion.p 
                initial={{ opacity: 0.1, y: 10}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.5}}
                className={`font-medium text-white ${montserrat.className} font-normal max-w-[500px] text-center`}>Discover the monst resent house on the mercet - updated in real time for serious buyers like you</motion.p>
            </div>
            <Carousel />
        </div>
    </motion.div>
  )
}

export default LatestListing