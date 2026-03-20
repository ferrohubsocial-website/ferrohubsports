"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "4.8★", label: "Rating" },
  { value: "1,100+", label: "Community" },
  { value: "6", label: "Courts" },
  { value: "6AM–2AM", label: "Daily" },
];

export default function StatsBanner() {
  return (
    <section className="py-16 bg-ferro-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-mono font-bold text-ferro-orange">{stat.value}</p>
              <p className="text-ferro-slate text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
