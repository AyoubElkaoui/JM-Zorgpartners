"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Zorgprofessionals", link: "/zorgprofessionals" },
  { name: "Zorginstellingen", link: "/werkgevers" },
  { name: "Over Ons", link: "/over-ons" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Navbar className="!h-24">
      <NavBody className="!h-24">
        {/* Custom Logo */}
        <a href="/" className="flex items-center mr-6 select-none">
          <Image
            src="/logo/logo-color.png"
            alt="JM Zorgpartners"
            width={80}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </a>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            href="/contact"
            className="!bg-gradient-to-r !from-[#F37325] !to-[#ff8c42] !text-white !px-8 !py-4 !rounded-xl !text-lg !shadow-lg hover:scale-105 transition"
          >
            Contact
          </NavbarButton>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <a href="/" className="flex items-center mr-6 select-none">
            <Image
              src="/logo/logo-color.png"
              alt="JM Zorgpartners"
              width={60}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </a>
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
            <a
              key={idx}
              href={item.link}
              className="block w-full px-4 py-2 text-neutral-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/contact"
            className="block w-full px-4 py-2 text-[#F37325] font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}