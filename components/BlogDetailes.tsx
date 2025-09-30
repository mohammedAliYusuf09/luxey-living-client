import { dummyhtml } from "@/lib/data"


function BlogDetailes() {
  return (
    <section className="responsive-container pt-24 pb-14">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Modern 3-Bedroom Family Home in Austin, Texas
          </h1>
          <div className="html-content text-gray-300 text-lg leading-7  md:text-xl md:leading-8" dangerouslySetInnerHTML={{ __html: dummyhtml }} />
    </section>
  )
}

export default BlogDetailes