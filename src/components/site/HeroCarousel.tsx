import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import { banners } from "@/data/products";

const slides = [
  {
    eyebrow: "Global B2B Export",
    title: "Reliable Machines. Complete Parts. Stable Global Supply.",
    desc: "A trusted source supplier of screw air compressors, piston compressors, refrigerated dryers, air tanks and customized engineering equipment for distributors, contractors and project buyers worldwide.",
  },
  {
    eyebrow: "Factory-Direct Supply",
    title: "Engineered for Real Jobsites & Long-Hour Operation.",
    desc: "Practical configurations, proven components and strict pre-shipment inspection — built for high-load, long-duty industrial use across global markets.",
  },
  {
    eyebrow: "All-in-One Systems",
    title: "Integrated Compressor + Tank + Dryer Solutions.",
    desc: "Space-saving skid-mounted units delivered ready to run — one supplier for the complete compressed air package.",
  },
  {
    eyebrow: "Customized Engineering",
    title: "PSA Nitrogen, Oxygen & Special Gas Skids.",
    desc: "Turnkey gas generation systems engineered to your purity, flow and site requirements — from design to container loading.",
  },
  {
    eyebrow: "Project & OEM Support",
    title: "From Model Selection to Container Loading.",
    desc: "Configuration adjustment, OEM branding, reinforced export packaging, complete spare parts and responsible after-sales — one partner for the full project lifecycle.",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI(p => (p + d + slides.length) % slides.length);

  return (
    <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
      {banners.map((b, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        >
          <img src={b} alt="Industrial machinery" className="w-full h-full object-cover scale-125 animate-slide-fade" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.08_250/0.92)] via-[oklch(0.25_0.1_250/0.7)] to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div key={i} className="max-w-2xl text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium tracking-wide uppercase mb-6">
            <ShieldCheck className="w-3.5 h-3.5" /> {slides[i].eyebrow}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">{slides[i].title}</h1>
          <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">{slides[i].desc}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/products" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-primary font-semibold hover:bg-white/90 transition shadow-elegant">
              Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/40 text-white font-semibold hover:bg-white/10 transition">
              Request a Quote
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "15+", v: "Years Export" },
              { k: "60+", v: "Countries Served" },
              { k: "5000m²", v: "Production Base" },
            ].map(s => (
              <div key={s.v}>
                <div className="text-3xl font-bold">{s.k}</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 grid place-items-center text-white hover:bg-white/20 transition">
        <ChevronLeft />
      </button>
      <button onClick={() => go(1)} aria-label="Next" className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 grid place-items-center text-white hover:bg-white/20 transition">
        <ChevronRight />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-white" : "w-5 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
