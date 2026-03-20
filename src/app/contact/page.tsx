"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Pickleball Court Booking", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'm ${form.name}.%0A%0AInterested in: ${form.interest}%0A%0A${form.message}%0A%0AEmail: ${form.email}%0APhone: ${form.phone}`;
    window.open(`https://wa.me/917975749044?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-ferro-orange font-mono text-sm tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-extrabold text-white">
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 bg-ferro-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {sent ? (
                <div className="bg-ferro-surface rounded-2xl p-10 border border-ferro-orange/30 text-center">
                  <MessageCircle size={48} className="text-ferro-orange mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-ferro-slate">We&apos;ll get back to you on WhatsApp shortly.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-ferro-orange hover:underline text-sm">Send another message</button>
                </div>
              ) : (
                <div className="bg-ferro-surface rounded-2xl p-6 md:p-8 border border-white/5">
                  <h2 className="text-xl font-heading font-bold text-white mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-ferro-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-ferro-slate/50 focus:border-ferro-orange focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-ferro-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-ferro-slate/50 focus:border-ferro-orange focus:outline-none transition-colors text-sm"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-ferro-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-ferro-slate/50 focus:border-ferro-orange focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full bg-ferro-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ferro-orange focus:outline-none transition-colors text-sm"
                    >
                      <option>Pickleball Court Booking</option>
                      <option>Football Turf Booking</option>
                      <option>Cricket Turf Booking</option>
                      <option>Tournament / Events</option>
                      <option>Corporate Booking</option>
                      <option>Coaching / Training</option>
                      <option>Sponsorship / Collaboration</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      placeholder="Your message..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-ferro-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-ferro-slate/50 focus:border-ferro-orange focus:outline-none transition-colors text-sm resize-none"
                    />
                    <button type="submit" className="w-full bg-ferro-orange text-white font-bold py-3.5 rounded-lg hover:bg-ferro-orange/90 transition-colors text-sm">
                      Send via WhatsApp
                    </button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="tel:+917975749044" className="bg-ferro-surface rounded-xl p-5 border border-white/5 hover:border-ferro-orange/30 transition-colors block">
                  <Phone size={20} className="text-ferro-orange mb-2" />
                  <p className="text-xs text-ferro-slate uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-medium text-sm">+91 79757 49044</p>
                </a>
                <a href="mailto:ferrohubsports@gmail.com" className="bg-ferro-surface rounded-xl p-5 border border-white/5 hover:border-ferro-orange/30 transition-colors block">
                  <Mail size={20} className="text-ferro-orange mb-2" />
                  <p className="text-xs text-ferro-slate uppercase tracking-wider mb-1">Bookings</p>
                  <p className="text-white font-medium text-sm">ferrohubsports@gmail.com</p>
                </a>
                <a href="mailto:team@ferrohub.in" className="bg-ferro-surface rounded-xl p-5 border border-white/5 hover:border-ferro-orange/30 transition-colors block">
                  <Mail size={20} className="text-ferro-orange mb-2" />
                  <p className="text-xs text-ferro-slate uppercase tracking-wider mb-1">Events & Collabs</p>
                  <p className="text-white font-medium text-sm">team@ferrohub.in</p>
                </a>
                <div className="bg-ferro-surface rounded-xl p-5 border border-white/5">
                  <Clock size={20} className="text-ferro-orange mb-2" />
                  <p className="text-xs text-ferro-slate uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-white font-medium text-sm">6:00 AM – 2:00 AM Daily</p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-ferro-surface rounded-xl p-5 border border-white/5">
                <MapPin size={20} className="text-ferro-orange mb-2" />
                <p className="text-xs text-ferro-slate uppercase tracking-wider mb-1">Address</p>
                <p className="text-white text-sm">16/A, Millers Rd, above Advaith Hyundai, Kaverappa Layout, Vasanth Nagar, Bengaluru, Karnataka 560052</p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/917975749044" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-lg hover:bg-[#25D366]/90 transition-colors text-sm">
                    <MessageCircle size={18} /> WhatsApp Us
                  </a>
                  <a href="https://chat.whatsapp.com/KGxxgAr3m112DiSmOsiZ0o?mode=gi_t" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-ferro-surface text-white font-bold py-3.5 rounded-lg border border-white/10 hover:border-ferro-orange/30 transition-colors text-sm">
                    <ExternalLink size={18} /> Join Community
                  </a>
                </div>
                <p className="text-xs text-ferro-slate uppercase tracking-wider font-bold">Book a Court</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-ferro-orange text-white font-bold py-3 rounded-lg hover:bg-ferro-orange/90 transition-colors text-sm">Playo</a>
                  <a href="https://hudle.in/venues/ferrohub-sports-millers/131566" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-ferro-blue text-white font-bold py-3 rounded-lg hover:bg-ferro-blue/90 transition-colors text-sm">Hudle</a>
                  <a href="https://link.district.in/DSTRKT/0wke607m" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-ferro-surface text-white font-bold py-3 rounded-lg border border-white/10 hover:border-ferro-orange/30 transition-colors text-sm">District</a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-white/5 h-64 md:h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7!2d77.585!3d12.987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sFerroHub%20Sports!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FerroHub Sports Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
