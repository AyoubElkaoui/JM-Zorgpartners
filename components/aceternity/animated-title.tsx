'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type AnimatedTitleProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const AnimatedTitle = ({
  children,
  className = '',
  delay = 0,
  as = 'h2'
}: AnimatedTitleProps) => {
  const Component = motion[as] as any
  
  return (
    <Component
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn('relative text-4xl lg:text-5xl font-black text-[#1C3364] mb-6', className)}
    >
      {/* Animated underline */}
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F37325] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: delay + 0.3,
          ease: 'easeOut'
        }}
      />
      {children}
    </Component>
  )
}

type GradientTextProps = {
  children: React.ReactNode
  className?: string
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <motion.span
      className={cn(
        'bg-gradient-to-r from-[#F37325] via-[#ff8c4d] to-[#F37325] bg-clip-text text-transparent',
        className
      )}
      style={{
        backgroundSize: '200% auto'
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center', '0% center']
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {children}
    </motion.span>
  )
}
