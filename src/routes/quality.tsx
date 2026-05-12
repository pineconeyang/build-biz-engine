import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Microscope, Boxes, ClipboardCheck, Award, ArrowRight } from "lucide-react";
import { products, siteImages } from "@/data/products";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Control — LONGLI Machinery" },
      { name: "description", content: "Strict factory-level QC from selection and configuration to pre-shipment inspection. Reliable performance for global jobsites." },
      { property: "og:title", content: "Quality Control — LONGLI Machinery" },
      { property: "og:description", content: "Strict QC, reinforced export packaging, 12-month warranty." },
    ],
  }),
  component: QualityPage,
});

const qcPoints = [
  { icon: Microscope, title: "Component Selection", desc: "Branded airends, IE3 motors and proven hydraulic components." },
  { icon: ClipboardCheck, title: "Configuration Confirmation", desc: "Customer working condition matched against equipment configuration." },
  { icon: ShieldCheck, title: "Pre-Shipment Inspection", desc: "Engine performance, hydraulic system, structural strength, operating condition and appearance." },
  { icon: Boxes, title: "Reinforced Export Packing", desc: "Wooden case, fumigation treatment, moisture protection and container fixing." },
  { icon: Award, title: "Documentation & Certification", desc: "Test reports, COA, packing list, BL and certificate of origin." },
];

function QualityPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Quality Control</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-balance max-w-3xl">Factory-level QC for reliable field performance</h1>
          <p className="mt-5 text-white/85 max-w-2xl text-lg">Reliability matters more than a one-time low price. We control quality from selection to delivery.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img src={siteImages.detailAirend} alt="Quality control inspection of airend" className="rounded-2xl shadow-elegant w-full h-[460px] object-cover" />
          <div>
            <h2 className="text-4xl font-bold text-balance">Five-stage quality control system</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">From machine selection and configuration confirmation to pre-shipment inspection, every step is documented to ensure reliable performance on overseas jobsites.</p>
            <div className="mt-8 space-y-4">
              {qcPoints.map(({icon:Icon,title,desc},i)=>(
                <div key={title} className="flex gap-4 p-4 rounded-lg hover:bg-secondary transition">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent grid place-items-center text-primary-foreground shrink-0"><Icon className="w-6 h-6" /></div>
                  <div>
                    <div className="text-xs text-primary font-mono">STAGE 0{i+1}</div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-balance max-w-2xl">Standards & certifications</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">Our equipment and pressure vessels are produced and tested according to recognized international and domestic standards.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {["ISO 9001","CE","ASME","PED","GB150","GOST","SGS","CCC","EAC","SASO","CO","FORM E"].map(c=>(
              <div key={c} className="bg-card border rounded-lg py-6 text-center font-bold text-foreground hover:border-primary hover:text-primary transition">{c}</div>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">Request QC Documents <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
