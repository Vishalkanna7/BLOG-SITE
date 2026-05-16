import blogs from '../data/blogs.json'

function isPublished(blog) {
  return blog.published !== false
}

export function getSortedBlogs() {
  return blogs.filter(isPublished).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug && isPublished(blog))
}

export function getCategories() {
  return ['All', ...new Set(blogs.filter(isPublished).flatMap((blog) => blog.categories || []))]
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export function estimateReadingTime(content = '') {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}
