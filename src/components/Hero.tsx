export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-2xl text-center">
        <p className="text-sm font-mono text-accent mb-4 tracking-wide">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Elliott Cho
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-muted font-light leading-relaxed">
          I build products that matter.
        </p>
        <p className="mt-6 max-w-lg mx-auto text-base text-muted/80 leading-relaxed">
          CS &amp; Human/Organizational Development at Vanderbilt. Product
          manager, builder, and strategist working at the intersection of
          technology and people.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#experience"
            className="px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-sm font-medium rounded-lg text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
