export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-accent tracking-wide mb-2">
          01
        </h2>
        <h3 className="text-3xl font-bold text-foreground mb-8">About Me</h3>

        <div className="space-y-5 text-base text-muted leading-relaxed">
          <p>
            I'm a sophomore at Vanderbilt University studying Computer Science
            and Human &amp; Organizational Development with a minor in Business.
            I care about building products that solve real problems for real
            people, and I bring both the technical depth and the human
            understanding to do it well.
          </p>
          <p>
            My work spans product management, data analysis, and software
            engineering. I've led product discovery at a venture-backed charity
            tech startup, built financial models that secured board approval for
            a $1.8M nonprofit expansion, and engineered data pipelines that
            serve 200+ operations users at Vanderbilt IT.
          </p>
          <p>
            Outside of work, I'm a founding member of Lambda Phi Epsilon, a
            Deloitte &amp; Bain case competition finalist, and I spend my free
            time chasing pour-over coffee, watching Formula 1, and analyzing
            movies nobody asked me to analyze.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "GPA", value: "3.5" },
            { label: "Graduation", value: "2028" },
            { label: "Experiences", value: "14+" },
            { label: "Scholar", value: "Pioneer & QuestBridge" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-lg p-4 text-center"
            >
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
