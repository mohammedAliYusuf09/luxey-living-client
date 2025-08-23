import ShareButton from "@/components/ui/share-button";
import { Link } from "lucide-react";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";

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
    <div className="responsive-container text-white">
      <div className="flex mt-10">
        <h1 className={`text-6xl ${oswald.className} font-bold w-[60%]`}>
          Helping you find more then just a{" "}
          <span className="text-[#10B981]">house</span>
        </h1>
        <div className="w-[40%] mt-5">
          <ShareButton className="text-lg font-medium">
            <Link size={15} />
            SOCIAL
          </ShareButton>
          <p className={`mt-4 ${montserrat.className} font-normal text-lg`}>
            Browse curated listings, connect with top agents, and find your next
            home - all in one place
          </p>
        </div>
      </div>


    </div>
  );
}
