import React from 'react';
import { ProjectCard, ProjectCardProps } from '@/components/ui/ProjectCard';

const DEMO_PROJECTS: ProjectCardProps[] = [
  {
    title: "CSI Interactions'26",
    description: "Architected and extended modular full-stack event orchestration systems with deployment to production, handling 2,000+ registrations.",
    imageUrl: "/interact.webp",
    githubUrl: "https://interact.csivit.com/",
    isLive: true,
  },
  {
    title: "Riviera'26",
    description: "Delivered modular UI components for VIT’s annual cultural fest website, supporting 1M+ peak monthly visits with optimized client-side rendering.",
    imageUrl: "/riviera.webp",
    githubUrl: "https://riviera.vit.ac.in/",
    isLive: true,
  },
  {
    title: "DevSpace'26",
    description: "Owned the development of an 800+ users hackathon platform, designing modular participant portals and asynchronous submission workflows.",
    imageUrl: "/devspace.webp",
    githubUrl: "https://devspace.csivit.com/",
    isLive: true,
  },
  {
    title: "Velvet Shadows",
    description: "An atmospheric puzzle game prototype built with Three.js, focusing on moody lighting and deep shadows.",
    imageUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Prismatics",
    description: "A collection of CSS-only UI components featuring glassmorphism and holographic color dispersion.",
    imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Chromatic Drift",
    description: "An experimental web application playing with fluid dynamics and color blending for relaxation.",
    imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Stellar Cartography",
    description: "Mapping fictional solar systems using procedurally generated 3D planets and cosmic dust.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Midnight API",
    description: "A beautifully documented dark-mode RESTful API service for generating poetic placeholders.",
    imageUrl: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Obelisk",
    description: "A monolithic minimal CMS designed for artists and photographers to showcase massive galleries seamlessly.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com",
  }
];

export function ProjectsSection() {
  return (
    <section id="work" className="w-full px-6 md:px-10 lg:px-16 py-20 lg:py-32 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <h2 className="font-epilogue font-black text-4xl sm:text-5xl lg:text-7xl text-ink uppercase tracking-tighter">
            Selected<br/>Work
          </h2>
        </div>
        <p className="font-manrope font-medium text-ink/70 text-base sm:text-lg max-w-[400px]">
          A curated collection of my recent projects exploring the intersection of design, code, and visual poetry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {DEMO_PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="animate-fade-up opacity-0 [animation-fill-mode:forwards]"
            style={{ animationDelay: `${(index % 3) * 150}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="border border-ink/20 rounded-full px-8 py-4 font-manrope font-bold text-sm tracking-widest uppercase text-ink hover:bg-ink hover:text-cream transition-colors duration-300">
          View All Projects
        </button>
      </div>
    </section>
  );
}
