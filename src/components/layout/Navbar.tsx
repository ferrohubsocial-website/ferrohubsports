"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ferro-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="FerroHub Sports"
              width={160}
              height={44}
              className="h-9 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ferro-offwhite/70 hover:text-ferro-orange transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ferro-orange text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-ferro-orange/90 transition-colors"
            >
              Book a Court
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ferro-offwhite"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ferro-black/95 backdrop-blur-lg border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-ferro-offwhite/80 hover:text-ferro-orange transition-colors py-2"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://playo.co/venues/bengaluru/ferrohub-sports-millers-road-vasanth-nagar-bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-ferro-orange text-white text-center font-bold px-5 py-3 rounded-lg mt-2"
            >
              Book a Court
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
