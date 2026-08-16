import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE } from '../mock';

export default function WhatsAppFab() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 grid place-items-center rounded-full bg-brand-600 text-white shadow-card hover:bg-brand-700 btn-primary"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white" />
    </a>
  );
}
