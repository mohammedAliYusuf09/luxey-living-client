import React from 'react'

function PropertyFilter() {
  return (
      <section className="bg-neutral-800 py-10 md:py-16 -mt-20 relative z-[2] mx-auto max-w-6xl rounded-lg shadow-xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Location"
            className="p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            className="p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Condo</option>
          </select>
          <select
            className="p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Price Range</option>
            <option>$100k - $200k</option>
            <option>$200k - $500k</option>
            <option>$500k - $1M</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <select
            className="p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Bedrooms</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
          <select
            className="p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Bathrooms</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
          <select
            className="p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>
        <button className="w-full bg-green-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors">
          Search
        </button>
      </section>
  )
}

export default PropertyFilter