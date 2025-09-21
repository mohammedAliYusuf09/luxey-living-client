// components/BlogGrid.tsx

import Image, { StaticImageData } from 'next/image';
import BlogImage from '@/public/assats/blog-image.png'
import Link from 'next/link';

// Define a TypeScript interface for the blog post data.
// This ensures type safety for your data.
interface BlogPost {
  id: number;
  title: string;
  imageUrl: StaticImageData;
  date: string;
}

// Dummy data to demonstrate the layout.
// In a real application, you would fetch this from an API or a CMS.
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Things to Know Before Buying Your First Home',
    imageUrl: BlogImage, // Using a placeholder image for demonstration
    date: '3 days ago',
  },
  {
    id: 2,
    title: '5 Things to Know Before Buying Your First Home',
    imageUrl: BlogImage,
    date: '3 days ago',
  },
  {
    id: 3,
    title: '5 Things to Know Before Buying Your First Home',
    imageUrl: BlogImage,
    date: '3 days ago',
  },
  {
    id: 4,
    title: '5 Things to Know Before Buying Your First Home',
    imageUrl: BlogImage,
    date: '3 days ago',
  },
  {
    id: 5,
    title: '5 Things to Know Before Buying Your First Home',
    imageUrl: BlogImage,
    date: '3 days ago',
  },
  {
    id: 6,
    title: '5 Things to Know Before Buying Your First Home',
    imageUrl: BlogImage,
    date: '3 days ago',
  },
];

const BlogGrid = () => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blogs/${post.id}`}
              key={post.id}
              className="bg-[#14171C] p-1 sm:p-2 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 border border-[#194133]"
            >
              <div className="relative w-full h-48 sm:h-64 md:h-52 lg:h-48 xl:h-56">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="text-white mt-2">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Posted: {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
  );
};

export default BlogGrid;