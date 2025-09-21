import Image from 'next/image';
import propertyLimage from '@/public/assats/blog-image.png'
import React from 'react'
import Link from 'next/link';

// --- Property Card Component ---
interface PropertyCardProps {
  id: string
  title: string;
  location: string;
  price: string;
  size: string;
}

function PropertyCard({ title, location, price, size, id }: PropertyCardProps) {
  return (
    <Link href={`/properties/${id}`} className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <div className="relative h-48 w-full">
        <Image src={propertyLimage} alt='property image' layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{location}</p>
        <div className="flex justify-between items-center text-gray-300">
          <span className="text-lg font-bold text-green-400">{price}</span>
          <span className="text-sm">{size}</span>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard