'use client'

import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

type HoverCardProps = {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export const HoverCard = ({
  children,
  className = '',
  containerClassName = ''
}: HoverCardProps) => {
  const [hovering, setHovering] = React.useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useMotionValue(0))
  const rotateY = useSpring(useMotionValue(0))

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5

    mouseX.set(xPct)
    mouseY.set(yPct)
    
    rotateX.set(yPct * -10)
    rotateY.set(xPct * 10)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    rotateX.set(0)
    rotateY.set(0)
    setHovering(false)
  }

  return (
    <motion.div
      className={cn('relative group', containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
    >
      <div
        className={cn('relative', className)}
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
