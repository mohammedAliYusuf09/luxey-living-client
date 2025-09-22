import React from 'react'
import ImageGallery from './ImageGallery'
import PropertyStatus from './PropertyStatus'
import PropertyDescription from './PropertyDescription'
import {data} from '@/lib/data';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

function PropertyDetailes() {
  return (
    <section className='responsive-container'>
      <ImageGallery images={data.images}/>
      <h2 className={`text-3xl font-medium  text-white mt-6 ${montserrat.className}`}>{data.title}</h2>
      <p className={`text-lg font-normal mt-2 text-gray-400 ${inter.className}`}>{data.summary}</p>
      <PropertyStatus data={data}/>
      <PropertyDescription description={data.description}/>
    </section>
  )
}

export default PropertyDetailes