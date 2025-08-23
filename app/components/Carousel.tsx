"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProgressBar } from "./ProgressBar";
import { Property } from "../lib/types";
import cur1 from "@/public/assats/cur1.png";
import cur2 from "@/public/assats/cur2.jpg";
import cur3 from "@/public/assats/cur3.jpg";
import Link from "next/link";

// The data for your properties. In a real app, this would likely come from an API.
const properties: Property[] = [
  {
    id: 1,
    title: "Modern 3-Bedroom Family Home",
    price: 450000,
    beds: 3,
    sqFt: 1800,
    type: "Apartment",
    parking: 1,
    yearBuilt: 2018,
    imageUrl: cur1,
  },
  {
    id: 2,
    title: "Cozy 2-Bedroom Cottage",
    price: 320000,
    beds: 2,
    sqFt: 1200,
    type: "House",
    parking: 1,
    yearBuilt: 2015,
    imageUrl: cur2,
  },
  {
    id: 3,
    title: "Luxury Condo in the City",
    price: 680000,
    beds: 4,
    sqFt: 2500,
    type: "Condo",
    parking: 2,
    yearBuilt: 2020,
    imageUrl: cur3,
  },
];


const cardWidthPercentage = 80;
const sideCardPercentage = 10;
const horizontalShiftPercentage = 100 - sideCardPercentage;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? `${horizontalShiftPercentage}%` : `-${horizontalShiftPercentage}%`,
    opacity: 0.2,
    scale: 0.9,
  }),
  center: {
    x: "0%",
    opacity: 1,
    scale: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? `${horizontalShiftPercentage}%` : `-${horizontalShiftPercentage}%`,
    opacity: 0.2,
    scale: 0.9,
    zIndex: 0,
  }),
};

export const Carousel = () => {
  const [activePropertyIndex, setActivePropertyIndex] = useState(0);

  const paginate = (newDirection: number) => {
    const nextIndex = activePropertyIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < properties.length) {
      setActivePropertyIndex(nextIndex);
    }
  };

  const progress = (activePropertyIndex + 1) / properties.length;
  const isLeftDisabled = activePropertyIndex === 0;
  const isRightDisabled = activePropertyIndex === properties.length - 1;

  return (
    <div className="flex flex-col items-center text-white min-h-screen font-sans">
      <div className="relative w-[100%] max-w-4xl h-[600px] flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className={`absolute w-[${cardWidthPercentage}%] h-auto md:h-[500px] flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg`}
              variants={variants}
              initial={{ opacity: 0, x: `${horizontalShiftPercentage}%` }}
              animate={
                activePropertyIndex === index
                  ? "center"
                  : index < activePropertyIndex
                  ? {
                      x: `-${horizontalShiftPercentage}%`,
                      scale: 0.9,
                      opacity: 0.2,
                    }
                  : {
                      x: `${horizontalShiftPercentage}%`,
                      scale: 0.9,
                      opacity: 0.2,
                    }
              }
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              style={{
                left: `calc(50% - (${cardWidthPercentage}% / 2))`,
              }}
            >
              <div className="w-full h-auto md:h-1/2">
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-t-lg"
                />
              </div>
              <div className="p-6 flex flex-col justify-center h-auto md:h-1/2">
                <h2 className="text-xl font-bold mb-2">{property.title}</h2>
                <p className="text-2xl font-light text-teal-400 mb-4">
                  ${property.price.toLocaleString()}
                </p>
                <div className="text-sm space-y-1">
                  <p>
                    <strong>{property.beds}</strong> Beds |{" "}
                    <strong>{property.sqFt.toLocaleString()}</strong> SQ FT |{" "}
                    <strong>{property.type}</strong>
                  </p>
                  <p>
                    <strong>{property.parking}</strong> Car Parking | Built:{" "}
                    <strong>{property.yearBuilt}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center space-x-4 w-full max-w-4xl">
        <button
          className={`p-2 rounded-full border border-gray-600 text-gray-400 transition-colors duration-200 ${
            isLeftDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-700"
          }`}
          onClick={() => paginate(-1)}
          disabled={isLeftDisabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex-grow">
          <ProgressBar progress={progress} />
        </div>
        <button
          className={`p-2 rounded-full border border-gray-600 text-gray-400 transition-colors duration-200 ${
            isRightDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-700"
          }`}
          onClick={() => paginate(1)}
          disabled={isRightDisabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <Link href={"/properties"}  className="bg-gray-200 hover:bg-white text-black px-2 py-1 rounded-sm font-semibold cursor-pointer mt-6">
        EXPLORE MORE
      </Link>
    </div>
  );
};