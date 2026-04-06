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
    title: "KeyBase",
    description: "Highly secure and scalable API key vault management system built with robust architecture and encryption.",
    imageUrl: "/keybase.webp",
    githubUrl: "https://github.com/prohv/keybase",
  },
  {
    title: "WatchDocs",
    description: "A Go CLI tool that scans project manifest files for dependencies and automatically find their official documentation URLs.",
    imageUrl: "/watchdocs.webp",
    githubUrl: "https://github.com/prohv/watchdocs-cli",
  },
  {
    title: "Whats the TL;DR?",
    description: "AI-powered content summarization platform for rapidly extracting insights from Whatsapp Chats.",
    imageUrl: "/whatsthetldr.webp",
    githubUrl: "https://github.com/prohv/whats-the-tldr",
  },
  {
    title: "Auto NPTEL",
    description: "Chrome extension that extracts NPTEL assessment questions and uses AI to automatically fill in correct answers.",
    imageUrl: "/autonptel.webp",
    githubUrl: "https://github.com/prohv/auto-nptel",
  },
  {
    title: "AutoPort",
    description: "Automatically handles VIT WiFi portal authentication so users never have to enter credentials manually again.",
    imageUrl: "/autoport.webp",
    githubUrl: "https://github.com/prohv/autoport",
  },
  {
    title: "BulletPages",
    description: "One-click AI summarizer that extracts key insights from blogs and news articles into compact bullet points.",
    imageUrl: "/bulletpages.webp",
    githubUrl: "https://github.com/prohv/bulletpages",
  },
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
    </section>
  );
}
