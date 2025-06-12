'use client'
import React, {useState, useEffect} from 'react'
import {Menu, X} from 'lucide-react'
import {useTranslations} from 'next-intl'
import LanguageSwitch from './LanguageSwitch'
import Image from 'next/image';


export default function Header() {
  const t = useTranslations('navigation')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    ['#home', t('home')],
    ['#services', t('services')],
    ['#process', t('process')],
    ['#cases', t('cases')],
    ['#about', t('about')],
    ['#contact', t('contact')],
  ] as const

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-[#C9C7C5]/10"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <Image src="/logo.png" alt="Logo" width={100} height={100} className="" />
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map(([href, label]) => (
                <a key={href} href={href} className={`nav-link  ${isScrolled
                    ? "text-[#1F1B1C] hover:bg-[#6BD8DA]/10"
                    : "text-white hover:bg-white/10"
                  }`} >
                  {label}
                </a>
              ))}
            </div>
          </nav>
          {/* Right side: Language Switch + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitch isScrolled={isScrolled} />

            {/* Mobile menu toggle */}

            <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#C9C7C5] hover:text-[#6BD8DA] p-2 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu className="text-[#6BD8DA]" size={24} />}
          </button>
          
        </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#C9C7C5]">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="block px-4 py-3 text-base font-medium text-[#1F1B1C] hover:text-[#6BD8DA]"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}