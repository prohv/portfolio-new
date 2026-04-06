import React from 'react';

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 px-6 md:px-10 lg:px-16 pt-8 lg:pt-16 max-w-[1200px] mx-auto w-full">
      {/* Left Text content */}
      <div className="order-2 md:order-1 flex flex-col justify-center">
        <h1 className="font-epilogue font-black text-[15vw] md:text-[10vw] lg:text-[clamp(80px,10vw,160px)] leading-[0.88] tracking-[-0.04em] text-ink animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          HARSH<br />
        </h1>
        <p className="font-manrope font-medium text-[17px] text-ink mt-6 max-w-[300px] self-end md:self-start md:ml-auto md:text-right">
          Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion.
        </p>

        {/* Social Pills */}
        <div className="flex items-center gap-1 mt-8">
          {['yt', 'ig', 'fb', 'x'].map(s => (
            <button key={s}
              className="border border-ink rounded-full px-3 py-1.5 text-[11px] font-manrope font-semibold text-ink hover:bg-ink hover:text-cream transition-colors duration-200 uppercase"
              aria-label={`Visit our ${s} page`}>
              {s}
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row sm:gap-16 gap-8 mt-12 mb-8">
          {[
            { value: '+250k', label: 'Videos that reaching a wide audience and give lasting impression' },
            { value: '+800k', label: 'Hours watched, engaging storytelling that captivates viewers' },
          ].map(stat => (
            <div key={stat.value} className="hover:-translate-y-1 transition-transform cursor-default">
              <p className="font-epilogue font-extrabold text-[48px] sm:text-[72px] leading-none text-ink tracking-tighter tabular-nums">
                {stat.value}
              </p>
              <p className="font-manrope font-medium text-[13px] text-ink mt-2 max-w-[160px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Amber Image Card */}
      <div className="order-1 md:order-2 relative animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
        <div className="bg-amber rounded-[32px] overflow-hidden relative w-full aspect-[4/3] md:aspect-[9/10]">
          {/* We are omitting the signature and photo implementation details to focus on building the layout shape without explicit assets, but applying the styling instructions. */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 text-ink/30 font-epilogue text-2xl font-bold">
            [Photo Placeholder]
          </div>
        </div>

        {/* Globe Button (Top Right) */}
        <button 
          className="absolute top-6 -right-6 w-14 h-14 bg-ink rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg z-10 min-h-[44px] min-w-[44px]"
          aria-label="Globe/Map"
        >
          <svg className="w-6 h-6 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        {/* Arrow CTA Button (Bottom Right) */}
        <button 
          className="absolute bottom-6 -right-6 w-14 h-14 bg-ink rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg z-10 min-h-[44px] min-w-[44px]"
          aria-label="Call to action"
        >
          <svg className="w-6 h-6 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
