"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;

    const onScroll = () => {
      const sectionEls = sections.map((s) => document.getElementById(s.id));
      const scrollTop = container.scrollTop;
      const viewportHeight = window.innerHeight;

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.offsetTop <= scrollTop + viewportHeight * 0.4) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const container = document.querySelector(".snap-container");
    const el = document.getElementById(id);
    if (container && el) {
      container.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <span
            className={`text-xs font-mono transition-all duration-300 ${
              hoveredIndex === i || active === s.id
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2"
            } ${active === s.id ? "text-accent" : "text-muted"}`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === s.id
                ? "w-3 h-3 bg-accent glow"
                : "w-2 h-2 bg-muted/40 group-hover:bg-muted"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
