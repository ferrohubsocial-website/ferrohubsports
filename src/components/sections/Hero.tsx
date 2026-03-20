"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image src="/images/courts-overview.jpg" alt="FerroHub Sports Courts" fill className="object-cover" priority quality={85} />
      <div className="absolute inset-0 bg-gradient-to-b from-ferro-black/80 via-ferro-black/60 to-ferro-black/90" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-ferro-orange font-mono text-sm tracking-[0.3em] uppercase mb-4">
          Bangalore&apos;s Premier Sports Facility
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[0.95] mb-6">
          Your Game.
          <br />
          <span className="text-ferro-orange">Your Space.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-lg md:text-xl text-ferro-offwhite/70 max-w-2xl mx-auto mb-8 font-body">
          World-class pickleball courts, football &amp; cricket turfs, epic tournaments, and a community that plays hard.
        </motion.p>

        {/* Booking buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru" target="_blank" rel="noopener noreferrer" className="bg-ferro-orange text-white font-bold px-7 py-3.5 rounded-lg text-base hover:bg-ferro-orange/90 transition-all hover:scale-105">
              Book on Playo
            </a>
            <a href="https://hudle.in/venues/ferrohub-sports-millers/131566" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur text-white font-bold px-7 py-3.5 rounded-lg text-base border border-white/20 hover:bg-white/20 transition-all">
              Book on Hudle
            </a>
            <a href="https://link.district.in/DSTRKT/0wke607m" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur text-white font-bold px-7 py-3.5 rounded-lg text-base border border-white/20 hover:bg-white/20 transition-all">
              Book on District
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/events" className="text-ferro-offwhite/60 hover:text-ferro-orange transition-colors text-sm font-medium">
              View Events →
            </a>
            <span className="hidden sm:inline text-ferro-offwhite/20">|</span>
            <a href="https://chat.whatsapp.com/KGxxgAr3m112DiSmOsiZ0o?mode=gi_t" target="_blank" rel="noopener noreferrer" className="text-ferro-offwhite/60 hover:text-ferro-orange transition-colors text-sm font-medium">
              Join Community →
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
        <div className="w-1.5 h-3 bg-ferro-orange rounded-full" />
      </motion.div>
    </section>
  );
}
