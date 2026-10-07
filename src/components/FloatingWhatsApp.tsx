'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappNumber = '6288888888888'; // Representative WhatsApp Business line
  const whatsappMessage = encodeURIComponent(
    'Halo PT. Atlas Teknindo Lestari, saya tertarik untuk meminta penawaran sewa alat berat dan informasi ketersediaan unit.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium px-4 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-300"></span>
        </span>
      </div>
      <span className="hidden sm:inline-block text-sm font-semibold tracking-wide pr-1">
        Hotline Sewa 24/7
      </span>
    </a>
  );
}
