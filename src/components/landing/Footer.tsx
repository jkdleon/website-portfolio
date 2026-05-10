export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          &copy; 2026 James Kyle De Leon
        </p>
        <p className="font-mono text-[10px] tracking-widest text-subtle/60 mt-2">
          Design inspired by{" "}
          <a href="https://abosh.io" className="hover:text-subtle transition-colors">
            abosh.io
          </a>
          . No copyright intended.
        </p>
      </div>
    </footer>
  );
}
