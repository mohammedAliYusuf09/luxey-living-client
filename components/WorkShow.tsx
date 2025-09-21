import { Montserrat } from 'next/font/google';
import React from 'react'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

function WorkShow() {
  return (
    <section className='py-14 bg-amber-50 overflow-hidden'>
        <div className={`text-gray-800 responsive-container ${montserrat.className}`}>
            <div className='flex justify-around'>
                <div className='flex flex-col items-center'>
                    <h3 className='work-h3'>80+</h3>
                    <h5 className='work-h5'>Home Sold</h5>
                </div>
                <span className='work-span'></span>
                <div className='flex flex-col items-center'>
                    <h3 className='work-h3'>100+</h3>
                    <h5 className='work-h5'>Happy Client</h5>
                </div>
                <span className='work-span'></span>
                <div className='flex flex-col items-center'>
                    <h3 className='work-h3'>Based</h3>
                    <h5 className='work-h5'>in austin, TX</h5>
                </div>
            </div>
            <div className='max-w-[360px] sm:max-w-[400px] md:max-w-[600px] flex justify-between mt-6 m-auto'>
                <div className='flex flex-col items-center'>
                    <h3 className='work-h3'>7+</h3>
                    <h5 className='work-h5'>Years Experince</h5>
                </div>
                <span className='work-span'></span>
                <div className='flex flex-col items-center'>
                    <h3 className='work-h3'>Top</h3>
                    <h5 className='work-h5'>Reated On Zillow</h5>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkShow