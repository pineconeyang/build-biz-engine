import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/longli-logo.jpg.asset.json";
import { productCategories } from "@/data/categories";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/services", label: "Services" },
  { to: "/quality", label: "Quality" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="LONGLI" className="h-10 w-auto object-contain" />
            <div className="leading-tight">
              <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Machinery</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(n =>
              n.hasDropdown ? (
                <div key={n.to} className="relative group">
                  <Link
                    to={n.to}
                    activeProps={{ className: "text-primary bg-secondary" }}
                    className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-colors inline-flex items-center gap-1"
                  >
                    {n.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="bg-background border rounded-lg shadow-elegant p-2 w-[720px] grid grid-cols-2 gap-1">
                      {productCategories.map(cat => (
                        <div key={cat.slug} className="p-3">
                          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{cat.label}</div>
                          <div className="flex flex-col gap-1">
                            {cat.subcategories.map(sub => (
                              <Link
                                key={sub.slug}
                                to="/products"
                                search={{ sub: sub.slug } as never}
                                className="text-sm text-foreground/80 hover:text-primary hover:bg-secondary rounded px-2 py-1.5 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-primary bg-secondary" }}
                  className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
                >
                  {n.label}
                </Link>
              )
            )}
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
        <div className="lg:hidden border-t bg-background max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map(n =>
              n.hasDropdown ? (
                <div key={n.to} className="flex flex-col">
                  <div className="flex items-center">
                    <Link to={n.to} onClick={() => setOpen(false)} className="flex-1 px-3 py-2 rounded-md hover:bg-secondary text-sm">
                      {n.label}
                    </Link>
                    <button
                      onClick={() => setMobileProductsOpen(v => !v)}
                      className="p-2"
                      aria-label="Toggle categories"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {mobileProductsOpen && (
                    <div className="pl-4 flex flex-col gap-2 pb-2">
                      {productCategories.map(cat => (
                        <div key={cat.slug}>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-primary px-3 pt-2">{cat.label}</div>
                          {cat.subcategories.map(sub => (
                            <Link
                              key={sub.slug}
                              to="/products"
                              search={{ sub: sub.slug } as never}
                              onClick={() => setOpen(false)}
                              className="block px-3 py-1.5 rounded-md hover:bg-secondary text-sm text-foreground/80"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-secondary text-sm">{n.label}</Link>
              )
            )}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm text-center font-semibold">Get Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
