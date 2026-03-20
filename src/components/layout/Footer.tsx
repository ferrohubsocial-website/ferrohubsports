import Image from "next/image";
import Link from "next/link";
import { Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ferro-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="FerroHub Sports" width={150} height={42} className="h-10 w-auto mb-4" />
            <p className="text-ferro-slate text-sm leading-relaxed">
              Bangalore&apos;s premier urban sports facility. World-class pickleball courts, football &amp; cricket turfs.
            </p>
            <a
              href="https://www.instagram.com/ferrohubsports/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-ferro-slate hover:text-ferro-orange transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">@ferrohubsports</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ferro-offwhite mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm text-ferro-slate hover:text-ferro-orange transition-colors">
                  {l.label}
                </Link>
              ))}
              <a
                href="https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-ferro-orange hover:text-ferro-orange/80 transition-colors font-medium"
              >
                Book on Playo →
              </a>
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

          {/* Address */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ferro-offwhite mb-4">Location</h4>
            <div className="flex items-start gap-2.5 text-sm text-ferro-slate">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <p>16/A, Millers Rd, above Advaith Hyundai, Kaverappa Layout, Vasanth Nagar, Bengaluru, Karnataka 560052</p>
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
