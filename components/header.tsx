'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar'

const navigation = [
  { name: 'Home', link: '/' },
  { name: 'Zorgprofessionals', link: '/zorgprofessionals' },
  { name: 'Zorginstellingen', link: '/opdrachtgevers' },
  { name: 'Over Ons', link: '/over-ons' },
  { name: 'Blog', link: '/blog' },
  { name: 'Contact', link: '/contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Navbar className="fixed top-0">
      {/* Desktop Navigation */}
      <NavBody>
        <Link href="/" className="relative z-20 flex items-center px-2 py-1 -my-4">
          <Image
            src="/logo/logo-color.png"
            alt="JM Zorgpartners"
            width={350}
            height={100}
            className="h-20 lg:h-24 xl:h-28 w-auto"
            priority
          />
        </Link>
        <NavItems items={navigation} className="flex-1" />
        <div className="flex items-center gap-2 flex-shrink-0">
          <NavbarButton 
            href="/contact" 
            as={Link}
            className="bg-gradient-to-r from-[#F37325] to-[#ff8c42] text-white shadow-lg hover:shadow-xl hover:shadow-[#F37325]/30 hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm whitespace-nowrap"
          >
            <Phone className="mr-2 h-4 w-4 inline-block" />
            Contact
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="relative z-20 flex items-center px-2 py-1">
            <Image
              src="/logo/logo-color.png"
              alt="JM Zorgpartners"
              width={200}
              height={60}
              className="h-12 sm:h-14 w-auto"
              priority
            />
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navigation.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 hover:text-[#F37325] transition-colors"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-[#F37325] to-[#ff8c42] text-white shadow-lg hover:shadow-xl font-semibold"
              href="/contact"
              as={Link}
            >
              <Phone className="mr-2 h-4 w-4 inline-block" />
              Contact
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
