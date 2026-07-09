import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/quality", label: "Quality" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-gradient-accent grid place-items-center text-primary-foreground font-bold">L</div>
            <div className="leading-tight">
              <div className="font-bold text-foreground">LONGLI</div>
              <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Machinery</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(n => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary bg-secondary" }}
                className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+8613800000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4" /> +86 138 0000 0000
            </a>
            <Link to="/contact" className="px-4 py-2 rounded-md bg-gradient-accent text-primary-foreground text-sm font-semibold hover:opacity-90 transition shadow-elegant">
              Get Quote
            </Link>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-secondary text-sm">{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm text-center font-semibold">Get Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
