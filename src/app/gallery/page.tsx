"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  { src: "/images/courts-empty.jpg", alt: "FerroHub Courts - Pristine Setup", category: "Courts" },
  { src: "/images/courts-overview.jpg", alt: "Courts Overview with Players", category: "Courts" },
  { src: "/images/courts-wide.jpg", alt: "Wide Angle All Courts", category: "Courts" },
  { src: "/images/players-handshake.jpg", alt: "Sportsmanship at the Net", category: "Tournaments" },
  { src: "/images/match-rally.jpg", alt: "Intense Rally Action", category: "Action" },
  { src: "/images/player-action-1.jpg", alt: "Doubles Match at the Net", category: "Action" },
  { src: "/images/player-action-2.jpg", alt: "Players Through the Net", category: "Action" },
  { src: "/images/courts-action.jpg", alt: "Active Play on Courts", category: "Action" },
  { src: "/images/courts-busy.jpg", alt: "Busy Courts Multiple Games", category: "Community" },
  { src: "/images/mixed-doubles.jpg", alt: "Mixed Doubles Pair", category: "Community" },
  { src: "/images/players-sideline.jpg", alt: "Players Waiting Courtside", category: "Community" },
];

const categories = ["All", "Courts", "Action", "Tournaments", "Community"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <>
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">
            See the Action
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-extrabold text-white">
            Gallery
          </motion.h1>
        </div>
      </section>

      <section className="pb-20 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat ? "bg-ferro-orange text-white" : "bg-ferro-surface text-ferro-slate hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden"
                onClick={() => setLightbox(photo.src)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ferro-black/0 group-hover:bg-ferro-black/30 transition-colors flex items-end">
                  <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ferro-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-ferro-orange transition-colors" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative max-w-5xl max-h-[85vh] w-full">
              <Image src={lightbox} alt="Gallery Photo" width={1200} height={800} className="w-full h-auto max-h-[85vh] object-contain rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
