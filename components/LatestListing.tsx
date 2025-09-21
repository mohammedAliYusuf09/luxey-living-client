import { Montserrat, Oswald } from "next/font/google";
import { Carousel } from "./Carousel";

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
    <div className="py-14 bg-[#14171C]">
        <div className="responsive-container">
            <div className="flex flex-col items-center gap-4">
                <h1 className={`${oswald.className} font-semibold text-4xl text-white`}>Latest Listings</h1>
                <p className={`font-medium text-white ${montserrat.className} font-normal max-w-[500px] text-center`}>Discover the monst resent house on the mercet - updated in real time for serious buyers like you</p>
            </div>
            <Carousel />
        </div>
    </div>
  )
}

export default LatestListing