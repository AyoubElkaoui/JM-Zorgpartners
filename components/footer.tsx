'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react'

const navigation = {
  bedrijf: [
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Vacatures', href: '/vacatures' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  diensten: [
    { name: 'Voor Zorgprofessionals', href: '/zorgprofessionals' },
    { name: 'Voor Opdrachtgevers', href: '/opdrachtgevers' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
  ],
}

const social = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C3364] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block group">
              <Image
                src="/logo/logo-color.png"
                alt="JM Zorgpartners Logo"
                width={220}
                height={60}
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300 brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 leading-relaxed">
              Jouw betrouwbare partner in zorgpersoneel. Wij verbinden gepassioneerde zorgprofessionals met de beste werkgevers in de zorgsector.
            </p>
            <div className="flex space-x-3">
              {social.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#F37325] transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Bedrijf</h3>
            <ul className="space-y-3">
              {navigation.bedrijf.map((item, idx) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-[#F37325] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Diensten</h3>
            <ul className="space-y-3">
              {navigation.diensten.map((item, idx) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-[#F37325] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Contact</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#F37325]" />
                <a href="tel:0850000000" className="text-white/80 hover:text-white transition-colors">
                  085 - 0000000
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#F37325]" />
                <a href="mailto:info@jmzorgpartners.nl" className="text-white/80 hover:text-white transition-colors">
                  info@jmzorgpartners.nl
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#F37325]" />
                <span className="text-white/80">Amsterdam, Nederland</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70">
              © {new Date().getFullYear()} JM Zorgpartners. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-[#F37325] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
