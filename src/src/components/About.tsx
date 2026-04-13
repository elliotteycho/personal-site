"use client";

import { useInView } from "./useInView";

export default function About() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section id="about" className="snap-section flex items-center px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-10">
            A bit about me.
          </h2>
        </div>

        <div className={`space-y-6 text-base text-muted leading-relaxed fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.15s" }}>
          <p>
            I study Computer Science and Human &amp; Organizational Development
            at Vanderbilt, with a minor in Business. I care about building
            products that solve real problems for real people, and I bring both
            the technical depth and the human understanding to do it well.
          </p>
          <p>
            My work spans product management, data analysis, and software
            engineering. I've led product discovery at a venture-backed charity
            tech startup, built financial models that secured board approval for
            a $1.8M nonprofit expansion, and engineered data pipelines that
            serve 200+ operations users.
          </p>
          <p>
            Outside of work, I'm a founding member of Lambda Phi Epsilon, a
            Deloitte &amp; Bain case competition finalist, and I spend my free
            time chasing pour-over coffee, watching Formula 1, and analyzing
            movies nobody asked me to analyze.
          </p>
        </div>

        <div className={`mt-12 flex flex-wrap gap-3 fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
          {["Product Management", "Python", "SQL", "Java", "Figma", "Excel", "Data Analysis", "Agile"].map((skill) => (
            <span
              key={skill}
              className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
