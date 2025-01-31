import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

// Correctly resolving the content directory path
const contentDir = path.join(process.cwd(), "app", "content");

// Read all markdown files from the content directory
const filenames = fs.readdirSync(contentDir);
const blogs = filenames.map((file) => {
  const filePath = path.join(contentDir, file);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  return {
    ...data,
    slug: file.replace(".md", ""), // Extract slug from filename
  };
});




// const blogs = [
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: '/typescript.webp'
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg'
//   },
//   // Add more blog objects here
// ];

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 * 
 * @returns {JSX.Element} The rendered blog component.
 */

const Blog = () => {
  return (
    <div className="container mx-auto p-4 ml-6 mr-6 md:ml-12 md:mr-12 sm:ml-2 sm:mr-2">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
            {/* Blog Image */}
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            )}

            {/* Blog Content */}
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>

              <div className="text-sm mb-4">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Blog Post Link */}
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
