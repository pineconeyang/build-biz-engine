import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_250)] text-[oklch(0.92_0.01_250)] mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-md bg-gradient-accent grid place-items-center font-bold">L</div>
            <span className="font-bold text-lg">LONGLI Machinery</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Reliable Machines. Complete Parts. Stable Global Supply. A trusted source supplier of construction machinery and engineering equipment for global B2B markets.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/quality" className="hover:text-white">Quality Control</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/products/screw-air-compressor" className="hover:text-white">Screw Air Compressors</Link></li>
            <li><Link to="/products/piston-air-compressor" className="hover:text-white">Piston Air Compressors</Link></li>
            <li><Link to="/products/refrigerated-dryer" className="hover:text-white">Refrigerated Dryers</Link></li>
            <li><Link to="/products/air-tank" className="hover:text-white">Air Tanks</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Nantong, Jiangsu, China</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +86 138 0000 0000</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> sales@longli-machinery.com</li>
            <li className="flex gap-3"><Globe className="w-4 h-4 mt-0.5 shrink-0" /> Worldwide Export</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Nantong Longli Machinery Equipment Co., Ltd. All rights reserved.</p>
          <p>Reliable Machines · Complete Parts · Stable Global Supply</p>
        </div>
      </div>
    </footer>
  );
}
