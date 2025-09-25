// components/TestimonialCarousel.tsx

'use client';

import React, { useRef, useState } from 'react';
import avater1 from '@/public/assats/tst-avt1.png'
import avater2 from '@/public/assats/tst-avt2.png'
import avater3 from '@/public/assats/tst-avt3.png'
import avater4 from '@/public/assats/tst-avt-4.png'
import TestimonialCard from './TestimonialCard';
import { Oswald } from 'next/font/google';
import { motion , useMotionValue} from "motion/react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

const testimonials = [
  {
    name: "Charlotte Evans",
    testimonial: "I've worked with other agents before, but no one was as responsive, professional, and honest as James. He sold my flat in less than 10 days - above asking price.",
    avatar: avater1
  },
  {
    name: "Emma & Daniel Walker",
    testimonial: "James made buying our first home feel so simple. He explained every step, answered all our questions, and found us the perfect home within our budget. Couldn't have asked for a better agent.",
    avatar: avater2
  },
  {
    name: "Michael Grant",
    testimonial: "As an investor, I value speed and clarity. James understood my needs, showed me high-potential listings fast, and helped me close a great deal without stress.",
    avatar: avater3
  },
  {
    name: "Sophie Mitchell",
    testimonial: "From our first call to getting the keys, James was professional, patient, and genuinely helpful. We love our new home and recommend him to anyone looking to buy.",
    avatar: avater4
  },
];

const TestimonialCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [activeCard, setActiveCard] = useState<number>(0);

  const dragEnd = () => {
    if (containerRef.current) {
      const cardWidth = 320; 
      const currentX = x.get(); 

      const newIndex = Math.round(currentX / -cardWidth);
      const finalIndex = Math.max(0, Math.min(newIndex, testimonials.length - 1));
      
      setActiveCard(finalIndex);
      x.set(-finalIndex * cardWidth);
    }
  };

 return (
    <motion.div 
    initial={{ scaleY: 1.8}}
    transition={{ duration: 0.5, ease: "easeIn", delay: 0.8}}
    whileInView={{ scaleY: 1}}
    className="bg-[#14171C] py-16 px-4">
      <h2 className={`${oswald.className} text-center font-blold text-4xl text-white mb-12`}>Trusted by Homebyers and Sellers</h2>
      <div className="overflow-hidden scrollbar-hide">
        <motion.div
          ref={containerRef}
          drag="x"
          onDragEnd={dragEnd}
          style={{ x }}
          className="flex space-x-8 cursor-grab active:cursor-grabbing"
          // Adding dragConstraints here to prevent dragging too far
          dragConstraints={{
            left: -(testimonials.length - 1) * 320, // (number of cards - 1) * card width
            right: 0,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0">
              <TestimonialCard
                {...testimonial}
                isActive={index === activeCard}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialCarousel;