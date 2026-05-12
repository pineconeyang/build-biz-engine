import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LONGLI Machinery" },
      { name: "description", content: "Talk to our export team. We reply to inquiries within 12 hours with practical equipment recommendations." },
      { property: "og:title", content: "Contact LONGLI Machinery" },
      { property: "og:description", content: "Reach our export team for B2B equipment inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", country: "", product: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", company: "", country: "", product: "", message: "" });
  };

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Contact</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-balance max-w-3xl">Let's talk about your next project</h1>
          <p className="mt-5 text-white/85 max-w-2xl text-lg">Send your specifications or working conditions — our export team replies within 12 hours.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Headquarters", lines: ["Nantong, Jiangsu Province", "China"] },
              { icon: Phone, title: "Phone / WhatsApp", lines: ["+86 138 0000 0000"], href: "tel:+8613800000000" },
              { icon: Mail, title: "Email", lines: ["sales@longli-machinery.com"], href: "mailto:sales@longli-machinery.com" },
              { icon: MessageCircle, title: "Office Hours", lines: ["Mon – Sat · 09:00 – 18:00 (GMT+8)"] },
            ].map(({ icon: Icon, title, lines, href }) => {
              const Comp = href ? "a" : "div";
              return (
                <Comp key={title} {...(href ? { href } : {})} className="block p-6 bg-card border rounded-xl hover:shadow-elegant transition">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent grid place-items-center text-primary-foreground shrink-0"><Icon className="w-6 h-6" /></div>
                    <div>
                      <div className="font-bold">{title}</div>
                      {lines.map(l => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                    </div>
                  </div>
                </Comp>
              );
            })}
          </div>

          <form onSubmit={onSubmit} className="p-8 md:p-10 bg-card border rounded-2xl shadow-elegant">
            <h2 className="text-2xl font-bold mb-2">Send an inquiry</h2>
            <p className="text-sm text-muted-foreground mb-8">Fill in the form below and we'll get back to you shortly.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { k: "name", l: "Full Name *", t: "text", req: true },
                { k: "email", l: "Email *", t: "email", req: true },
                { k: "company", l: "Company", t: "text" },
                { k: "country", l: "Country", t: "text" },
              ].map(f => (
                <div key={f.k}>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{f.l}</label>
                  <input
                    required={f.req}
                    type={f.t}
                    value={(form as Record<string, string>)[f.k]}
                    onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-2 w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Product of Interest</label>
              <select value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} className="mt-2 w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select a product...</option>
                <option>Screw Air Compressor</option>
                <option>Piston Air Compressor</option>
                <option>Refrigerated Dryer</option>
                <option>Air Tank</option>
                <option>PSA Nitrogen Generator</option>
                <option>Spare Parts</option>
                <option>Customized Equipment</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project, capacity, working conditions or required quantity..."
                className="mt-2 w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-elegant">
              {sent ? <><CheckCircle2 className="w-4 h-4" /> Thank you! We'll reply within 12 hours.</> : <>Send Inquiry <Send className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
