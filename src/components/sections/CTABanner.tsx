"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image
        src="/images/players-handshake.jpg"
        alt="FerroHub Sports Community"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ferro-black/90 via-ferro-black/80 to-ferro-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4"
        >
          Ready to <span className="text-ferro-orange">Play?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-ferro-offwhite/60 text-lg mb-8 max-w-xl mx-auto"
        >
          Book your court, join a tournament, or just show up and play. Bangalore&apos;s fastest-growing sports community is waiting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ferro-orange text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-ferro-orange/90 transition-all hover:scale-105"
          >
            Book a Court
          </a>
          <a
            href="/contact"
            className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
