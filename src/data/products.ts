import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";
import banner3 from "@/assets/banner-3.png";
import siteFactory from "@/assets/site-factory.jpg";
import siteSystem from "@/assets/site-system.jpg";
import siteMachineBlue from "@/assets/site-machine-blue.jpg";
import siteMachineYellow from "@/assets/site-machine-yellow.jpg";
import siteMachineYellow2 from "@/assets/site-machine-yellow-2.jpg";
import siteDetailFan from "@/assets/site-detail-fan.jpg";
import siteDetailAirend from "@/assets/site-detail-airend.jpg";
import siteInterior from "@/assets/site-interior.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image?: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export const siteImages = {
  factory: siteFactory,
  system: siteSystem,
  machineBlue: siteMachineBlue,
  machineYellow: siteMachineYellow,
  machineYellow2: siteMachineYellow2,
  detailFan: siteDetailFan,
  detailAirend: siteDetailAirend,
  interior: siteInterior,
};

export const products: Product[] = [
  {
    id: "screw-air-compressor",
    name: "DMZY-30A Screw Air Compressor",
    category: "Screw Compressor",
    tagline: "High-efficiency rotary screw compression for continuous industrial duty.",
    description:
      "A factory-direct rotary screw air compressor engineered for stable, long-hour operation. Built with proven main airend, energy-efficient motor and integrated control panel for reliable compressed air supply across manufacturing, construction and processing sites.",
    features: [
      "Premium twin-screw airend with low rotation speed",
      "IE3 high-efficiency motor with thermal protection",
      "PLC touch controller with multi-language interface",
      "Low noise enclosure with effective heat dissipation",
      "Optional VSD (variable speed drive) version",
    ],
    specs: [
      { label: "Power", value: "22 / 30 / 37 kW" },
      { label: "Pressure", value: "7 / 8 / 10 / 13 bar" },
      { label: "Air Delivery", value: "3.6 – 6.0 m³/min" },
      { label: "Cooling", value: "Air-cooled / Water-cooled" },
      { label: "Noise Level", value: "≤ 68 dB(A)" },
      { label: "Warranty", value: "12 months main unit" },
    ],
    applications: ["General manufacturing", "Laser cutting", "Textile", "Automotive", "Food & packaging"],
  },
  {
    id: "piston-air-compressor",
    name: "ROCKY Piston Air Compressor",
    category: "Piston Compressor",
    tagline: "Heavy-duty reciprocating compressor for workshops and field operations.",
    description:
      "Robust piston-type air compressor built for intermittent and high-pressure applications. Cast-iron cylinder, finned cooling and reinforced air tank deliver dependable performance in demanding workshop and outdoor environments.",
    features: [
      "Cast-iron heavy-duty cylinder block",
      "High pressure up to 30 bar (custom)",
      "Belt-driven design for easy maintenance",
      "Reinforced air receiver tank included",
      "Single-phase / three-phase options",
    ],
    specs: [
      { label: "Power", value: "2.2 – 15 kW" },
      { label: "Pressure", value: "8 / 12.5 / 30 bar" },
      { label: "Tank Capacity", value: "100 / 200 / 500 L" },
      { label: "Drive", value: "Belt drive / Direct drive" },
      { label: "Voltage", value: "220V / 380V / Custom" },
      { label: "Warranty", value: "12 months main unit" },
    ],
    applications: ["Auto repair", "Tire service", "Construction sites", "Agriculture", "Small workshops"],
  },
  {
    id: "refrigerated-dryer",
    name: "Refrigerated Compressed Air Dryer",
    category: "Air Treatment",
    tagline: "Stable dew-point control to protect downstream equipment.",
    description:
      "A refrigerated air dryer that removes water vapour from compressed air systems, protecting pneumatic tools, valves and production lines. Compact design with energy-efficient refrigeration circuit.",
    features: [
      "Stable pressure dew point 2~10°C",
      "Branded refrigeration compressor",
      "High-efficiency heat exchanger",
      "Automatic drainage system",
      "Plug-and-play installation",
    ],
    specs: [
      { label: "Treatment Capacity", value: "1.0 – 50 m³/min" },
      { label: "Working Pressure", value: "0.6 – 1.6 MPa" },
      { label: "Dew Point", value: "2 ~ 10°C" },
      { label: "Refrigerant", value: "R22 / R134a / R410a" },
      { label: "Inlet Temp.", value: "≤ 45°C" },
      { label: "Warranty", value: "12 months" },
    ],
    applications: ["Compressed air systems", "Pneumatic lines", "Spray painting", "Electronics", "Pharma"],
  },
  {
    id: "air-tank",
    name: "Industrial Air Receiver Tank",
    category: "Air Storage",
    tagline: "Pressure-rated storage vessels for stable air supply.",
    description:
      "Carbon-steel air receiver tanks fabricated to international pressure-vessel standards. Used to stabilise compressed air output, reduce compressor cycling and store reserve air for peak demand.",
    features: [
      "Q345R / SA516 carbon steel construction",
      "Hydrostatic pressure tested",
      "Internal anti-corrosion treatment",
      "Safety valve & pressure gauge included",
      "ASME / CE / GB certified options",
    ],
    specs: [
      { label: "Volume", value: "100 L – 10,000 L" },
      { label: "Working Pressure", value: "0.8 / 1.0 / 1.6 / 3.0 MPa" },
      { label: "Material", value: "Q345R / SA516 Gr.70" },
      { label: "Standard", value: "GB150 / ASME / PED" },
      { label: "Coating", value: "Industrial blue / customizable" },
      { label: "Warranty", value: "12 months" },
    ],
    applications: ["Compressor stations", "Industrial plants", "Workshops", "PSA systems", "Process industries"],
  },
  {
    id: "psa-nitrogen-generator",
    name: "PSA Nitrogen Generator System",
    category: "Custom Equipment",
    tagline: "On-site nitrogen generation tailored to your project.",
    description:
      "Customized PSA (pressure swing adsorption) nitrogen generator integrated with screw compressor, dryer and air tanks. Suitable for laser cutting, electronics, food packaging, oil and gas applications.",
    features: [
      "Purity 95% – 99.999% configurable",
      "Imported CMS molecular sieve",
      "Integrated skid-mounted design",
      "Touchscreen PLC control",
      "Remote monitoring optional",
    ],
    specs: [
      { label: "Capacity", value: "5 – 1,000 Nm³/h" },
      { label: "Purity", value: "95% – 99.999%" },
      { label: "Pressure", value: "0.5 – 0.8 MPa" },
      { label: "Power Source", value: "380V / 50Hz / 3Ph" },
      { label: "Layout", value: "Skid-mounted / Containerized" },
      { label: "Warranty", value: "12 months system" },
    ],
    applications: ["Laser cutting", "Electronics SMT", "Food packaging", "Oil & gas", "Heat treatment"],
  },
  {
    id: "spare-parts-kit",
    name: "Spare Parts & Maintenance Kits",
    category: "Spare Parts",
    tagline: "Complete after-sales parts support for compressor systems.",
    description:
      "Genuine and OEM-equivalent spare parts including air filters, oil filters, oil separators, lubricants, valves and motors. Maintenance kits packaged by service interval for fast deployment.",
    features: [
      "Air / oil / separator filter sets",
      "Genuine compressor lubricants",
      "Solenoid valves & sensors",
      "Belts, couplings, motors",
      "Pre-packed 4,000 / 8,000h service kits",
    ],
    specs: [
      { label: "Brand Coverage", value: "Multi-brand compatible" },
      { label: "Lead Time", value: "3 – 15 days stock" },
      { label: "Packaging", value: "Export carton / wooden case" },
      { label: "Documentation", value: "Full part list + COA" },
      { label: "MOQ", value: "Flexible / no MOQ for kits" },
      { label: "Warranty", value: "Quality guaranteed" },
    ],
    applications: ["After-sales workshops", "Distributor stocking", "Plant maintenance", "Rental fleets"],
  },
];

export const banners = [banner1, banner2, banner3];
