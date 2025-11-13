'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type CardSpotlightProps = {
  children: React.ReactNode
  className?: string
}

export const CardSpotlight = ({
  children,
  className = ''
}: CardSpotlightProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-white border border-gray-200',
        'transition-all duration-300 hover:shadow-lg hover:border-[#F37325]/30',
        className
      )}
    >
      {children}
    </div>
  )
}
