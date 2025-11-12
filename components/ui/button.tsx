'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F37325] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105",
          {
            "bg-[#1C3364] text-white shadow-lg hover:bg-[#152848] hover:shadow-xl": variant === 'default',
            "bg-[#F37325] text-white shadow-lg hover:bg-[#d96420] hover:shadow-xl": variant === 'secondary',
            "border-2 border-[#1C3364] text-[#1C3364] bg-white shadow-md hover:bg-[#1C3364] hover:text-white hover:shadow-lg": variant === 'outline',
            "hover:bg-gray-100 hover:text-[#1C3364]": variant === 'ghost',
          },
          {
            "h-11 px-6 py-2 text-sm": size === 'default',
            "h-9 px-4 text-xs": size === 'sm',
            "h-14 px-8 text-base": size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
