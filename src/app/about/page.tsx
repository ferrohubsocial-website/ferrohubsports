"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Users, MapPin, Zap } from "lucide-react";

const features = [
  { icon: Trophy, title: "World-Class Courts", desc: "Premium 8-layer SBR + acrylic surfaces built by Michezo Sports. Engineered for optimal bounce, grip, and player comfort." },
  { icon: Users, title: "Vibrant Community", desc: "1,100+ players and growing. Regular tournaments, social nights, and a welcoming culture for beginners and pros alike." },
  { icon: MapPin, title: "Two Locations", desc: "Millers Road in Vasanth Nagar and Budigere Cross — covering Central and East Bangalore." },
  { icon: Zap, title: "Open Almost 24/7", desc: "Courts open 6 AM to 2 AM daily. Early morning sessions, late-night games, and everything in between." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <Image src="/images/courts-wide.jpg" alt="FerroHub Sports Facility" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ferro-black/80 via-ferro-black/70 to-ferro-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">About Us</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">Our Story</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-ferro-offwhite/60 text-lg max-w-2xl mx-auto">
            Building Bangalore&apos;s most exciting sports community — one game at a time.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">Your Game. Your Space.</h2>
              <p className="text-ferro-offwhite/60 leading-relaxed mb-4">
                FerroHub Sports was born from a simple belief: Bangalore deserves world-class sports facilities that are accessible, vibrant, and built for community.
              </p>
              <p className="text-ferro-offwhite/60 leading-relaxed">
                Our premium rooftop facility on Millers Road features covered courts with advanced surfaces engineered for peak performance. With our second location now open at Budigere Cross, we&apos;re bringing the FerroHub experience to East Bangalore too.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image src="/images/players-handshake.jpg" alt="FerroHub Community" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ferro-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">Why FerroHub Sports</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-ferro-black rounded-2xl p-6 border border-white/5 hover:border-ferro-orange/30 transition-colors">
                <f.icon size={32} className="text-ferro-orange mb-4" />
                <h3 className="font-heading font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-ferro-slate text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">Two Locations</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-10">Find Us Across Bangalore</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a href="https://maps.google.com/?q=FerroHub+Sports+Millers+Road+16A+Vasanth+Nagar+Bengaluru+560052" target="_blank" rel="noopener noreferrer" className="bg-ferro-surface rounded-2xl p-6 border border-white/5 hover:border-ferro-orange/30 transition-all hover:scale-[1.02] cursor-pointer group block">
              <MapPin size={24} className="text-ferro-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-bold text-white text-xl mb-1">Millers Road</h3>
              <p className="text-ferro-slate text-sm mb-3">16/A, Millers Rd, above Advaith Hyundai, Vasanth Nagar, Bengaluru 560052</p>
              <span className="inline-block bg-ferro-orange/10 text-ferro-orange text-xs font-bold px-3 py-1 rounded-full mb-2">Now Open</span>
              <p className="text-ferro-orange/60 text-xs group-hover:text-ferro-orange transition-colors">Tap to open in Google Maps →</p>
            </a>
            <a href="https://maps.google.com/?q=FerroHub+Sports+Budigere+Cross+Survey+No+112+Hoskote+Bengaluru+560049" target="_blank" rel="noopener noreferrer" className="bg-ferro-surface rounded-2xl p-6 border border-white/5 hover:border-ferro-orange/30 transition-all hover:scale-[1.02] cursor-pointer group block">
              <MapPin size={24} className="text-ferro-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-bold text-white text-xl mb-1">Budigere Cross</h3>
              <p className="text-ferro-slate text-sm mb-3">Survey No 112 &amp; 114, Budigere Cross, Hoskote, Bidarahalli, Bengaluru 560049</p>
              <span className="inline-block bg-ferro-orange/10 text-ferro-orange text-xs font-bold px-3 py-1 rounded-full mb-2">Now Open</span>
              <p className="text-ferro-orange/60 text-xs group-hover:text-ferro-orange transition-colors">Tap to open in Google Maps →</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
