import { Search } from 'lucide-react'

export default function SearchAndFilter({ query, setQuery, categories, activeCategory, setActiveCategory }) {
  return (
    <div className="glass-card rounded-2xl p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="relative block flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, description, or tag"
            className="h-12 w-full rounded-full border border-line bg-white/[0.06] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-accent/70 [body.light_&]:text-slate-950"
          />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'border-accent bg-accent text-slate-950'
                  : 'border-line bg-white/5 text-slate-300 hover:border-accent/70 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
