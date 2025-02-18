// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const BlogPost = ({ params }) => {
//   const { slug } = params;
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/api/blogs/${slug}`);
//         if (!response.ok) throw new Error("Blog not found");
//         const data = await response.json();
//         setBlog(data);
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//         router.push("/404");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [slug, router]);

//   if (loading) return <p className="text-center">Loading...</p>;
//   if (!blog) return <p className="text-center">Blog not found</p>;

//   return (
//     <div className="max-w-3xl mx-auto my-10 p-6 shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//       <p className="text-gray-600 mb-2">By {blog.author}</p>
//       <img
//         src={blog.image || "/assets/placeholder.jpg"}
//         alt={blog.title}
//         className="w-full h-64 object-cover rounded-lg mb-6"
//       />
//       <p className="text-lg">{blog.content}</p>
//     </div>
//   );
// };

// export default BlogPost;


"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  console.log("Current Slug:", slug);


  useEffect(() => {
    fetch(`http://localhost:4000/api/blogs/${slug}`) // Fetch blog by slug
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [slug]);

  if (!blog) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm">By {blog.author}</p>
      <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded-lg mt-4" />
      <p className="mt-6 text-lg">{blog.content}</p>
    </div>
  );
}




// import fs from "fs"
// import path from "path"
// import matter from "gray-matter"
// import { notFound } from "next/navigation"
// import { unified } from 'unified'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypeDocument from 'rehype-document'
// import rehypeFormat from 'rehype-format'
// import rehypeStringify from 'rehype-stringify'
// import rehypePrettyCode from "rehype-pretty-code"
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeSlug from 'rehype-slug'
// import { transformerCopyButton } from '@rehype-pretty/transformers'
// import OnThisPage from "@/components/onthispage"
// // import CopyButton from "@/components/CopyButton";

// const markdownProcessor = unified()
//   .use(remarkParse)
//   .use(remarkRehype)
//   .use(rehypeDocument)
//   .use(rehypeFormat)
//   .use(rehypeStringify)
//   .use(rehypeSlug)
//   .use(rehypeAutolinkHeadings)
//   .use(rehypePrettyCode, {
//     theme: "github-dark",
//     transformers: [
//       transformerCopyButton({
//         visibility: 'always',
//         feedbackDuration: 3000,
//       }),
//     ],
//   })

// // Make sure the path matches your actual content directory structure
// const CONTENT_DIR = path.join(process.cwd(), 'app', 'content')

// export async function generateStaticParams() {
//   const files = await fs.promises.readdir(CONTENT_DIR)
  
//   return files
//     .filter(file => file.endsWith('.md'))
//     .map(file => ({
//       slug: file.replace('.md', '')
//     }))
// }

// export async function generateMetadata({ params: { slug } }) {
//   try {
//     const filepath = path.join(CONTENT_DIR, `${slug}.md`)
//     const fileContent = await fs.promises.readFile(filepath, "utf-8")
//     const { data } = matter(fileContent)
    
//     return {
//       title: data.title,
//       description: data.description,
//       authors: [{ name: data.author }],
//       openGraph: {
//         title: data.title,
//         description: data.description,
//         type: 'article',
//         publishedTime: data.date,
//         authors: [data.author],
//       },
//     }
//   } catch (error) {
//     return {
//       title: 'Blog Post',
//       description: 'Article not found',
//     }
//   }
// }

// export default async function BlogPost({ params: { slug } }) {
//     try {
//       const filepath = path.join(CONTENT_DIR, `${slug}.md`)
  
//       // Use async file operations
//       if (!await fs.promises.access(filepath).then(() => true).catch(() => false)) {
//         notFound()
//       }
  
//       const fileContent = await fs.promises.readFile(filepath, "utf-8")
//       const { content, data } = matter(fileContent)
  
//       const htmlContent = await markdownProcessor.process(content)
  
//       return (
//         <article className="ml-6 mr-6 md:ml-[180px] md:mr-[180px] sm:ml-2 sm:mr-2 max-w-6xl mx-auto p-12">
//           {/* Header section with combined styles */}
//           <header className="mb-8">
//             <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
//             <blockquote className="mb-4">
//               <p className="text-base border-l-4 border-gray-500 pl-4 italic">
//                 &quot;{data.description}&quot;
//               </p>
//             </blockquote>
//             <div className="flex gap-2 mb-6">
//               <p className="text-sm text-gray-500 italic">By {data.author}</p>
//               <p className="text-sm text-gray-500">{data.date}</p>
//             </div>
//           </header>
  
//           {/* Main content with improved spacing */}
//           <div 
//             className="prose dark:prose-invert max-w-none mb-8"
//             dangerouslySetInnerHTML={{ __html: String(htmlContent) }}
//           />
  
//           {/* Table of contents */}
//           <nav className="mt-8">
//             <OnThisPage htmlContent={String(htmlContent)} />
//           </nav>
//         </article>
//       )
//     } catch (error) {
//       console.error('Error rendering blog post:', error)
//       notFound()
//     }
// }


// "use client"
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { notFound } from "next/navigation";
// import { unified } from 'unified';
// import remarkParse from 'remark-parse';
// import remarkRehype from 'remark-rehype';
// import rehypeDocument from 'rehype-document';
// import rehypeFormat from 'rehype-format';
// import rehypeStringify from 'rehype-stringify';
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypeSlug from 'rehype-slug';
// import { transformerCopyButton } from '@rehype-pretty/transformers';
// import OnThisPage from "@/components/onthispage";

// const markdownProcessor = unified()
//   .use(remarkParse)
//   .use(remarkRehype)
//   .use(rehypeDocument)
//   .use(rehypeFormat)
//   .use(rehypeStringify)
//   .use(rehypeSlug)
//   .use(rehypeAutolinkHeadings)
//   .use(rehypePrettyCode, {
//     theme: "github-dark",
//     transformers: [
//       transformerCopyButton({
//         visibility: 'always',
//         feedbackDuration: 3000,
//       }),
//     ],
//   });

// const CONTENT_DIR = path.join(process.cwd(), 'app', 'content');

// export async function generateStaticParams() {
//   const files = await fs.promises.readdir(CONTENT_DIR);

//   return files
//     .filter(file => file.endsWith('.md'))
//     .map(file => ({
//       slug: file.replace('.md', '')
//     }));
// }

// export async function generateMetadata({ params: { slug } }) {
//   try {
//     const filepath = path.join(CONTENT_DIR, `${slug}.md`);
//     const fileContent = await fs.promises.readFile(filepath, "utf-8");
//     const { data } = matter(fileContent);

//     return {
//       title: data.title,
//       description: data.description,
//       authors: [{ name: data.author }],
//       openGraph: {
//         title: data.title,
//         description: data.description,
//         type: 'article',
//         publishedTime: data.date,
//         authors: [data.author],
//       },
//     };
//   } catch (error) {
//     return {
//       title: 'Blog Post',
//       description: 'Article not found',
//     };
//   }
// }

// export default async function BlogPost({ params: { slug } }) {
//   try {
//     const filepath = path.join(CONTENT_DIR, `${slug}.md`);

//     if (!await fs.promises.access(filepath).then(() => true).catch(() => false)) {
//       notFound();
//     }

//     const fileContent = await fs.promises.readFile(filepath, "utf-8");
//     const { content, data } = matter(fileContent);

//     const htmlContent = await markdownProcessor.process(content);

//     return (
//       <article className="ml-6 mr-6 md:ml-[180px] md:mr-[180px] sm:ml-2 sm:mr-2 max-w-6xl mx-auto p-12">
//         <header className="mb-8">
//           <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
//           <blockquote className="mb-4">
//             <p className="text-base border-l-4 border-gray-500 pl-4 italic">
//               &quot;{data.description}&quot;
//             </p>
//           </blockquote>
//           <div className="flex gap-2 mb-6">
//             <p className="text-sm text-gray-500 italic">By {data.author}</p>
//             <p className="text-sm text-gray-500">{data.date}</p>
//           </div>
//         </header>

//         <div
//           className="prose dark:prose-invert max-w-none mb-8"
//           dangerouslySetInnerHTML={{ __html: String(htmlContent) }}
//         />

//         <nav className="mt-8">
//           <OnThisPage htmlContent={String(htmlContent)} />
//         </nav>
//       </article>
//     );
//   } catch (error) {
//     console.error('Error rendering blog post:', error);
//     notFound();
//   }
// }
