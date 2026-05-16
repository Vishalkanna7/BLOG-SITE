import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Page Not Found" description="The page you are looking for does not exist." />
      <section className="mx-auto grid min-h-[70vh] max-w-3xl place-items-center px-4 py-16 text-center sm:px-6">
        <div>
          <p className="font-mono text-sm font-bold text-accent">404</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-6xl">This page does not exist.</h1>
          <p className="mt-5 text-slate-300">
            The link may have changed, or the blog slug might not be in `src/data/blogs.json`.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300"
          >
            <ArrowLeft size={17} />
            Back home
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
