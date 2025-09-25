import React from 'react'
import * as motion from "motion/react-client";

function contact() {
  return (
     <main className="responsive-container pt-24 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: Get in Touch & Form */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-8">
              Get in <motion.span 
              initial={{ opacity: 0.2}}
              animate={{ opacity: 1}}
              transition={{ ease: "easeInOut", duration:0.8}}
              className="text-action">Touch</motion.span>
            </h1>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full p-4 bg-neutral-800 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-action text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full p-4 bg-neutral-800 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-action text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone number *"
                  className="w-full p-4 bg-neutral-800 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-action text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full p-4 bg-neutral-800 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-action text-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-action text-white py-4 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Right Section: Map */}
          <div className="flex justify-center items-center">
            {/* Placeholder for an embedded map */}
            {/* For a real map, you'd use a library like @react-google-maps/api and your API key */}
            {/* For demonstration, an iframe with a Google Maps embed URL or a static image: */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.25396564619!2d101.69970955!3d3.139003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49e75553e1f5%3A0x29c7823528f1416e!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1678888888888!5m2!1sen!2smy"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-xl"
            ></iframe>
            {/* If you prefer a static image:
            <Image
              src="/images/placeholder-map.png" // You would create this image
              alt="Location Map"
              width={600}
              height={600}
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
            */}
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-20 pt-8 border-t border-neutral-700 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            <p className="font-semibold text-white">PHONE</p>
            <p className="text-gray-400">03 6632 1234</p>
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2m-2 4h2m-2 4h2M14 4h6m-3-3v6M3 10a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
            </svg>
            <p className="font-semibold text-white">FAX</p>
            <p className="text-gray-400">03 6632 1236</p>
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 6V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-1" />
            </svg>
            <p className="font-semibold text-white">EMAIL</p>
            <p className="text-gray-400">info@ljmacc.com.au</p>
          </div>
        </div>
      </main>
  )
}

export default contact