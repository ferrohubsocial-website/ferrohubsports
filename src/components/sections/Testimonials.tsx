"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Best pickleball facility in Bangalore hands down. The courts are top-notch and the vibe is unmatched. I come here almost every evening.",
    name: "Arjun Mehta",
    tag: "Regular Player",
  },
  {
    quote: "Hosted our corporate tournament at FerroHub and it was incredible. The team handled everything seamlessly. Already planning the next one!",
    name: "Priya Sharma",
    tag: "Corporate Events",
  },
  {
    quote: "Started playing pickleball here 3 months ago as a complete beginner. The community is so welcoming. Now I'm hooked and playing 4 times a week.",
    name: "Karthik Rao",
    tag: "Beginner → Addicted",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ferro-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">Community Love</p>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">What Players Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-ferro-surface rounded-2xl p-6 md:p-8 border border-white/5 hover:border-ferro-orange/30 transition-colors"
            >
              <Quote size={28} className="text-ferro-orange/40 mb-4" />
              <p className="text-ferro-offwhite/80 text-sm leading-relaxed mb-6">{t.quote}</p>
              <div>
                <p className="font-heading font-bold text-white">{t.name}</p>
                <p className="text-ferro-orange text-xs font-mono">{t.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
