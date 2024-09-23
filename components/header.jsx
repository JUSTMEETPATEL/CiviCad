'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    (<header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${scrolled ? 'bg-[#0a0a0a] shadow-md' : ''}`}>
      <div className="flex items-center justify-between min-h-[10vh] px-4 md:px-12">
        <div className="flex items-center">
          <Image src="https://civicad.in/Logo/CivicadTrans.png" alt="Civicad Logo" width={60} height={60} />
          <h1 className="text-2xl md:text-3xl font-bold text-white ml-2 md:ml-4">CIVICAD.</h1>
        </div>
        <nav className="hidden md:block space-x-4 lg:space-x-8">
          {['Home', 'About Us', 'Members', 'Clients', 'Projects'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="text-white hover:text-lg transition-all duration-200">
              {item}
            </Link>
          ))}
        </nav>
        <Link
          href="#footer"
          className="bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-lg hover:text-lg transition-all duration-200">
          Contact Us
        </Link>
      </div>
    </header>)
  );
}