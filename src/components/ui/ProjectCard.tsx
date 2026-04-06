import React from 'react';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  isLive?: boolean;
}

export function ProjectCard({ title, description, imageUrl, githubUrl, isLive }: ProjectCardProps) {
  return (
    <a 
      href={githubUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col gap-5 block cursor-pointer"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-ink/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark overlay that fades out slightly on hover */}
        <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/5 transition-colors duration-500" />
        
        {/* Dynamic icon pill overlaid */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4 py-3 bg-cream/90 backdrop-blur-md rounded-2xl translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <span className="font-manrope font-bold text-xs uppercase tracking-widest text-ink">
            {isLive ? 'View Live' : 'View Source'}
          </span>
          {isLive ? (
            <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          )}
        </div>
      </div>
      <div>
        <h3 className="font-epilogue font-bold text-[22px] text-ink leading-tight group-hover:text-amber transition-colors duration-300">
          {title}
        </h3>
        <p className="font-manrope font-medium text-ink/70 text-[14px] mt-2 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
}
