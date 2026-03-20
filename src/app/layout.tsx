import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "FerroHub Sports | Bangalore's Premier Pickleball & Sports Facility",
    template: "%s | FerroHub Sports",
  },
  description: "World-class pickleball courts, football & cricket turfs at Millers Road, Vasanth Nagar, Bengaluru. Book courts, join tournaments, and be part of Bangalore's fastest-growing sports community.",
  keywords: ["pickleball", "bangalore", "sports facility", "FerroHub Sports", "pickleball courts", "Millers Road", "Vasanth Nagar", "football turf", "cricket turf"],
  openGraph: {
    title: "FerroHub Sports | Your Game. Your Space.",
    description: "Bangalore's premier pickleball & sports facility at Millers Road. World-class courts, epic tournaments, vibrant community.",
    url: "https://ferrohubsports.com",
    siteName: "FerroHub Sports",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-ferro-black text-ferro-offwhite antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
