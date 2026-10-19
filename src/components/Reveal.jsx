import { motion, useReducedMotion } from 'framer-motion'

function Reveal({ children, className = '', delay = 0, ...props }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
