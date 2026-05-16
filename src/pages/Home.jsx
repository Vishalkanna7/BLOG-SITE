import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Code2, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard.jsx'
import PageTransition from '../components/PageTransition.jsx'
import SearchAndFilter from '../components/SearchAndFilter.jsx'
import Seo from '../components/Seo.jsx'
import { getCategories, getSortedBlogs } from '../utils/blogs.js'

export default function Home() {
  const blogs = useMemo(() => getSortedBlogs(), [])
  const categories = useMemo(() => getCategories(), [])
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredBlogs = blogs.filter((blog) => {
    const searchable = `${blog.title} ${blog.description} ${(blog.categories || []).join(' ')}`.toLowerCase()
    const matchesSearch = searchable.includes(query.toLowerCase())
    const matchesCategory = activeCategory === 'All' || blog.categories?.includes(activeCategory)
    return matchesSearch && matchesCategory
  })

  const [featured, ...rest] = filteredBlogs

  return (
    <PageTransition>
      <Seo
        title="Backend, Cloud, and AI Infrastructure Blog"
        description="Detailed technical writing on backend systems, AWS, AI infrastructure, and cloud-native architecture."
        image="/images/og-cover.svg"
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-teal-100"
          >
            <Sparkles size={16} />
            Developer notes for cloud-era systems
          </motion.p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Technical blogs that explain the architecture behind modern backend systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I write practical, recruiter-friendly deep dives on AWS, AI infrastructure, APIs, observability, and
            production engineering decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#blogs"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300"
            >
              Read Latest Blogs <ArrowRight size={17} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-accent/70"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <div className="grid gap-4">
            {[
              ['Cloud Architecture', 'AWS Bedrock, IAM, APIs, serverless patterns', Code2],
              ['AI Infrastructure', 'How LLMs become enterprise platform capabilities', Sparkles],
              ['Hiring Signal', 'Clear writing that shows depth, judgment, and ownership', BriefcaseBusiness],
            ].map(([title, text, Icon]) => (
              <div key={title} className="rounded-xl border border-line bg-white/5 p-5">
                <Icon className="mb-4 text-accent" size={24} />
                <h2 className="font-bold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Latest Writing</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Featured blogs</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Search, filter by category, and share individual posts directly from LinkedIn.
          </p>
        </div>
        <SearchAndFilter
          query={query}
          setQuery={setQuery}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="mt-8 grid gap-6">
          {featured ? (
            <>
              <BlogCard blog={featured} featured />
              <div className="grid gap-6 md:grid-cols-2">
                {rest.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </>
          ) : (
            <div className="glass-card rounded-2xl p-8 text-center text-slate-300">No blogs matched your search.</div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
