"use client";

import { useState } from "react";
import { useInView } from "./useInView";

const experiences = [
  {
    company: "Simpli",
    role: "Product Manager Intern | Project Lead",
    location: "New York, NY",
    dates: "Jan 2026 - Present",
    description:
      "Leading a 3-person product team on an 8-week engagement with a venture-backed charity tech startup that has facilitated $70M+ in corporate donations. Owning end-to-end product discovery, conducting 15+ user interviews across nonprofits, and building the PRD and MVP for a platform targeting 10-1,000 charities.",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useInView(0.2);

  return (
    <section id="experience" className="snap-section flex items-center px-6">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-10">
            Where I've worked.
          </h2>
        </div>

        <div className={`flex flex-col md:flex-row gap-8 fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.15s" }}>
          {/* Company tabs */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible md:min-w-[180px] shrink-0">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(i)}
                className={`text-left text-sm font-mono px-4 py-3 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeIndex === i
                    ? "bg-accent-light text-accent border-l-2 border-accent"
                    : "text-muted hover:text-foreground hover:bg-card"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Active experience detail */}
          <div className="flex-1 min-h-[280px]">
            <div
              key={activeIndex}
              className="animate-fade-in"
              style={{ animation: "fadeIn 0.4s ease-out" }}
            >
              <h3 className="text-xl font-semibold text-foreground">
                {experiences[activeIndex].role}
              </h3>
              <p className="text-sm text-accent mt-1 font-mono">
                {experiences[activeIndex].company}
              </p>
              <p className="text-xs text-muted mt-1">
                {experiences[activeIndex].dates} &middot; {experiences[activeIndex].location}
              </p>
              <p className="text-sm text-muted leading-relaxed mt-5">
                {experiences[activeIndex].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {experiences[activeIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent-light text-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
