import BlogDetailes from '@/components/BlogDetailes';
import Consultation from '@/components/Consultation';
import LatestListing from '@/components/LatestListing';
import TestimonialCarousel from '@/components/TestimonialCarousel';

async function details({ params }: { params: { blog: string } }) {
   const { blog } = await params;
  return (
    <>
      <BlogDetailes />
      <LatestListing/>
      <TestimonialCarousel />
      <Consultation/>
    </>
  )
}

export default details