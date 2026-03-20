"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/courts-overview.jpg"
        alt="FerroHub Sports Courts"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ferro-black/80 via-ferro-black/60 to-ferro-black/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-ferro-orange font-mono text-sm tracking-[0.3em] uppercase mb-4"
        >
          Bangalore&apos;s Premier Sports Facility
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[0.95] mb-6"
        >
          Your Game.
          <br />
          <span className="text-ferro-orange">Your Space.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl text-ferro-offwhite/70 max-w-2xl mx-auto mb-8 font-body"
        >
          World-class pickleball courts, football &amp; cricket turfs, epic tournaments, and a community that plays hard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
            href="/events"
            className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-all"
          >
            View Events
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
      >
        <div className="w-1.5 h-3 bg-ferro-orange rounded-full" />
      </motion.div>
    </section>
  );
}
