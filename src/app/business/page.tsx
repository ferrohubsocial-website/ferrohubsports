"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Megaphone, Building2, ShoppingBag, Mail, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Events",
    desc: "Host your tournament, league, or sporting event at our world-class facility. Full event management support, custom branding, and live streaming options.",
    email: "ferrohubsports@gmail.com",
    emailLabel: "Bookings Team",
  },
  {
    icon: Building2,
    title: "Corporate Bookings",
    desc: "Team outings, corporate tournaments, and wellness programs. Custom packages for groups of any size with catering options and event coordination.",
    email: "ferrohubsports@gmail.com",
    emailLabel: "Bookings Team",
  },
  {
    icon: Megaphone,
    title: "Sponsorships & Branding",
    desc: "Put your brand in front of Bangalore's most active sports community. Court naming rights, banner placements, tournament sponsorships, and digital presence.",
    email: "team@ferrohub.in",
    emailLabel: "Partnerships Team",
  },
  {
    icon: ShoppingBag,
    title: "Product Placement at Pro Shop",
    desc: "Showcase your sports gear, nutrition products, or lifestyle brand at our pro shop. Direct access to 1,100+ active players and growing.",
    email: "team@ferrohub.in",
    emailLabel: "Partnerships Team",
  },
];

export default function BusinessPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <Image src="/images/courts-busy.jpg" alt="FerroHub Sports Events" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ferro-black/85 via-ferro-black/75 to-ferro-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">
            For Businesses & Brands
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
            Partner With Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-ferro-offwhite/60 text-lg max-w-2xl mx-auto">
            Reach Bangalore&apos;s fastest-growing sports community through events, sponsorships, and brand partnerships.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-ferro-surface border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "1,100+", label: "Active Community" },
            { val: "2", label: "Venues" },
            { val: "50+", label: "Events Hosted" },
            { val: "4.8★", label: "Rated" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-mono font-bold text-ferro-orange">{s.val}</p>
              <p className="text-ferro-slate text-xs uppercase tracking-wider mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-ferro-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-ferro-surface rounded-2xl p-6 md:p-8 border border-white/5 hover:border-ferro-orange/30 transition-colors group"
              >
                <s.icon size={32} className="text-ferro-orange mb-4" />
                <h3 className="text-xl font-heading font-bold text-white mb-2">{s.title}</h3>
                <p className="text-ferro-slate text-sm leading-relaxed mb-6">{s.desc}</p>

                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs text-ferro-slate uppercase tracking-wider mb-2">Contact {s.emailLabel}</p>
                  <a
                    href={`mailto:${s.email}?subject=${encodeURIComponent(`FerroHub Sports - ${s.title} Inquiry`)}`}
                    className="inline-flex items-center gap-2 bg-ferro-orange/10 text-ferro-orange font-bold py-2.5 px-5 rounded-lg hover:bg-ferro-orange hover:text-white transition-colors text-sm"
                  >
                    <Mail size={16} />
                    {s.email}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ferro-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-3">Not sure where to start?</h2>
          <p className="text-ferro-slate mb-6">Reach out and we&apos;ll find the right partnership for your brand.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:team@ferrohub.in?subject=FerroHub%20Sports%20-%20Partnership%20Inquiry"
              className="bg-ferro-orange text-white font-bold px-7 py-3.5 rounded-lg hover:bg-ferro-orange/90 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail size={18} /> team@ferrohub.in
            </a>
            <a
              href="https://wa.me/917975749044?text=Hi! I'm interested in a business partnership with FerroHub Sports."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
