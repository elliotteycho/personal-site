"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const container = document.querySelector(".snap-container");
    const el = document.getElementById(id);
    if (container && el) {
      container.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="snap-section grid-bg flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div
          className={`transition-all duration-1000 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-mono text-accent mb-6 tracking-widest uppercase">
            Elliott Cho
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight gradient-text leading-tight">
            I build products
            <br />
            that matter.
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mt-8 text-lg text-muted font-light leading-relaxed max-w-xl mx-auto">
            Product manager, builder, and strategist at the intersection
            of technology and people.
          </p>
        </div>

        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => scrollTo("experience")}
            className="px-7 py-3.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-all glow cursor-pointer"
          >
            See My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-7 py-3.5 border border-border text-sm font-medium rounded-lg text-foreground hover:border-accent hover:text-accent transition-all cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-5 h-9 rounded-full border-2 border-muted/30 mx-auto flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-muted/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
