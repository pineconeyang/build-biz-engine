import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings2, PackageCheck, Truck, Headphones, FileSearch, Hammer, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LONGLI Machinery" },
      { name: "description", content: "Customization, OEM branding, spare parts supply, export packaging, project matching and after-sales support for global B2B customers." },
      { property: "og:title", content: "Services — LONGLI Machinery" },
      { property: "og:description", content: "End-to-end engineering equipment service for overseas buyers." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Settings2, title: "Customization & OEM", desc: "Configuration adjustment, attachment matching, color customization, logo branding and special working condition solutions tailored to your project." },
  { icon: PackageCheck, title: "Spare Parts Supply", desc: "Filters, main units, motors, lubricants and pre-packed maintenance kits — continuous after-sales parts support for your fleet." },
  { icon: Truck, title: "Export & Logistics", desc: "Reinforced wooden case, container loading, full export documentation and shipping coordination to your destination port." },
  { icon: Headphones, title: "After-Sales Support", desc: "Remote technical support, troubleshooting, parts matching and product materials for long-term overseas partners." },
  { icon: FileSearch, title: "Model Selection", desc: "Working-condition analysis and model recommendation — get the right machine the first time." },
  { icon: Hammer, title: "Project Matching", desc: "Bulk order coordination, batch inspection and project-specific equipment configuration for contractors." },
];

const steps = [
  { n: "01", t: "Inquiry & Requirement", d: "Share your specs, working conditions and project plan." },
  { n: "02", t: "Technical Confirmation", d: "We propose configuration & answer technical questions." },
  { n: "03", t: "Quotation & Contract", d: "Clear pricing, payment terms and lead time." },
  { n: "04", t: "Production & QC", d: "Production coordination with strict pre-shipment inspection." },
  { n: "05", t: "Export Packing & Shipping", d: "Reinforced packaging and full export documentation." },
  { n: "06", t: "After-Sales Support", d: "Parts supply, technical support and long-term cooperation." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Our Services</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-balance max-w-3xl">End-to-end service from inquiry to after-sales</h1>
          <p className="mt-5 text-white/85 max-w-2xl text-lg">Practical configurations, reliable delivery and continuous support — built for the real needs of overseas B2B buyers.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon,title,desc})=>(
            <div key={title} className="p-8 bg-card border rounded-xl hover:shadow-elegant hover:-translate-y-1 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent grid place-items-center text-primary-foreground mb-5"><Icon className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Cooperation Process</p>
          <h2 className="text-4xl font-bold text-balance max-w-2xl">A clear, predictable process from inquiry to delivery</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(s=>(
              <div key={s.n} className="relative p-7 bg-card border rounded-xl">
                <div className="text-5xl font-bold text-primary/20 absolute top-4 right-4">{s.n}</div>
                <h3 className="text-lg font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">Start a Project <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
