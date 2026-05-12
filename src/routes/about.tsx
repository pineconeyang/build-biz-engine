import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/products";
import { Building2, Globe2, Users2, Trophy, Target, Eye, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — LONGLI Machinery" },
      { name: "description", content: "Founded in 2010, Nantong Longli Machinery is a professional source supplier of construction machinery and engineering equipment for global B2B markets." },
      { property: "og:title", content: "About LONGLI Machinery" },
      { property: "og:description", content: "Reliable export-oriented engineering equipment partner." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative py-28 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 0, transparent 40%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">About Us</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold max-w-3xl text-balance">A trusted source supplier for global engineering markets</h1>
          <p className="mt-6 text-white/85 max-w-2xl text-lg">Reliable equipment, complete parts support and export-oriented service — built around the real needs of overseas B2B buyers.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <img src={siteImages.factory} alt="LONGLI factory and assembly base" className="rounded-2xl shadow-elegant w-full h-[460px] object-cover" />
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Our Story</p>
            <h2 className="mt-3 text-4xl font-bold text-balance">15+ years focused on engineering machinery export</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in 2010, Nantong Longli Machinery Equipment Co., Ltd. has been focusing on construction machinery, engineering equipment and mechanical spare parts for global markets. Our production base covers approximately 5,000 square meters and is equipped with assembly areas, parts warehouses, inspection facilities and export packing areas.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From machine selection and technical confirmation to production coordination, pre-shipment inspection, reinforced export packaging and after-sales support, we provide practical and efficient service for machinery dealers, distributors, contractors, rental companies and project buyers worldwide.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[{k:"2010",v:"Founded"},{k:"5000m²",v:"Factory"},{k:"60+",v:"Countries"}].map(s=>(
                <div key={s.v}><div className="text-3xl font-bold text-primary">{s.k}</div><div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.v}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", desc: "Help global customers buy the right machines, reduce purchasing risk and build long-term success in their local markets." },
            { icon: Eye, title: "Vision", desc: "To become a trusted long-term engineering equipment partner for distributors, contractors and project buyers worldwide." },
            { icon: Heart, title: "Values", desc: "Reliability over short-term price. Clear technical communication. Responsible after-sales. Long-term cooperation." },
          ].map(({icon:Icon,title,desc})=>(
            <div key={title} className="p-8 bg-card rounded-xl border">
              <Icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-4xl font-bold text-balance max-w-2xl">A complete supply chain under one roof</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, k: "Assembly Area", v: "Equipment integration & functional testing" },
              { icon: Trophy, k: "QC Inspection", v: "Pre-shipment inspection & test reports" },
              { icon: Globe2, k: "Export Packing", v: "Reinforced wooden case & container loading" },
              { icon: Users2, k: "Engineering Team", v: "Configuration matching & technical support" },
            ].map(({icon:Icon,k,v})=>(
              <div key={k} className="p-6 bg-card border rounded-xl hover:shadow-elegant transition">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <div className="font-bold text-foreground">{k}</div>
                <div className="text-sm text-muted-foreground mt-2">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-balance">Markets & customers</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">Long-term partnerships with clients from Europe, the United States, Mexico, the Middle East and South America — across construction, laser cutting, textiles, oil, wastewater treatment, mining, agriculture, municipal engineering and infrastructure.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
            {["Europe","United States","Mexico","Middle East","South America","Southeast Asia","Africa","Australia","CIS","Worldwide"].map(r=>(
              <div key={r} className="bg-card border rounded-lg p-4 text-center text-sm font-medium hover:border-primary hover:text-primary transition">{r}</div>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">Partner with us <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
