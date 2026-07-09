export type Subcategory = {
  slug: string;
  label: string;
  /** Keywords used to loosely match product name/tagline/category for filtering. */
  match: string[];
};

export type PrimaryCategory = {
  slug: string;
  label: string;
  subcategories: Subcategory[];
};

export const productCategories: PrimaryCategory[] = [
  {
    slug: "oil-injected-screw",
    label: "Oil-injected Screw Air Compressor",
    subcategories: [
      { slug: "combined-laser", label: "16~20bar Combined Screw for Laser Cutting", match: ["laser", "combined", "16bar", "20bar"] },
      { slug: "fixed-speed", label: "Fixed Speed Screw Air Compressor", match: ["fixed speed", "fixed-speed"] },
      { slug: "variable-speed", label: "Variable Speed Screw Air Compressor", match: ["vsd", "variable", "permanent magnet", "pm vsd"] },
      { slug: "two-stage", label: "Two Stage Screw Air Compressor", match: ["two stage", "two-stage", "2-stage"] },
      { slug: "low-pressure", label: "3-5.5bar Low Pressure Screw Air Compressor", match: ["low pressure", "3bar", "5.5bar"] },
    ],
  },
  {
    slug: "oil-free-screw",
    label: "Oil-Free Screw Air Compressor",
    subcategories: [
      { slug: "oil-free-water-injection", label: "Oil-Free Water Injection Screw", match: ["oil-free water", "water injection"] },
      { slug: "oil-free-scroll", label: "Oil-free Scroll Air Compressor", match: ["scroll"] },
    ],
  },
  {
    slug: "portable-diesel",
    label: "Portable Diesel Driven Screw Air Compressor",
    subcategories: [
      { slug: "diesel-single-stage", label: "Portable Diesel Driven (Single-stage)", match: ["diesel", "portable"] },
      { slug: "diesel-two-stage", label: "Portable Diesel Driven (Two-stage)", match: ["diesel two", "portable two"] },
    ],
  },
  {
    slug: "after-treatment",
    label: "Screw Air Compressor After Treatment Equipment",
    subcategories: [
      { slug: "refrigerant-dryer", label: "Refrigerant Air Dryer", match: ["refrigerated", "refrigerant", "dryer"] },
      { slug: "desiccant-dryer", label: "Desiccant Air Dryer", match: ["desiccant"] },
      { slug: "precision-filter", label: "Precision Line Filter", match: ["filter", "precision"] },
      { slug: "air-tank", label: "Air Receiver Tank", match: ["tank", "receiver", "air storage"] },
    ],
  },
  {
    slug: "spare-parts",
    label: "Screw Air Compressor Spare Parts",
    subcategories: [
      { slug: "airends", label: "Screw Air Ends", match: ["airend", "air end"] },
      { slug: "inverter", label: "Inverter", match: ["inverter", "vfd"] },
    ],
  },
];

export function findSubcategory(slug: string | undefined): { primary: PrimaryCategory; sub: Subcategory } | null {
  if (!slug) return null;
  for (const p of productCategories) {
    const sub = p.subcategories.find(s => s.slug === slug);
    if (sub) return { primary: p, sub };
  }
  return null;
}
