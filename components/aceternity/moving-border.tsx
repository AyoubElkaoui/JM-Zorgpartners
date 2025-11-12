'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type MovingBorderProps = {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderRadius?: string
  as?: any
  borderClassName?: string
}

export const MovingBorder = ({
  children,
  duration = 500,
  className = '',
  containerClassName = '',
  borderRadius = '1.75rem',
  as: Component = 'button',
  borderClassName = ''
}: MovingBorderProps) => {
  return (
    <Component
      className={cn(
        'relative bg-transparent text-xl p-[2px] overflow-hidden',
        containerClassName
      )}
      style={{
        borderRadius: borderRadius
      }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <motion.div
          className={cn(
            'h-full w-full',
            borderClassName
          )}
          style={{
            background: 'linear-gradient(120deg, #F37325 0%, #ff8c4d 15%, #F37325 30%, #1C3364 50%, #2a4a7c 65%, #1C3364 80%, #F37325 100%)',
            backgroundSize: '300% 100%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%']
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div
        className={cn(
          'relative bg-white backdrop-blur-xl text-black flex items-center justify-center w-full h-full text-sm antialiased',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`
        }}
      >
        {children}
      </div>
    </Component>
  )
}
