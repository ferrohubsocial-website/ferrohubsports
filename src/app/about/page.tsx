"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Users, MapPin, Zap } from "lucide-react";

const features = [
  { icon: Trophy, title: "World-Class Courts", desc: "Premium 8-layer SBR + acrylic surfaces built by Michezo Sports. Engineered for optimal bounce, grip, and player comfort." },
  { icon: Users, title: "Vibrant Community", desc: "1,100+ players and growing. Regular tournaments, social nights, and a welcoming culture for beginners and pros alike." },
  { icon: MapPin, title: "Prime Location", desc: "Rooftop facility on Millers Road, Vasanth Nagar — right in the heart of Bangalore. Second location at Budigere Cross." },
  { icon: Zap, title: "Open Almost 24/7", desc: "Courts open 6 AM to 2 AM daily. Early morning sessions, late-night games, and everything in between." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <Image src="/images/courts-wide.jpg" alt="FerroHub Sports Facility" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ferro-black/80 via-ferro-black/70 to-ferro-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">
            About Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
            Our Story
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-ferro-offwhite/60 text-lg max-w-2xl mx-auto">
            Building Bangalore&apos;s most exciting sports community — one game at a time.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
                Your Game. Your Space.
              </h2>
              <p className="text-ferro-offwhite/60 leading-relaxed mb-4">
                FerroHub Sports was born from a simple belief: Bangalore deserves world-class sports facilities that are accessible, vibrant, and built for community. 
              </p>
              <p className="text-ferro-offwhite/60 leading-relaxed">
                Our premium rooftop facility on Millers Road features covered courts with advanced surfaces engineered for peak performance. Whether you&apos;re picking up a paddle for the first time or competing at tournament level, FerroHub is your home court.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image src="/images/players-handshake.jpg" alt="FerroHub Community" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-ferro-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">Why FerroHub Sports</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-ferro-black rounded-2xl p-6 border border-white/5 hover:border-ferro-orange/30 transition-colors"
              >
                <f.icon size={32} className="text-ferro-orange mb-4" />
                <h3 className="font-heading font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-ferro-slate text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">Two Locations</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-10">Find Us Across Bangalore</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-ferro-surface rounded-2xl p-6 border border-white/5">
              <MapPin size={24} className="text-ferro-orange mx-auto mb-3" />
              <h3 className="font-heading font-bold text-white text-xl mb-1">Millers Road</h3>
              <p className="text-ferro-slate text-sm">16/A, Millers Rd, above Advaith Hyundai, Vasanth Nagar, Bengaluru 560052</p>
            </div>
            <div className="bg-ferro-surface rounded-2xl p-6 border border-white/5">
              <MapPin size={24} className="text-ferro-orange mx-auto mb-3" />
              <h3 className="font-heading font-bold text-white text-xl mb-1">Budigere Cross</h3>
              <p className="text-ferro-slate text-sm">Coming soon — Expanding to East Bangalore</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
