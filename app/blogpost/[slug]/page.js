import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from "rehype-pretty-code"
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from "@/components/onthispage"
// import CopyButton from "@/components/CopyButton";

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument)
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypePrettyCode, {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3000,
      }),
    ],
  })

// Make sure the path matches your actual content directory structure
const CONTENT_DIR = path.join(process.cwd(), 'app', 'content')

export async function generateStaticParams() {
  const files = await fs.promises.readdir(CONTENT_DIR)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace('.md', '')
    }))
}

export async function generateMetadata({ params: { slug } }) {
  try {
    const filepath = path.join(CONTENT_DIR, `${slug}.md`)
    const fileContent = await fs.promises.readFile(filepath, "utf-8")
    const { data } = matter(fileContent)
    
    return {
      title: data.title,
      description: data.description,
      authors: [{ name: data.author }],
      openGraph: {
        title: data.title,
        description: data.description,
        type: 'article',
        publishedTime: data.date,
        authors: [data.author],
      },
    }
  } catch (error) {
    return {
      title: 'Blog Post',
      description: 'Article not found',
    }
  }
}

export default async function BlogPost({ params: { slug } }) {
    try {
      const filepath = path.join(CONTENT_DIR, `${slug}.md`)
  
      // Use async file operations
      if (!await fs.promises.access(filepath).then(() => true).catch(() => false)) {
        notFound()
      }
  
      const fileContent = await fs.promises.readFile(filepath, "utf-8")
      const { content, data } = matter(fileContent)
  
      const htmlContent = await markdownProcessor.process(content)
  
      return (
        <article className="ml-6 mr-6 md:ml-[180px] md:mr-[180px] sm:ml-2 sm:mr-2 max-w-6xl mx-auto p-12">
          {/* Header section with combined styles */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <blockquote className="mb-4">
              <p className="text-base border-l-4 border-gray-500 pl-4 italic">
                &quot;{data.description}&quot;
              </p>
            </blockquote>
            <div className="flex gap-2 mb-6">
              <p className="text-sm text-gray-500 italic">By {data.author}</p>
              <p className="text-sm text-gray-500">{data.date}</p>
            </div>
          </header>
  
          {/* Main content with improved spacing */}
          <div 
            className="prose dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: String(htmlContent) }}
          />
  
          {/* Table of contents */}
          <nav className="mt-8">
            <OnThisPage htmlContent={String(htmlContent)} />
          </nav>
        </article>
      )
    } catch (error) {
      console.error('Error rendering blog post:', error)
      notFound()
    }
}