"use client";

import { useInView } from "./useInView";

export default function Blog() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section id="blog" className="snap-section flex items-center px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">
            Writing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">
            Thoughts, soon.
          </h2>
        </div>
        <div className={`fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.15s" }}>
          <p className="text-base text-muted leading-relaxed max-w-md mx-auto">
            I'm working on writing about product management, AI leverage
            in daily workflows, and lessons from building things as a student.
          </p>
          <div className="mt-10 inline-flex items-center gap-2 text-sm text-muted/50 font-mono">
            <span className="w-2 h-2 rounded-full bg-accent/40 animate-pulse" />
            Coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
