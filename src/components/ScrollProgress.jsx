import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <motion.div
      className="progress-bar fixed left-0 top-0 z-50 h-1 w-full bg-gradient-to-r from-accent via-sky-400 to-flame"
      style={{ scaleX }}
    />
  )
}
