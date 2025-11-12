'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const BackgroundGrid = ({
  className = '',
  dotSize = 1,
  dotColor = '#F37325',
  gap = 20
}: {
  className?: string
  dotSize?: number
  dotColor?: string
  gap?: number
}) => {
  return (
    <div className={cn('absolute inset-0 -z-10', className)}>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${gap}px ${gap}px`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  )
}

export const AnimatedBeam = ({
  className = '',
  color = '#F37325',
  width = '40%',
  delay = 0
}: {
  className?: string
  color?: string
  width?: string
  delay?: number
}) => {
  return (
    <motion.div
      className={cn('absolute h-[2px]', className)}
      style={{
        width: width,
        background: `linear-gradient(90deg, transparent, ${color}, ${color}, transparent)`,
        boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`
      }}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ 
        x: ['0%', '200%'],
        opacity: [0, 0.6, 0.8, 0.6, 0] 
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1],
        repeatDelay: 3,
        delay: delay
      }}
    />
  )
}
