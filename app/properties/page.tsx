import PropertyFilter from "@/components/PropertyFilter"
import PropertyHero from "@/components/PropertyHero"
import PropertyListings from "@/components/PropertyListings"


function properties() {
  return (
    <>
      <PropertyHero />
      <div className="responsive-container">
        <PropertyFilter />
        <PropertyListings/>
      </div>
    </>
  )
}

export default properties