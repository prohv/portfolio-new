import React from 'react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>);

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 px-6 md:px-10 lg:px-16 pt-4 lg:pt-8 max-w-[1200px] mx-auto w-full">
      {/* Left Text content */}
      <div className="order-2 md:order-1 flex flex-col justify-center">
        <h1 className="font-epilogue font-black text-[15vw] md:text-[10vw] lg:text-[clamp(80px,10vw,160px)] leading-[0.88] tracking-[-0.04em] text-ink animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          HARSH<br />
        </h1>
        <p className="font-manrope font-medium text-[17px] text-ink mt-6 max-w-[380px] self-end md:self-start md:ml-auto md:text-right leading-relaxed">
<p>Full-stack developer skilled in TypeScript, Next.js, React, Express.js, and PostgreSQL.</p>
<p>Building scalable systems and seamless digital experiences with reliability and optimisation.</p>
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-14 md:self-start">
          {[
            { icon: GithubIcon, label: 'GitHub', url: 'https://github.com/prohv' },
            { icon: LinkedinIcon, label: 'LinkedIn', url: 'https://linkedin.com/in/proharsh' },
            { icon: TwitterIcon, label: 'Twitter', url: 'https://twitter.com/proharshv' },
            { icon: MailIcon, label: 'Mail', url: 'mailto:proharshv11@gmail.com' }
          ].map(({ icon: Icon, label, url }) => (
            <a 
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-none items-center justify-center border border-ink/20 rounded-full w-10 h-10 aspect-square text-ink hover:bg-ink hover:text-cream transition-colors duration-300 group"
              aria-label={`Visit my ${label} profile`}
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row sm:gap-16 gap-8 mt-10 mb-8">
          {[
            { value: '1M+', label: 'Peak monthly visits reliably managed via optimized Next.js SSR' },
            { value: '10K+', label: 'Daily users served by robust API gateways and scalable architectures' },
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
        <div className="absolute -bottom-0 -left-4 w-12 h-32 bg-amber rounded-[24px] z-10 border-4 border-cream transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:scale-88" />
        
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
