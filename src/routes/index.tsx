import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { ProductImage } from "@/components/site/ProductImage";
import { products, siteImages } from "@/data/products";
import {
  ShieldCheck, Wrench, PackageCheck, Settings2, Truck, Headphones,
  Globe2, Award, ArrowRight, CheckCircle2, Factory, Boxes,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LONGLI Machinery — Reliable Construction Machinery & Spare Parts Export" },
      { name: "description", content: "Factory-direct supplier of screw air compressors, piston compressors, refrigerated dryers, air tanks and customized engineering equipment for global B2B markets." },
      { property: "og:title", content: "LONGLI Machinery — Global B2B Equipment Supplier" },
      { property: "og:description", content: "Reliable Machines. Complete Parts. Stable Global Supply." },
    ],
  }),
  component: Home,
});

const advantages = [
  { icon: ShieldCheck, title: "Factory-Level Quality Control", desc: "Strict QC from selection and configuration to pre-shipment inspection — engine, hydraulic, structure and operating condition checked before delivery." },
  { icon: Wrench, title: "Durable Machines, Low Failure Risk", desc: "Selected for high-load, long-hour, outdoor and demanding project use. Practical configurations reduce failure and maintenance pressure." },
  { icon: Award, title: "Complete Machine Warranty", desc: "Warranty support plus operation guidance, troubleshooting and maintenance communication across the full equipment life cycle." },
  { icon: PackageCheck, title: "Full Spare Parts Supply", desc: "Stable supply of filters, main units, motors and maintenance kits — reduce downtime and strengthen your after-sales capability." },
  { icon: Settings2, title: "Customization & Modification", desc: "Configuration adjustment, attachment matching, color customization, OEM logo branding and special working condition solutions." },
  { icon: Truck, title: "Bulk Order Delivery Capability", desc: "Model planning, batch coordination, inspection, reinforced export packaging and container loading for distributors and projects." },
  { icon: Headphones, title: "Overseas After-Sales Support", desc: "Remote technical support, parts matching, product materials and basic training for long-term overseas partners." },
  { icon: Globe2, title: "Long-Term Export Experience", desc: "We understand configuration, packaging, documents, parts availability and supply stability — efficient communication, confident purchase." },
];

function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Trust strip */}
      <section className="bg-secondary border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Factory, label: "5,000 m² Production Base" },
            { icon: Globe2, label: "Export to 60+ Countries" },
            { icon: Boxes, label: "Complete Parts Supply" },
            { icon: ShieldCheck, label: "12-Month Warranty" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="w-7 h-7 text-primary" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Brand Positioning</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              A reliable export-oriented partner — not just a low-price machine seller.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              LONGLI Machinery is positioned as a reliable export-oriented supplier of construction machinery, engineering equipment and mechanical spare parts. We focus on long-term project value: stable equipment performance, clear technical communication, reliable delivery, complete parts support and responsible after-sales cooperation.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Factory-direct supply with stable production capacity",
                "Complete machine export & customized engineering equipment",
                "Continuous spare parts support for the full life cycle",
                "Overseas project matching for contractors & distributors",
              ].map(t => (
                <li key={t} className="flex gap-3 text-foreground"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /> {t}</li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4">
              <Link to="/about" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">More About Us <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border font-semibold hover:bg-secondary transition">Talk to Sales</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
            <img src={siteImages.factory} alt="LONGLI Machinery production base" className="relative rounded-2xl shadow-elegant w-full h-[460px] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-5 shadow-elegant max-w-[220px]">
              <div className="text-3xl font-bold text-primary">2010</div>
              <div className="text-xs text-muted-foreground mt-1">Founded · Long-term focus on global engineering machinery export</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Product Range</p>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Engineering equipment built for global projects</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">View all products <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map(p => (
              <Link key={p.id} to="/products/$productId" params={{ productId: p.id }} className="group bg-card rounded-xl overflow-hidden border hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <ProductImage src={p.image} alt={p.name} className="w-full h-full flex items-center justify-center bg-white" imgClassName="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider">{p.category}</div>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">View details <ArrowRight className="w-4 h-4" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Why global customers choose LONGLI Machinery</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              More than a supplier — a long-term equipment partner for distributors, contractors, rental companies, project buyers and industrial users worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="group p-7 rounded-xl border bg-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent grid place-items-center text-primary-foreground mb-5 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs text-muted-foreground font-mono mb-1">0{i + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Industries Served</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Trusted across industries & continents</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Laser Cutting","Construction","Textiles","Oil & Gas","Wastewater","Road Building","Mining","Agriculture","Municipal","Infrastructure","Food & Pkg.","Electronics"].map(x => (
              <div key={x} className="bg-card border rounded-lg p-5 text-center text-sm font-medium text-foreground hover:border-primary hover:text-primary transition cursor-default">{x}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-primary-foreground shadow-elegant">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 40%)" }} />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to start your next project with reliable equipment?</h2>
                <p className="mt-4 text-white/85 max-w-2xl">Send us your specifications, working conditions or project plan. Our export team replies within 12 hours with practical recommendations.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-primary font-semibold hover:bg-white/90 transition">Request Quote <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/40 text-white font-semibold hover:bg-white/10 transition">Browse Catalog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
