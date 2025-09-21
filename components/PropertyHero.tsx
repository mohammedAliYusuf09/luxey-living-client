import Image from 'next/image'
import ProImage from '@/public/assats/propertyshero.jpg'

function PropertyHero() {
  return (
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src={ProImage} // You'll need to add an image at public/images/hero-bg.jpg
          alt="Modern House"
          layout="fill"
          objectFit="cover"
          className="brightness-[.4]" // Darken the image
        />
        <div className="relative z-[1] text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Discover What&apos;s on <br /> the Market
          </h1>
        </div>
      </section>
  )
}

export default PropertyHero