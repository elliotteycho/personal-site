const projects = [
  {
    title: "TDX-Fusion Unified Database",
    description:
      "Integrating Vanderbilt IT's siloed ticketing and asset systems into a unified SQL system-of-record. Mapped 5+ datasets into standardized schemas, cutting manual reconciliation by 35% for 200+ ops users across 6 teams.",
    tags: ["SQL", "Data Architecture", "Pipeline Engineering"],
    link: null,
  },
  {
    title: "VC Fund Network Database",
    description:
      "Built a comprehensive VC ecosystem intelligence system with a 28-column schema spanning 245 funds and 107 companies across 9 sectors. Designed a weighted scoring rubric for internship prospecting using AI-assisted development.",
    tags: ["Python", "Data Pipeline", "AI Leverage", "Excel"],
    link: null,
  },
  {
    title: "Resume Generation Engine",
    description:
      "Designed a fully automated pipeline that takes a JD as input and outputs a tailored, quality-checked resume and cover letter. Features 28 automated validation checks and binary search page-fit optimization.",
    tags: ["Python", "Automation", "ReportLab", "AI-Augmented"],
    link: null,
  },
  {
    title: "LinkedIn Outreach Automation",
    description:
      "Engineered a semi-automated daily outreach system integrated with the VC database. AI-powered research layer generates personalized messages at scale while maintaining authenticity. Tracks 40+ connections with CRM pipeline.",
    tags: ["CRM", "Automation", "AI Prompting", "Notion"],
    link: null,
  },
  {
    title: "Smart-Check: Facility Task Management",
    description:
      "Re-engineered facility check workflows at Vanderbilt by gathering cross-persona stakeholder requirements and translating them into standardized tracking and reporting within the university ticketing system.",
    tags: ["Workflow Optimization", "Stakeholder Research", "Operations"],
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-accent tracking-wide mb-2">
          03
        </h2>
        <h3 className="text-3xl font-bold text-foreground mb-10">Projects</h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-sm transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <svg
                  className="text-accent shrink-0"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>
              <h4 className="text-base font-semibold text-foreground mb-2">
                {proj.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted/70"
                  >
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
