"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  { id: 1, title: "Picklebrawl 3.0", date: "Apr 12, 2026", time: "9:00 AM", category: "Tournament", desc: "The flagship tournament returns. Singles & doubles brackets, cash prizes, and an electric atmosphere.", image: "/images/players-handshake.jpg" },
  { id: 2, title: "Beginner Pickleball Camp", date: "Mar 29, 2026", time: "7:00 AM", category: "Workshop", desc: "Never played pickleball? Start here. Learn the basics from certified coaches in a fun, no-pressure environment.", image: "/images/mixed-doubles.jpg" },
  { id: 3, title: "Friday Night Open Play", date: "Every Friday", time: "7:00 PM", category: "Social", desc: "Drop in, find a game, make friends. Open courts with rotating partners and good vibes.", image: "/images/courts-action.jpg" },
  { id: 4, title: "Corporate Tournament", date: "Apr 26, 2026", time: "10:00 AM", category: "Tournament", desc: "Bring your team. Custom brackets, branded event setup, and bragging rights. Perfect for team building.", image: "/images/courts-busy.jpg" },
  { id: 5, title: "Weekend Doubles League", date: "Every Saturday", time: "8:00 AM", category: "League", desc: "Competitive doubles format with season rankings. Register your pair and climb the leaderboard.", image: "/images/match-rally.jpg" },
  { id: 6, title: "Ladies Pickleball Morning", date: "Every Wednesday", time: "6:30 AM", category: "Social", desc: "Dedicated women's sessions with coaching, drills, and match play in a supportive setting.", image: "/images/player-action-2.jpg" },
];

const categories = ["All", "Tournament", "Social", "Workshop", "League"];

export default function EventsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? events : events.filter((e) => e.category === active);

  return (
    <>
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">
            What&apos;s Happening
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-extrabold text-white">
            Events
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

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-ferro-surface rounded-2xl overflow-hidden border border-white/5 hover:border-ferro-orange/30 transition-colors group"
              >
                <div className="relative h-48">
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-ferro-orange text-white text-xs font-bold px-3 py-1 rounded-full">{event.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{event.title}</h3>
                  <p className="text-ferro-slate text-sm mb-4 line-clamp-2">{event.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-ferro-slate">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-ferro-orange" />{event.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} className="text-ferro-orange" />{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-ferro-slate mt-2">
                    <MapPin size={14} className="text-ferro-orange" />FerroHub Sports, Millers Road
                  </div>
                  <a
                    href="https://wa.me/917975749044?text=Hi! I'm interested in the event: {event.title}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center bg-ferro-orange/10 text-ferro-orange font-bold py-2.5 rounded-lg hover:bg-ferro-orange hover:text-white transition-colors text-sm"
                  >
                    Register via WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
