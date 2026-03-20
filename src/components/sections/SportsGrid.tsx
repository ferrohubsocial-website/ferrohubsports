"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const sports = [
  {
    name: "Pickleball",
    desc: "6 premium courts with advanced 8-layer SBR + acrylic surfaces. Covered for all-weather play.",
    image: "/images/courts-empty.jpg",
    featured: true,
  },
  {
    name: "Football Turf",
    desc: "High-quality artificial turf for 5-a-side and 7-a-side matches.",
    image: "/images/courts-action.jpg",
    featured: false,
  },
  {
    name: "Cricket Turf",
    desc: "Professional cricket pitch for practice sessions and friendly matches.",
    image: "/images/courts-busy.jpg",
    featured: false,
  },
];

export default function SportsGrid() {
  return (
    <section className="py-20 md:py-28 bg-ferro-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">Courts &amp; Sports</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden ${
                sport.featured ? "md:col-span-2 lg:col-span-1 ring-2 ring-ferro-orange" : ""
              }`}
            >
              <div className="relative h-72 md:h-80">
                <Image src={sport.image} alt={sport.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ferro-black via-ferro-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {sport.featured && (
                  <span className="inline-block bg-ferro-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    Primary Sport
                  </span>
                )}
                <h3 className="text-2xl font-heading font-bold text-white mb-1">{sport.name}</h3>
                <p className="text-ferro-offwhite/60 text-sm">{sport.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
