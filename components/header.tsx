"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Zorgprofessionals", link: "/zorgprofessionals" },
  { name: "Zorginstellingen", link: "/opdrachtgevers" },
  { name: "Over Ons", link: "/over-ons" },
  { name: "Blog", link: "/blog" },
  { name: "Vacatures", link: "/vacatures" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Navbar className="!h-20 xl:!h-24">
      <NavBody className="!h-24">
        {/* Custom Logo */}
        <Link href="/" className="flex items-center mr-6 select-none">
          <Image
            src="/logo/logo-color.png"
            alt="JM Zorgpartners"
            width={140}
            height={140}
            className="h-16 xl:h-20 w-auto"
            priority
          />
        </Link>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#F37325] hover:bg-[#d96420] text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <AlertTriangle className="h-4 w-4" />
            <span>Spoed</span>
          </Link>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center mr-6 select-none">
            <Image
              src="/logo/logo-color.png"
              alt="JM Zorgpartners"
              width={80}
              height={80}
              className="h-12 xl:h-14 w-auto"
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
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="block w-full px-4 py-2 text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full px-4 py-2 text-[#F37325] font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}