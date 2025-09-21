import React from 'react'
import PropertyCard from './PropertyCard'


function PropertyListings() {
  return (
    <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PropertyCard
            title="Morden Apartment"
            location="New York, NY"
            price="$540,000"
            size="150 sq ft"
          />
          <PropertyCard
            title="Morden Apartment"
            location="New York, NY"
            price="$540,000"
            size="150 sq ft"
          />
          <PropertyCard
            title="Morden Apartment"
            location="New York, NY"
            price="$540,000"
            size="150 sq ft"
          />
          <PropertyCard
            title="Morden Apartment"
            location="New York, NY"
            price="$540,000"
            size="150 sq ft"
          />
          <PropertyCard
            title="Morden Apartment"
            location="New York, NY"
            price="$540,000"
            size="150 sq ft"
          />

          <PropertyCard
            title="Morden Apartment"
            location="New York, NY"
            price="$540,000"
            size="150 sq ft"
          />
        </div>
      </section>
  )
}

export default PropertyListings