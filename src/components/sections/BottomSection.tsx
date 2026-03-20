"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Megaphone, MapPin, ExternalLink } from "lucide-react";

export default function BottomSection() {
  return (
    <>
      {/* Business CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <Image src="/images/courts-busy.jpg" alt="FerroHub Sports" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ferro-black/95 via-ferro-black/85 to-ferro-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Megaphone size={36} className="text-ferro-orange mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-3">
              Partner With Us
            </h2>
            <p className="text-ferro-offwhite/60 text-lg max-w-xl mx-auto mb-8">
              Events, sponsorships, corporate bookings, and brand partnerships — let&apos;s build something together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/business" className="bg-ferro-orange text-white font-bold px-7 py-3.5 rounded-lg hover:bg-ferro-orange/90 transition-all hover:scale-105">
                Learn More
              </Link>
              <a href="mailto:team@ferrohub.in?subject=FerroHub%20Sports%20-%20Partnership%20Inquiry" className="border-2 border-white/30 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all">
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Split Bookings */}
      <section className="py-16 md:py-20 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">Book a Court</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">Choose Your Location</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-1">
            {/* Millers Road */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-ferro-surface rounded-2xl md:rounded-r-none overflow-hidden border border-white/5 md:border-r-0"
            >
              <div className="relative h-48">
                <Image src="/images/courts-empty.jpg" alt="Millers Road Courts" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ferro-surface to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-ferro-orange text-white text-xs font-bold px-3 py-1 rounded-full">Millers Road</span>
                </div>
              </div>
              <div className="p-6">
                <a href="https://maps.google.com/?q=FerroHub+Sports+Millers+Road+16A+Vasanth+Nagar+Bengaluru+560052" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-ferro-slate text-sm hover:text-ferro-orange transition-colors mb-5">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span className="underline underline-offset-2">Vasanth Nagar, Bengaluru</span>
                </a>
                <div className="space-y-2.5">
                  <a href="https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-ferro-orange text-white font-bold py-3 px-5 rounded-xl hover:opacity-90 transition-opacity text-sm">
                    <span>Playo</span><ExternalLink size={16} />
                  </a>
                  <a href="https://hudle.in/venues/ferrohub-sports-millers/131566" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-ferro-blue text-white font-bold py-3 px-5 rounded-xl hover:opacity-90 transition-opacity text-sm">
                    <span>Hudle</span><ExternalLink size={16} />
                  </a>
                  <a href="https://link.district.in/DSTRKT/0wke607m" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-ferro-black text-white font-bold py-3 px-5 rounded-xl border border-white/10 hover:border-ferro-orange/30 transition-colors text-sm">
                    <span>District</span><ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Budigere Cross */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-ferro-surface rounded-2xl md:rounded-l-none overflow-hidden border border-white/5 md:border-l md:border-l-white/10"
            >
              <div className="relative h-48">
                <Image src="/images/courts-wide.jpg" alt="Budigere Cross Courts" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ferro-surface to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-ferro-orange text-white text-xs font-bold px-3 py-1 rounded-full">Budigere Cross</span>
                </div>
              </div>
              <div className="p-6">
                <a href="https://maps.google.com/?q=FerroHub+Sports+Budigere+Cross+Survey+No+112+Hoskote+Bengaluru+560049" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-ferro-slate text-sm hover:text-ferro-orange transition-colors mb-5">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span className="underline underline-offset-2">Budigere Cross, East Bengaluru</span>
                </a>
                <div className="space-y-2.5">
                  <a href="https://playo.co/venues/budigere-cross-bengaluru/ferrohub-sports-budigere-cross-old-madras-road-bengaluru" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-ferro-orange text-white font-bold py-3 px-5 rounded-xl hover:opacity-90 transition-opacity text-sm">
                    <span>Playo</span><ExternalLink size={16} />
                  </a>
                  <a href="https://link.district.in/DSTRKT/3zepuj27" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-ferro-black text-white font-bold py-3 px-5 rounded-xl border border-white/10 hover:border-ferro-orange/30 transition-colors text-sm">
                    <span>District</span><ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
