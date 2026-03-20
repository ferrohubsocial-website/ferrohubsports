"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ExternalLink, Clock, Phone } from "lucide-react";

const locations = [
  {
    name: "Millers Road",
    area: "Vasanth Nagar",
    address: "16/A, Millers Rd, above Advaith Hyundai, Kaverappa Layout, Vasanth Nagar, Bengaluru 560052",
    maps: "https://maps.google.com/?q=FerroHub+Sports+Millers+Road+Vasanth+Nagar+Bengaluru",
    image: "/images/courts-empty.jpg",
    platforms: [
      { name: "Playo", url: "https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru", color: "bg-ferro-orange" },
      { name: "Hudle", url: "https://hudle.in/venues/ferrohub-sports-millers/131566", color: "bg-ferro-blue" },
      { name: "District", url: "https://link.district.in/DSTRKT/0wke607m", color: "bg-ferro-surface border border-white/10" },
    ],
  },
  {
    name: "Budigere Cross",
    area: "East Bengaluru",
    address: "Survey No 112 & 114, Budigere Cross, Hoskote, Bidarahalli, Bengaluru 560049",
    maps: "https://maps.google.com/?q=FerroHub+Sports+Budigere+Cross+Bengaluru",
    image: "/images/courts-wide.jpg",
    platforms: [
      { name: "Playo", url: "https://playo.co/venues/budigere-cross-bengaluru/ferrohub-sports-budigere-cross-old-madras-road-bengaluru", color: "bg-ferro-orange" },
      { name: "District", url: "https://link.district.in/DSTRKT/3zepuj27", color: "bg-ferro-surface border border-white/10" },
    ],
  },
];

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <Image src="/images/courts-overview.jpg" alt="FerroHub Courts" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ferro-black/85 via-ferro-black/75 to-ferro-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="FerroHub Sports" className="h-10 md:h-12 w-auto mx-auto mb-6" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
            Book a Court
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-ferro-offwhite/60 text-lg max-w-xl mx-auto">
            Choose your location and book instantly through your preferred platform.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-4 mt-6 text-sm text-ferro-slate">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-ferro-orange" /> 6 AM – 2 AM Daily</span>
            <span className="text-ferro-offwhite/20">|</span>
            <a href="tel:+917975749044" className="flex items-center gap-1.5 hover:text-ferro-orange transition-colors"><Phone size={14} className="text-ferro-orange" /> +91 79757 49044</a>
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section className="pb-20 bg-ferro-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-ferro-surface rounded-2xl overflow-hidden border border-white/5"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-56 md:h-auto">
                  <Image src={loc.image} alt={loc.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ferro-surface/50 hidden md:block" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white">{loc.name}</h2>
                    <span className="bg-ferro-orange/10 text-ferro-orange text-xs font-bold px-3 py-1 rounded-full">{loc.area}</span>
                  </div>

                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-ferro-slate text-sm hover:text-ferro-orange transition-colors mb-6"
                  >
                    <MapPin size={16} className="mt-0.5 shrink-0" />
                    <span className="underline underline-offset-2">{loc.address}</span>
                  </a>

                  <p className="text-xs text-ferro-slate uppercase tracking-wider font-bold mb-3">Book on</p>
                  <div className="flex flex-col gap-3">
                    {loc.platforms.map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${p.color} text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-between hover:opacity-90 transition-opacity`}
                      >
                        <span>{p.name}</span>
                        <ExternalLink size={18} />
                      </a>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/917975749044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center text-sm text-ferro-slate hover:text-ferro-orange transition-colors"
                  >
                    Or book via WhatsApp →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
