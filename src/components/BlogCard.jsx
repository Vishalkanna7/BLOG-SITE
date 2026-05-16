import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { estimateReadingTime, formatDate } from '../utils/blogs'

export default function BlogCard({ blog, featured = false }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={`glass-card group overflow-hidden rounded-2xl ${featured ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr]' : ''}`}
    >
      <Link to={`/blog/${blog.slug}`} className="block overflow-hidden">
        <img
          src={blog.coverImage}
          alt=""
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${featured ? 'h-72 lg:h-full' : 'h-52'}`}
        />
      </Link>
      <div className="flex min-h-full flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {blog.categories?.map((category) => (
            <span
              key={category}
              className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-teal-100 [body.light_&]:text-teal-800"
            >
              {category}
            </span>
          ))}
        </div>
        <Link to={`/blog/${blog.slug}`}>
          <h2 className={`${featured ? 'text-3xl' : 'text-xl'} font-extrabold leading-tight text-white [body.light_&]:text-slate-950`}>
            {blog.title}
          </h2>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-300 [body.light_&]:text-slate-600">{blog.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={15} />
            {formatDate(blog.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} />
            {estimateReadingTime(blog.content)} min read
          </span>
        </div>
        <Link
          to={`/blog/${blog.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-accent"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  )
}
