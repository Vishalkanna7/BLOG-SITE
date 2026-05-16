import { useEffect } from 'react'
import { updateSeo } from '../utils/seo'

export default function Seo(props) {
  const { title, description, image, url } = props

  useEffect(() => {
    updateSeo({ title, description, image, url })
  }, [title, description, image, url])

  return null
}
