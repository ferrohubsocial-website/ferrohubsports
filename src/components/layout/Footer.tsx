import Link from "next/link";
import { Instagram, Phone, Mail, MapPin, Clock, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ferro-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-stacked.svg" alt="FerroHub Sports" className="h-16 w-auto mb-4" />
            <p className="text-ferro-slate text-sm leading-relaxed">
              Bangalore&apos;s premier urban sports facility. World-class pickleball courts, football &amp; cricket turfs.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="https://www.instagram.com/ferrohubsports/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ferro-slate hover:text-ferro-orange transition-colors"
              >
                <Instagram size={18} />
                <span className="text-sm">@ferrohubsports</span>
              </a>
              <a
                href="https://chat.whatsapp.com/KGxxgAr3m112DiSmOsiZ0o?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ferro-slate hover:text-ferro-orange transition-colors"
              >
                <Users size={18} />
                <span className="text-sm">Join Community</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ferro-offwhite mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/business", label: "Partner With Us" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm text-ferro-slate hover:text-ferro-orange transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ferro-offwhite mt-6 mb-3">Book a Court</h4>
            <div className="space-y-2">
              <a href="https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru" target="_blank" rel="noopener noreferrer" className="block text-sm text-ferro-orange hover:text-ferro-orange/80 transition-colors font-medium">Playo →</a>
              <a href="https://hudle.in/venues/ferrohub-sports-millers/131566" target="_blank" rel="noopener noreferrer" className="block text-sm text-ferro-orange hover:text-ferro-orange/80 transition-colors font-medium">Hudle →</a>
              <a href="https://link.district.in/DSTRKT/0wke607m" target="_blank" rel="noopener noreferrer" className="block text-sm text-ferro-orange hover:text-ferro-orange/80 transition-colors font-medium">District →</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ferro-offwhite mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-ferro-slate">
              <a href="tel:+917975749044" className="flex items-start gap-2.5 hover:text-ferro-orange transition-colors">
                <Phone size={16} className="mt-0.5 shrink-0" />
                +91 79757 49044
              </a>
              <a href="mailto:ferrohubsports@gmail.com" className="flex items-start gap-2.5 hover:text-ferro-orange transition-colors">
                <Mail size={16} className="mt-0.5 shrink-0" />
                ferrohubsports@gmail.com
              </a>
              <a href="mailto:team@ferrohub.in" className="flex items-start gap-2.5 hover:text-ferro-orange transition-colors">
                <Mail size={16} className="mt-0.5 shrink-0" />
                team@ferrohub.in
              </a>
              <div className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0" />
                6:00 AM – 2:00 AM Daily
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ferro-offwhite mb-4">Locations</h4>
            <div className="space-y-4 text-sm text-ferro-slate">
              <a href="https://maps.google.com/?q=FerroHub+Sports+Millers+Road+16A+Vasanth+Nagar+Bengaluru+560052" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-ferro-orange transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ferro-orange" />
                <div>
                  <p className="text-ferro-offwhite font-medium">Millers Road</p>
                  <p>16/A, Millers Rd, above Advaith Hyundai, Vasanth Nagar, Bengaluru 560052</p>
                </div>
              </a>
              <a href="https://maps.google.com/?q=FerroHub+Sports+Budigere+Cross+Survey+No+112+Hoskote+Bengaluru+560049" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-ferro-orange transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ferro-orange" />
                <div>
                  <p className="text-ferro-offwhite font-medium">Budigere Cross</p>
                  <p>Survey No 112 &amp; 114, Budigere Cross, Hoskote, Bidarahalli, Bengaluru 560049</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-center text-xs text-ferro-slate">
          © {new Date().getFullYear()} FerroHub Sports. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
