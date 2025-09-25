import ShareButton from "@/components/ui/share-button";
import { Link } from "lucide-react";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import HeroImage from '@/public/assats/hero-image.jpg'
import LatestListing from "../components/LatestListing";
import AboutHero from "../components/AboutHero";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Consultation from "../components/Consultation";
import TipsInsits from "../components/TipsInsits";
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

export default function Home() {
  return (
    <>
    <div className="responsive-container text-white">
      <div className="flex pt-28">
        <motion.h1 
        initial={{ opacity: 0.5, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ ease: "easeInOut"}}
        className={`text-6xl ${oswald.className} font-bold w-[60%]`}>
          Helping you find more then just a{" "}
          <span 
          className="text-action">house</span>
        </motion.h1>
        <motion.div 
        initial={{ opacity: 0, y: 50}}
        animate={{ opacity: 1, y: 0}}
        transition={{ ease: "easeInOut"}}
        className="w-[40%] mt-20">
          <ShareButton className="text-lg font-medium">
            <Link size={15} />
            SOCIAL
          </ShareButton>
          <p className={`mt-4 ${montserrat.className} font-normal text-lg`}>
            Browse curated listings, connect with top agents, and find your next
            home - all in one place
          </p>
        </motion.div>
      </div>
      <Image 
      className="rounded-2xl w-full h-[600px] my-14" src={HeroImage} alt="hero" width={1000} height={800} />
    </div>
    <LatestListing/>
    <AboutHero/>
    <TestimonialCarousel />
    <Consultation/>
    <TipsInsits/>
    </>
  );
}
