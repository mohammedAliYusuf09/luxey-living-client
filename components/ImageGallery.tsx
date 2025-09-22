'use client'
import { useEffect, useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import Buffer from '@/public/assats/buffer.png'

function ImageGallery({images} : {images : string[]}) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    setSelectedImage(images[0])
  },[images])

  return (
    <div className="bg-[#171717] p-4 rounded-lg mt-6">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-4">
        <Image 
          src={selectedImage ? selectedImage : Buffer}
          alt="Main"
          className="w-full h-full object-cover rounded-lg"
          width={800}
          height={600}
        />
      </div>

      <div className="grid grid-cols-5 gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer overflow-hidden rounded-md border-2 ${
              selectedImage === img ? 'border-white' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(img)}
          >
            {
              img ? <Image
              width={200}
              height={180}
              src={img}
              alt={`Thumb ${index}`}
              className="h-16 sm:h-22 md:h-28 lg:h-32 w-full object-cover hover:scale-105 transition-transform duration-200"
            /> : <motion.div
            className="h-16 sm:h-22 md:h-28 lg:h-32 w-full rounded-md"
            animate={{
              backgroundColor: ["#9CA3AF", "#E5E7EB", "#9CA3AF"], // gray-400 → gray-200 → gray-400
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
            }
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery