import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import MarkdownArticle from '../components/MarkdownArticle.jsx'
import PageTransition from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import ShareButtons from '../components/ShareButtons.jsx'
import { estimateReadingTime, formatDate, getBlogBySlug } from '../utils/blogs.js'
import NotFound from './NotFound.jsx'

export default function BlogDetails() {
  const { slug } = useParams()
  const blog = getBlogBySlug(slug)

  if (!blog) return <NotFound />

  return (
    <PageTransition>
      <Seo title={blog.title} description={blog.description} image={blog.coverImage} />
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Link
          to="/#blogs"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-accent/70 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to blogs
        </Link>
        <header className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex flex-wrap justify-center gap-2">
            {blog.categories?.map((category) => (
              <span key={category} className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-bold text-teal-100">
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">{blog.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{blog.description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Calendar size={17} />
              {formatDate(blog.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={17} />
              {estimateReadingTime(blog.content)} min read
            </span>
          </div>
        </header>
        <img
          src={blog.coverImage}
          alt=""
          className="mt-10 h-[22rem] w-full rounded-2xl border border-line object-cover shadow-glow sm:h-[30rem]"
        />
        <div className="mx-auto mt-8 flex max-w-3xl justify-center">
          <ShareButtons title={blog.title} />
        </div>
        <div className="mt-12">
          <MarkdownArticle content={blog.content} />
        </div>
        <div className="mx-auto mt-12 max-w-3xl border-t border-line pt-8">
          <ShareButtons title={blog.title} />
        </div>
      </article>
    </PageTransition>
  )
}
