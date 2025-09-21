// components/TestimonialCard.tsx

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  avatar: StaticImageData;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  testimonial,
  avatar,
  isActive,
}) => {
  return (
    <motion.div
      className={`p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out flex-shrink-0 w-80 md:w-96 **h-96** ${
        isActive
          ? "bg-teal-500 text-white transform scale-105"
          : "bg-gray-800 text-gray-300"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start space-x-4 mb-4">
        <Image
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full"
        />
        <span className="text-4xl font-serif text-gray-500">“</span>
      </div>
      <p className="text-lg mb-4 italic">{testimonial}</p>
      <div className="text-right">
        <p className="font-semibold">{name}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
