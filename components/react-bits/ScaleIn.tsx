'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface ScaleInProps {
  children: ReactNode
  duration?: number
  delay?: number
  initialScale?: number
  className?: string
}

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  duration = 600,
  delay = 0,
  initialScale = 0.8,
  className = ''
}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element)
          setTimeout(() => {
            setInView(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : `scale(${initialScale})`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
      }}
    >
      {children}
    </div>
  )
}

export default ScaleIn
