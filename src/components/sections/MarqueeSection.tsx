'use client';

import React, { useEffect, useRef, useState } from 'react';

export function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref} 
      className={`overflow-hidden pt-10 transition-all duration-700 bg-cream ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            className="font-epilogue font-black text-[28vw] md:text-[22vw] lg:text-[18vw] leading-[0.85] tracking-[-0.04em] text-ink pr-16 select-none"
          >
            prohv
          </span>
        ))}
      </div>
    </section>
  );
}
