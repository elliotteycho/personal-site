"use client";

import { useInView } from "./useInView";

const projects = [
  {
    title: "TDX-Fusion Unified Database",
    description:
      "Integrating siloed ticketing and asset systems into a unified SQL system-of-record. Mapped 5+ datasets into standardized schemas, cutting manual reconciliation by 35% for 200+ ops users across 6 teams.",
    tags: ["SQL", "Data Architecture", "Pipeline Engineering"],
  },
  {
    title: "VC Fund Network Database",
    description:
      "Built a comprehensive VC ecosystem intelligence system with a 28-column schema spanning 245 funds and 107 companies across 9 sectors. Designed a weighted scoring rubric for internship prospecting using AI-assisted development.",
    tags: ["Python", "Data Pipeline", "AI Leverage"],
  },
  {
    title: "Resume Generation Engine",
    description:
      "Designed a fully automated pipeline that takes a JD as input and outputs a tailored, quality-checked resume and cover letter. Features 28 automated validation checks and binary search page-fit optimization.",
    tags: ["Python", "Automation", "AI-Augmented"],
  },
  {
    title: "LinkedIn Outreach Automation",
    description:
      "Engineered a semi-automated daily outreach system integrated with the VC database. AI-powered research layer generates personalized messages at scale while maintaining authenticity.",
    tags: ["CRM", "Automation", "AI Prompting"],
  },
];

export default function Projects() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section id="projects" className="snap-section flex items-center px-6">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-10">
            Things I've built.
          </h2>
        </div>

        <div className={`grid gap-4 sm:grid-cols-2 stagger-children ${isVisible ? "visible" : ""}`}>
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="card-interactive border border-border rounded-xl p-6 bg-card cursor-default"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="text-accent shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <h4 className="text-sm font-semibold text-foreground">
                  {proj.title}
                </h4>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-4">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-muted/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
