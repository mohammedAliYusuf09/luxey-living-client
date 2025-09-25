import { Montserrat, Oswald } from "next/font/google";
import * as motion from "motion/react-client";

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
    <div className="bg-grid-white py-14 text-gray-900 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0.1, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
        className={`${oswald.className} text-center font-blold text-4xl mb-6`}
      >
        Trusted by Homebyers and Sellers
      </motion.h2>
      <motion.p
        initial={{ opacity: 0.1, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
        className={`font-medium ${montserrat.className} font-normal max-w-[500px] text-center`}
      >
        Let’s talk about your goals, your budget, and your dream location. No
        pressure — just honest guidance and local expertise.
      </motion.p>
      <motion.input
        initial={{ opacity: 0.1, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        type="text"
        placeholder="Enter your email"
        className="bg-[#14171C] border border-action text-action px-4 py-2 text-xl lg:text-2xl xl:text-3xl font-light mt-6 rounded-md w-[70%] md:w-[50%]"
      />
      <motion.button
        initial={{ opacity: 0.1, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
        className={`bg-[#14171C] hover:bg-[#2c2c35] text-2xl text-white px-4 py-2 rounded-sm font-semibold cursor-pointer mt-6  ${oswald.className}`}
      >
        FREE CONSTULTATION
      </motion.button>
    </div>
  );
}

export default Consultation;
