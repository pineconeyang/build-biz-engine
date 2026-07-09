import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { productCategories, findSubcategory } from "@/data/categories";
import { ProductImage } from "@/components/site/ProductImage";
import { ArrowRight, Search, X, ChevronDown } from "lucide-react";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";

const searchSchema = z.object({
  sub: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/products")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Products — LONGLI Machinery" },
      { name: "description", content: "Screw air compressors, oil-free compressors, portable diesel units, after-treatment equipment and spare parts — full B2B catalog." },
      { property: "og:title", content: "Products — LONGLI Machinery" },
      { property: "og:description", content: "Full B2B catalog of compressors, dryers, air tanks and parts." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { sub } = Route.useSearch();
  const navigate = Route.useNavigate();
  const activeSub = findSubcategory(sub || undefined);

  const [q, setQ] = useState("");
  // Which primary categories are expanded — default: all open, or just the one containing active sub
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    productCategories.forEach(c => { init[c.slug] = true; });
    return init;
  });

  const list = useMemo(() => {
    return products.filter(p => {
      if (q !== "" && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (activeSub) {
        const hay = `${p.name} ${p.tagline ?? ""} ${p.category}`.toLowerCase();
        if (!activeSub.sub.match.some(m => hay.includes(m.toLowerCase()))) return false;
      }
      return true;
    });
  }, [q, activeSub]);

  const clearSub = () => navigate({ search: { sub: "" } });

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            {activeSub ? activeSub.primary.label : "Product Catalog"}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            {activeSub ? activeSub.sub.label : "Engineering equipment for global B2B projects"}
          </h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            {activeSub
              ? `Browse our ${activeSub.sub.label.toLowerCase()} — customizable to your specifications.`
              : "Practical configurations, proven components and customizable to your project."}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-card border rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-bold uppercase tracking-wider">Categories</h2>
                  {activeSub && (
                    <button onClick={clearSub} className="text-xs text-primary font-semibold hover:underline">
                      Clear
                    </button>
                  )}
                </div>

                <button
                  onClick={clearSub}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium mb-2 transition ${
                    !activeSub ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-foreground/80"
                  }`}
                >
                  All Products
                </button>

                <div className="flex flex-col gap-1">
                  {productCategories.map(cat => {
                    const isOpen = openGroups[cat.slug];
                    const hasActive = activeSub?.primary.slug === cat.slug;
                    return (
                      <div key={cat.slug} className="border-t pt-2 mt-2 first:border-t-0 first:pt-0 first:mt-0">
                        <button
                          onClick={() => setOpenGroups(g => ({ ...g, [cat.slug]: !g[cat.slug] }))}
                          className={`w-full flex items-center justify-between text-left px-2 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition ${
                            hasActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                          }`}
                        >
                          <span className="pr-2">{cat.label}</span>
                          <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${isOpen ? "" : "-rotate-90"}`} />
                        </button>
                        {isOpen && (
                          <ul className="mt-1 flex flex-col gap-0.5">
                            {cat.subcategories.map(s => {
                              const active = activeSub?.sub.slug === s.slug;
                              return (
                                <li key={s.slug}>
                                  <Link
                                    to="/products"
                                    search={{ sub: s.slug }}
                                    className={`block px-3 py-1.5 rounded-md text-sm transition ${
                                      active
                                        ? "bg-primary text-primary-foreground font-semibold"
                                        : "text-foreground/75 hover:bg-secondary hover:text-primary"
                                    }`}
                                  >
                                    {s.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Right: search + grid */}
            <div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  {activeSub && (
                    <button
                      onClick={clearSub}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground"
                    >
                      {activeSub.sub.label}
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {list.length} product{list.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    placeholder="Search products..."
                    className="pl-9 pr-4 py-2 rounded-md border bg-background text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {list.length === 0 ? (
                <div className="text-center py-20 border rounded-xl bg-card">
                  <p className="text-muted-foreground">No products match your selection.</p>
                  {(activeSub || q) && (
                    <button
                      onClick={() => { clearSub(); setQ(""); }}
                      className="mt-4 text-primary font-semibold text-sm"
                    >
                      Clear filters →
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {list.map(p => (
                    <Link key={p.id} to="/products/$productId" params={{ productId: p.id }} className="group bg-card rounded-xl border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all">
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <ProductImage src={p.image} alt={p.name} className="w-full h-full" imgClassName="object-cover group-hover:scale-105 transition duration-700" />
                      </div>
                      <div className="p-5">
                        <div className="text-xs text-primary font-semibold uppercase tracking-wider">{p.category}</div>
                        <h3 className="mt-2 text-base font-bold line-clamp-2">{p.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">View details <ArrowRight className="w-4 h-4" /></div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
