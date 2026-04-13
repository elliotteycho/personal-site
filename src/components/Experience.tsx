const experiences = [
  {
    company: "Simpli",
    role: "Product Manager Intern | Project Lead",
    location: "New York, NY",
    dates: "Jan 2026 - Present",
    description:
      "Leading a 3-person product team on an 8-week engagement with a venture-backed charity tech startup that has facilitated $70M+ in corporate donations. Owning end-to-end product discovery, conducting 15+ user interviews across $300K-$5M nonprofits, and building the PRD and MVP for a platform targeting 10-1,000 charities.",
    tags: ["Product Management", "User Research", "PRD", "Stakeholder Alignment"],
  },
  {
    company: "Generation Conscious",
    role: "Product Manager Intern",
    location: "Nashville, TN",
    dates: "Sep 2025 - Present",
    description:
      "Owning product experience across 8 IoT-connected dispensers serving 3,000+ students. Led a full UX redesign that cut plastic waste by 25%, launched 4 go-to-market campaigns driving 40% adoption uplift, and analyze 350+ RFID datasets in Python to drive roadmap decisions.",
    tags: ["Python", "Data Analysis", "Go-to-Market", "IoT"],
  },
  {
    company: "Vanderbilt IT",
    role: "Tech Operations Management Intern",
    location: "Nashville, TN",
    dates: "Jun 2025 - Present",
    description:
      "Driving measurable improvements to systems used by 200+ faculty. Redesigned the IT support interface improving ticket routing by 19%, launched UI enhancements yielding 25% higher instructional efficiency, and built SLA dashboards that improved resolution rates by 45%.",
    tags: ["Dashboards", "A/B Testing", "SLA", "Analytics"],
  },
  {
    company: "Bridgestone Americas",
    role: "Product Manager Intern",
    location: "Nashville, TN",
    dates: "Jan - May 2025",
    description:
      "Conducted 20 user interviews on internal CRM pain points, drove MVP scoping with a 6-person cross-functional team, and authored the PRD that secured stakeholder approval for product launch. Designed a CRM prototype focused on 4 key KPIs that increased sales engagement by 23%.",
    tags: ["User Interviews", "CRM", "MVP", "Cross-functional"],
  },
  {
    company: "Aurora Prep",
    role: "AI Growth Lead",
    location: "Nashville, TN",
    dates: "Jan - Jul 2025",
    description:
      "Refined product-market fit via STP analysis supporting 23% of growth objectives. Launched campus activation reaching 300+ students with 25% engagement uplift. Ran A/B tests across UI variations, increasing open rates by 35% and demo bookings by 30%.",
    tags: ["Growth", "A/B Testing", "Product-Market Fit", "Activation"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-accent tracking-wide mb-2">
          02
        </h2>
        <h3 className="text-3xl font-bold text-foreground mb-10">
          Experience
        </h3>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="group border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-accent">{exp.role}</p>
                </div>
                <div className="text-sm text-muted text-right shrink-0">
                  <p>{exp.dates}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent-light text-accent font-medium"
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
