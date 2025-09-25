import { Montserrat } from "next/font/google";
import React from "react";
import * as motion from "motion/react-client";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

function WorkShow() {
  return (
    <section className="py-14 bg-amber-50 overflow-hidden">
      <div
        className={`text-gray-800 responsive-container ${montserrat.className}`}
      >
        <div className="flex justify-around">
          <motion.div
            initial={{ scale: 1.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="work-h3">80+</h3>
            <h5 className="work-h5">Home Sold</h5>
          </motion.div>
          <span className="work-span"></span>
          <motion.div
            initial={{ scale: 1.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="work-h3">100+</h3>
            <h5 className="work-h5">Happy Client</h5>
          </motion.div>
          <span className="work-span"></span>
          <motion.div
            initial={{ scale: 1.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="work-h3">Based</h3>
            <h5 className="work-h5">in austin, TX</h5>
          </motion.div>
        </div>
        <div className="max-w-[360px] sm:max-w-[400px] md:max-w-[600px] flex justify-between mt-6 m-auto">
          <motion.div
            initial={{ scale: 1.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="work-h3">7+</h3>
            <h5 className="work-h5">Years Experince</h5>
          </motion.div>
          <span className="work-span"></span>
          <motion.div
            initial={{ scale: 1.4 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="work-h3">Top</h3>
            <h5 className="work-h5">Reated On Zillow</h5>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WorkShow;
