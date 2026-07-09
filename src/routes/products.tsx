import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { productCategories, findSubcategory } from "@/data/categories";
import { ProductImage } from "@/components/site/ProductImage";
import { ArrowRight, Search, X } from "lucide-react";
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

  const cats = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return products.filter(p => {
      if (cat !== "All" && p.category !== cat) return false;
      if (q !== "" && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (activeSub) {
        const hay = `${p.name} ${p.tagline ?? ""} ${p.category}`.toLowerCase();
        if (!activeSub.sub.match.some(m => hay.includes(m.toLowerCase()))) return false;
      }
      return true;
    });
  }, [cat, q, activeSub]);

  const clearSub = () => navigate({ search: {} });

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            {activeSub ? activeSub.primary.label : "Product Catalog"}
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-balance">
            {activeSub ? activeSub.sub.label : "Engineering equipment for global B2B projects"}
          </h1>
          <p className="mt-5 text-white/85 max-w-2xl text-lg">
            {activeSub
              ? `Browse our ${activeSub.sub.label.toLowerCase()} range — customizable to your project specifications.`
              : "Practical configurations, proven components and customizable to your project — explore our full product range."}
          </p>
        </div>
      </section>

      <section className="py-12 border-b sticky top-16 bg-background/95 backdrop-blur z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-2 items-center">
            {activeSub && (
              <button
                onClick={clearSub}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground"
              >
                {activeSub.sub.label}
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/70"}`}
              >{c}</button>
            ))}
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search products..."
              className="pl-9 pr-4 py-2 rounded-md border bg-background text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {list.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products match your selection.</p>
              {activeSub && (
                <button onClick={clearSub} className="mt-4 text-primary font-semibold text-sm">Clear filter →</button>
              )}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map(p => (
                <Link key={p.id} to="/products/$productId" params={{ productId: p.id }} className="group bg-card rounded-xl border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <ProductImage src={p.image} alt={p.name} className="w-full h-full" imgClassName="object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-primary font-semibold uppercase tracking-wider">{p.category}</div>
                    <h3 className="mt-2 text-lg font-bold">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">View details <ArrowRight className="w-4 h-4" /></div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full category directory */}
      <section className="py-16 bg-secondary/40 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Browse all categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map(cat => (
              <div key={cat.slug} className="bg-card border rounded-xl p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">{cat.label}</h3>
                <ul className="space-y-1.5">
                  {cat.subcategories.map(s => (
                    <li key={s.slug}>
                      <Link
                        to="/products"
                        search={{ sub: s.slug }}
                        className="text-sm text-foreground/80 hover:text-primary hover:underline"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
