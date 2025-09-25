import *as motion from 'motion/react-client';

function PropertyFilter() {
  return (
      <motion.section 
      initial={{ opacity: 0.5 , y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ ease: "easeInOut", duration: 0.5}}
      className="bg-socendary py-10 md:py-16 -mt-20 relative z-[2] mx-auto max-w-6xl rounded-lg shadow-xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Location"
            className="filter-inputs"
          />
          <select
            className="filter-inputs"
          >
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Condo</option>
          </select>
          <select
            className="filter-inputs"
          >
            <option>Price Range</option>
            <option>$100k - $200k</option>
            <option>$200k - $500k</option>
            <option>$500k - $1M</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <select
            className="filter-inputs"
          >
            <option>Bedrooms</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
          <select
            className="filter-inputs"
          >
            <option>Bathrooms</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
          <select
            className="filter-inputs"
          >
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>
        <button className="w-full bg-action text-white py-3 rounded-md text-lg font-semibold hover:bg-green-800 transition-colors">
          Search
        </button>
      </motion.section>
  )
}

export default PropertyFilter