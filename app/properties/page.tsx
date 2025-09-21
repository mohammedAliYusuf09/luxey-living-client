import AboutHero from "@/components/AboutHero"
import Consultation from "@/components/Consultation"
import PropertyFilter from "@/components/PropertyFilter"
import PropertyHero from "@/components/PropertyHero"
import PropertyListings from "@/components/PropertyListings"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import TipsInsits from "@/components/TipsInsits"


function properties() {
  return (
    <>
      <PropertyHero />
      <div className="responsive-container">
        <PropertyFilter />
        <PropertyListings/>
      </div>
      <AboutHero />
      <TestimonialCarousel />
      <Consultation/>
      <TipsInsits/>
    </>
  )
}

export default properties