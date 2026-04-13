export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-muted">
          Built by Elliott Cho &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
