import Consultation from "@/components/Consultation";
import LatestListing from "@/components/LatestListing";
import PropertyDetailes from "@/components/PropertyDetailes";
import TestimonialCarousel from "@/components/TestimonialCarousel";

async function page({ params }: { params: { property: string } }) {
    const { property } = await params;
    console.log(property);
  return (
    <main>
        <PropertyDetailes />
        <LatestListing/>
        <TestimonialCarousel />
        <Consultation/>
    </main>
  )
}

export default page