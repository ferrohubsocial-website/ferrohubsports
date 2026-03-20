"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users } from "lucide-react";

export default function EventsTeaser() {
  return (
    <section className="py-20 md:py-28 bg-ferro-surface border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex justify-center gap-3 mb-6">
            <Calendar size={28} className="text-ferro-orange" />
            <Users size={28} className="text-ferro-orange" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Events & Community Games
          </h2>
          <p className="text-ferro-offwhite/60 text-lg max-w-2xl mx-auto mb-8">
            Tournaments, leagues, social nights, and community games will be updated here. Stay tuned for upcoming events at both our locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="bg-ferro-orange text-white font-bold px-7 py-3.5 rounded-lg hover:bg-ferro-orange/90 transition-all hover:scale-105">
              View Events
            </Link>
            <a
              href="https://chat.whatsapp.com/KGxxgAr3m112DiSmOsiZ0o?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all"
            >
              Join Community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
