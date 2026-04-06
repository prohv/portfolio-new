import React from 'react';
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export function FooterSection() {
  return (
    <footer id="contact" className="w-full bg-cream border-t border-border pt-10 lg:pt-20 flex flex-col relative z-10">
      {/* Contact Top Section */}
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-18 lg:mb-26">
        <div className="flex flex-col gap-6 max-w-xl">
          <h4 className="font-epilogue font-black text-3xl sm:text-4xl lg:text-5xl leading-[0.9] tracking-[-0.04em] text-ink uppercase animate-fade-up opacity-0 [animation-fill-mode:forwards]">
            Let's work<br />together.
          </h4>
          <p className="font-manrope font-medium text-base sm:text-lg text-ink/70 animate-fade-up opacity-0 [animation-delay:150ms] [animation-fill-mode:forwards]">
            Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 items-start md:items-end animate-fade-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
          <a href="mailto:proharshv11@gmail.com" className="font-epilogue font-bold text-2xl lg:text-3xl text-ink hover:text-amber transition-colors duration-300 group flex items-center gap-4">
            proharshv11@gmail.com
            <span className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-amber group-hover:border-amber group-hover:text-cream transition-all duration-300">
              <svg className="w-4 h-4 translate-x-[1px] translate-y-[-1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          <div className="flex items-center gap-6 mt-4">
            {[
              { label: 'Instagram', url: 'https://instagram.com/proharshv' },
              { label: 'Twitter', url: 'https://twitter.com/proharshv' },
              { label: 'LinkedIn', url: 'https://linkedin.com/in/proharsh' }
            ].map(social => (
              <a 
                key={social.label} 
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope font-bold text-[11px] uppercase tracking-[0.2em] text-ink/50 hover:text-ink transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Marquee */}
      <div className="w-full flex flex-col items-center overflow-hidden">
        {/* We place MarqueeSection here, it will take full width */}
        <div className="w-full -mt-4">
          <MarqueeSection />
        </div>
      </div>
    </footer>
  );
}
