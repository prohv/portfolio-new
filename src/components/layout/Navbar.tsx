"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Resume', href: 'https://drive.google.com/file/d/1u0mCAt1P7q_WeYSOaG6MNp83JMJ9p7cl/view?usp=sharing', external: true },
  { label: 'Work', href: '#work', external: false },
  { label: 'About', href: '#about', external: false },
  { label: 'Contact', href: '#contact', external: false }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 w-full px-6 md:px-10 lg:px-16 py-6 flex items-center justify-between max-w-[1200px] mx-auto z-[60] bg-cream/80 backdrop-blur-md">
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group relative z-[60]">
          <div className="relative w-10 h-10 transition-transform group-hover:scale-110 duration-300 ease-out">
            <Image
              src="/portfolio-logo.svg"
              alt="Harsh Portfolio Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="font-epilogue font-black text-xl leading-none tracking-tighter text-ink uppercase">
              Harsh
            </span>
            <span className="font-manrope font-bold text-[10px] leading-none tracking-[0.2em] text-ink/40 uppercase">
              Visual Poetry
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((item) => (
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-manrope font-bold text-[11px] text-ink/60 hover:text-ink transition-colors duration-300 uppercase tracking-[0.15em] group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="relative font-manrope font-bold text-[11px] text-ink/60 hover:text-ink transition-colors duration-300 uppercase tracking-[0.15em] group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          ))}
        </div>

        <button 
          className="md:hidden group p-2 relative z-[60]" 
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-[2px] bg-ink rounded-full transition-all duration-300 origin-center ${isOpen ? 'w-full rotate-45 translate-y-[9px]' : 'w-full group-hover:w-4'}`} />
            <span className={`h-[2px] bg-ink rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4' : 'w-4 group-hover:w-full'}`} />
            <span className={`h-[2px] bg-ink rounded-full transition-all duration-300 origin-center ${isOpen ? 'w-full -rotate-45 -translate-y-[9px]' : 'w-full group-hover:w-4'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-cream backdrop-blur-2xl z-50 transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {NAV_LINKS.map((item, index) => (
           item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={`font-epilogue font-black text-3xl text-ink hover:text-amber transition-all duration-500 uppercase tracking-tighter transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + (index * 100)}ms` }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-epilogue font-black text-3xl text-ink hover:text-amber transition-all duration-500 uppercase tracking-tighter transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + (index * 100)}ms` }}
              >
                {item.label}
              </Link>
            )
        ))}
      </div>
    </>
  );
}
