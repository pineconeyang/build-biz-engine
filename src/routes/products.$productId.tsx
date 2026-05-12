import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products } from "@/data/products";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, Mail, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/products/$productId")({
  head: ({ params }) => {
    const p = products.find(x => x.id === params.productId);
    return {
      meta: [
        { title: `${p?.name ?? "Product"} — LONGLI Machinery` },
        { name: "description", content: p?.tagline ?? "Industrial engineering equipment." },
        { property: "og:title", content: p?.name ?? "Product" },
        { property: "og:description", content: p?.tagline ?? "" },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const p = products.find(x => x.id === params.productId);
    if (!p) throw notFound();
    return p;
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-3xl font-bold">Product not found</h1>
      <Link to="/products" className="mt-6 inline-block text-primary font-semibold">← Back to products</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="py-20 text-center text-destructive">{error.message}</div>,
});

function ProductDetail() {
  const { productId } = Route.useParams();
  const p = products.find(x => x.id === productId)!;
  const [tab, setTab] = useState<"overview" | "specs" | "applications">("overview");
  const related = products.filter(x => x.id !== p.id).slice(0, 3);

  return (
    <>
      <section className="bg-secondary py-6 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground flex gap-2 items-center">
          <Link to="/" className="hover:text-primary">Home</Link><span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link><span>/</span>
          <span className="text-foreground">{p.name}</span>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="rounded-2xl overflow-hidden bg-muted shadow-elegant">
              <img src={p.image} alt={p.name} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[p.image, p.image, p.image].map((src, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden border bg-muted">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs text-primary font-semibold uppercase tracking-widest">{p.category}</div>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-balance">{p.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{p.tagline}</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {p.specs.slice(0, 4).map(s => (
                <div key={s.label} className="p-4 bg-secondary rounded-lg">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                  <div className="mt-1 font-semibold text-foreground">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-elegant">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={() => alert("Datasheet will be sent to your email after inquiry.")} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border font-semibold hover:bg-secondary transition">
                <Download className="w-4 h-4" /> Datasheet
              </button>
            </div>

            <div className="mt-8 pt-8 border-t flex flex-wrap gap-6 text-sm">
              <a href="tel:+8613800000000" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Phone className="w-4 h-4" /> +86 138 0000 0000</a>
              <a href="mailto:sales@longli-machinery.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" /> sales@longli-machinery.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 border-b mb-8">
            {([
              ["overview", "Overview"],
              ["specs", "Specifications"],
              ["applications", "Applications"],
            ] as const).map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} className={`px-5 py-3 font-semibold text-sm transition border-b-2 ${tab === k ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{l}</button>
            ))}
          </div>
          {tab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {p.features.map(f => (
                    <li key={f} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-foreground">{f}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {tab === "specs" && (
            <div className="bg-card rounded-xl border overflow-hidden">
              <table className="w-full">
                <tbody>
                  {p.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 ? "bg-muted/40" : ""}>
                      <td className="px-6 py-4 font-semibold text-foreground w-1/3">{s.label}</td>
                      <td className="px-6 py-4 text-muted-foreground">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab === "applications" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.applications.map(a => (
                <div key={a} className="p-6 bg-card rounded-lg border">
                  <div className="w-10 h-10 rounded bg-gradient-accent grid place-items-center text-primary-foreground font-bold mb-3">✓</div>
                  <div className="font-semibold">{a}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Related products</h2>
            <Link to="/products" className="text-primary font-semibold inline-flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> All products</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(r => (
              <Link key={r.id} to="/products/$productId" params={{ productId: r.id }} className="group bg-card rounded-xl border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-muted"><img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" /></div>
                <div className="p-5">
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider">{r.category}</div>
                  <h3 className="mt-2 font-bold">{r.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
