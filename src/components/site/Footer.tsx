export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-serif text-primary">La Mesa de Elena</p>
        <p>© {new Date().getFullYear()} — Hecho con cariño en Buenos Aires.</p>
      </div>
    </footer>
  );
}
