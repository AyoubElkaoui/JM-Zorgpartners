'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 xl:bottom-8 right-6 xl:right-8 z-[99999] w-12 xl:w-14 h-12 xl:h-14 rounded-full bg-[#F37325] hover:bg-[#d96420] text-white shadow-2xl hover:shadow-[#F37325]/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group pointer-events-auto"
          aria-label="Scroll naar boven"
          style={{ position: 'fixed' }}
        >
          <ArrowUp className="h-5 xl:h-6 w-5 xl:w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  )
}
