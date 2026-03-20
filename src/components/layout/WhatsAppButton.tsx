"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917975749044"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-[#25D366]/25 hover:scale-110 transition-transform animate-pulse hover:animate-none"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
