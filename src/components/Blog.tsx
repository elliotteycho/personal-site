const posts = [
  {
    title: "Coming Soon",
    date: "",
    excerpt:
      "I'm working on writing about product management, AI leverage in daily workflows, and lessons from building things as a student. Stay tuned.",
    slug: null,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-accent tracking-wide mb-2">
          04
        </h2>
        <h3 className="text-3xl font-bold text-foreground mb-10">Writing</h3>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="border border-border rounded-xl p-6 hover:border-accent/30 transition-all"
            >
              <p className="text-xs text-muted mb-2">{post.date}</p>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {post.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
