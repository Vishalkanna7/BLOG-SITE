const siteName = 'Tech Notes by Vishal'

export function updateSeo({ title, description, image, url } = {}) {
  const resolvedTitle = title ? `${title} | ${siteName}` : siteName
  const resolvedDescription =
    description || 'Technical blogs on backend systems, cloud architecture, and AI infrastructure.'
  const resolvedUrl = url || window.location.href
  const resolvedImage = image ? new URL(image, window.location.origin).href : `${window.location.origin}/images/og-cover.svg`

  document.title = resolvedTitle
  setMeta('description', resolvedDescription)
  setMeta('og:title', resolvedTitle, 'property')
  setMeta('og:description', resolvedDescription, 'property')
  setMeta('og:type', 'article', 'property')
  setMeta('og:url', resolvedUrl, 'property')
  setMeta('og:image', resolvedImage, 'property')
  setMeta('twitter:card', 'summary_large_image')
  setMeta('twitter:title', resolvedTitle)
  setMeta('twitter:description', resolvedDescription)
  setMeta('twitter:image', resolvedImage)
}

function setMeta(name, content, attr = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}
