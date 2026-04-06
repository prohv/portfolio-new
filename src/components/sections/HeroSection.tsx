import React from 'react';

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 px-6 md:px-10 lg:px-16 pt-4 lg:pt-8 max-w-[1200px] mx-auto w-full">
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
      <div className="order-1 md:order-2 relative animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] group">
        {/* Floating Decorative Bars */}
        <div className="absolute -top-4 -right-4 w-12 h-32 bg-amber rounded-[24px] border-4 border-cream  z-10 transition-transform duration-500 group-hover:translate-y-2 group-hover:-translate-x-2 group-hover:scale-88" />
        <div className="absolute -bottom-4 -left-4 w-12 h-32 bg-amber rounded-[24px] z-10 border-4 border-cream transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:scale-88" />
        
        <div className="bg-amber rounded-[32px] overflow-hidden relative w-full aspect-[4/3] md:aspect-[9/10] z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/profile-pic.png" 
            alt="Harsh Profile" 
            className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
          />
          {/* Signature Overlay */}
          <div className="absolute bottom-6 left-12 right-6 flex justify-between items-end pointer-events-none">
            <div className="flex flex-col">
              <span className="font-epilogue font-black text-cream text-md uppercase tracking-tighter leading-none">Harsh</span>
              <span className="font-manrope font-bold text-cream/60 text-[10px] uppercase tracking-[0.2em] mt-1">prohv</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
