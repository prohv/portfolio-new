import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="sticky top-0 w-full px-6 md:px-10 lg:px-16 py-6 flex items-center justify-between max-w-[1200px] mx-auto z-50 bg-cream/80 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3 group">
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
        {['Work', 'About', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative font-manrope font-bold text-[11px] text-ink/60 hover:text-ink transition-colors duration-300 uppercase tracking-[0.15em] group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      <button className="md:hidden group p-2" aria-label="Toggle Menu">
        <div className="w-6 h-5 flex flex-col justify-between items-end">
          <span className="w-full h-[2px] bg-ink rounded-full transition-all group-hover:w-4" />
          <span className="w-4 h-[2px] bg-ink rounded-full transition-all group-hover:w-full" />
          <span className="w-full h-[2px] bg-ink rounded-full transition-all group-hover:w-4" />
        </div>
      </button>
    </nav>
  );
}
