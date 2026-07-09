import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { productCategories, findSubcategory } from "@/data/categories";
import { ProductImage } from "@/components/site/ProductImage";
import { ArrowRight, Search, X, ChevronDown, Filter } from "lucide-react";
import { z } from "zod";

const searchSchema = z.object({
  sub: z.string().optional(),
});

export const Route = createFileRoute("/products")({
  validateSearch: searchSchema,
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
  const activeSub = findSubcategory(sub);

  const [q, setQ] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    productCategories.forEach(c => { init[c.slug] = activeSub ? activeSub.primary.slug === c.slug : true; });
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

  const clearSub = () => navigate({ search: {} });
  const toggleGroup = (slug: string) => setOpenGroups(s => ({ ...s, [slug]: !s[slug] }));

  const countForSub = (matches: string[]) =>
    products.filter(p => {
      const hay = `${p.name} ${p.tagline ?? ""} ${p.category}`.toLowerCase();
      return matches.some(m => hay.includes(m.toLowerCase()));
    }).length;

  const Sidebar = (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="lg:sticky lg:top-24 space-y-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Categories</div>
          <div className="bg-card border rounded-xl divide-y">
            <button
              onClick={clearSub}
              className={`w-full text-left px-4 py-3 text-sm font-semibold transition ${!activeSub ? "text-primary" : "hover:bg-secondary/50"}`}
            >
              All products <span className="text-muted-foreground font-normal">({products.length})</span>
            </button>
            {productCategories.map(cat => {
              const isOpen = openGroups[cat.slug];
              return (
                <div key={cat.slug}>
                  <button
                    onClick={() => toggleGroup(cat.slug)}
                    className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-secondary/50 transition"
                  >
                    <span className="text-sm font-semibold">{cat.label}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pb-2">
                      {cat.subcategories.map(s => {
                        const isActive = activeSub?.sub.slug === s.slug;
                        const count = countForSub(s.match);
                        return (
                          <Link
                            key={s.slug}
                            to="/products"
                            search={{ sub: s.slug }}
                            onClick={() => setMobileFiltersOpen(false)}
                            className={`flex items-center justify-between gap-2 pl-6 pr-4 py-2 text-sm transition ${
                              isActive
                                ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                                : "text-foreground/75 hover:text-primary hover:bg-secondary/50 border-l-2 border-transparent"
                            }`}
                          >
                            <span>{s.label}</span>
                            <span className="text-xs text-muted-foreground">{count}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );

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
          <p className="mt-4 text-white/85 max-w-2xl text-base md:text-lg">
            {activeSub
              ? `Browse our ${activeSub.sub.label.toLowerCase()} range — customizable to your project specifications.`
              : "Practical configurations, proven components and customizable to your project — explore our full product range."}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between gap-3">
            <button
              onClick={() => setMobileFiltersOpen(v => !v)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border bg-card text-sm font-semibold"
            >
              <Filter className="w-4 h-4" />
              {mobileFiltersOpen ? "Hide filters" : "Show filters"}
            </button>
            {activeSub && (
              <button onClick={clearSub} className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Clear <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block`}>{Sidebar}</div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{list.length}</span> product{list.length !== 1 && "s"}
                  {activeSub && <> in <span className="font-semibold text-foreground">{activeSub.sub.label}</span></>}
                </p>
                {activeSub && (
                  <button
                    onClick={clearSub}
                    className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground"
                  >
                    {activeSub.sub.label}
                    <X className="w-3 h-3" />
                  </button>
                )}
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
                {activeSub && (
                  <button onClick={clearSub} className="mt-4 text-primary font-semibold text-sm">Clear filter →</button>
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
                      <h3 className="mt-2 text-base font-bold leading-tight">{p.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                      <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">View details <ArrowRight className="w-4 h-4" /></div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
