import Image from "next/image"
import BlogImage from '@/public/assats/blog-image.png'

function BlogDetailes() {
  return (
    <section className="responsive-container my-14">
          {/* Featured Image */}
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={BlogImage} // Add your image to public/images/
              alt="Modern 3-Bedroom Family Home"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Modern 3-Bedroom Family Home in Austin, Texas
          </h1>

          {/* Details & Description */}
          <div className="text-gray-300 text-lg leading-relaxed">
            <p className="mb-6">
              This luxurious 3-bedroom apartment is located in the heart of Gulshan 2, one of Dhakas most sought-after neighborhoods. With 1,800 sq. ft. of thoughtfully designed space, this home features an open-plan living and dining area with natural light flooding in through large floor-to-ceiling windows.
            </p>
            <p className="mb-6">
              The modern kitchen includes granite countertops, built-in cabinets, and energy-efficient appliances. All three bedrooms are spacious, with the master bedroom offering a private ensuite bathroom. The apartment also includes a large balcony with panoramic views, high-end fixtures, smart lighting, and hardwood flooring throughout.
            </p>
            <p>
              The building is secure, family-friendly, and professionally maintained — offering elevator access, backup power, and 24/7 security. Just minutes from international schools, embassies, parks, and popular dining spots.
            </p>
          </div>
    </section>
  )
}

export default BlogDetailes