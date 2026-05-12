import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/data/products";
import { ArrowRight, Search } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — LONGLI Machinery" },
      { name: "description", content: "Screw air compressors, piston compressors, refrigerated dryers, air tanks, PSA nitrogen systems and spare parts — full B2B catalog." },
      { property: "og:title", content: "Products — LONGLI Machinery" },
      { property: "og:description", content: "Full B2B catalog of compressors, dryers, air tanks and parts." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const cats = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const list = products.filter(p => (cat === "All" || p.category === cat) && (q === "" || p.name.toLowerCase().includes(q.toLowerCase())));

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Product Catalog</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-balance">Engineering equipment for global B2B projects</h1>
          <p className="mt-5 text-white/85 max-w-2xl text-lg">Practical configurations, proven components and customizable to your project — explore our full product range.</p>
        </div>
      </section>

      <section className="py-12 border-b sticky top-16 bg-background/95 backdrop-blur z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
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
            <p className="text-center text-muted-foreground py-20">No products match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map(p => (
                <Link key={p.id} to="/products/$productId" params={{ productId: p.id }} className="group bg-card rounded-xl border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
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
    </>
  );
}
