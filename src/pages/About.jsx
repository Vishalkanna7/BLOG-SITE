import { Cloud, Database, ServerCog } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About"
        description="About the developer behind Tech Notes, focused on backend systems, cloud architecture, and AI infrastructure."
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">About</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          I write to make complex backend and cloud ideas easier to reason about.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This site is a focused technical writing home for LinkedIn posts, architecture notes, and long-form
          explanations. The goal is simple: show practical engineering thinking through clear examples, tradeoffs,
          and production-minded details.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['Backend Systems', 'API design, service boundaries, reliability, and clean implementation habits.', ServerCog],
            ['Cloud Platforms', 'AWS-native services, serverless integration, IAM, observability, and deployment.', Cloud],
            ['Data and AI', 'LLM-backed workflows, retrieval patterns, and intelligent backend capabilities.', Database],
          ].map(([title, text, Icon]) => (
            <div key={title} className="glass-card rounded-2xl p-6">
              <Icon className="mb-5 text-accent" size={28} />
              <h2 className="text-lg font-bold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
