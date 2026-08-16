import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Shield, Truck, CreditCard, Facebook, Instagram, Twitter } from 'lucide-react';
import { SITE } from '../mock';

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink-900 text-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-2">
          <div className="font-serif text-2xl font-semibold text-white">{SITE.name} <span className="text-brand-300">{SITE.region}</span></div>
          <p className="mt-3 text-sm text-ink-100/70 max-w-sm">Steady focus, cleaner clarity, and dependable dispatch — built for Australian customers who take their day seriously.</p>
          <div className="mt-5 flex items-center gap-3 text-brand-300">
            <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3 text-sm uppercase tracking-widest">Shop</div>
          <ul className="space-y-2 text-sm text-ink-100/80">
            <li><Link to="/product" className="hover:text-brand-300">All products</Link></li>
            <li><Link to="/categories" className="hover:text-brand-300">Categories</Link></li>
            <li><Link to="/conditions" className="hover:text-brand-300">Condition guides</Link></li>
            <li><Link to="/blog" className="hover:text-brand-300">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3 text-sm uppercase tracking-widest">Help</div>
          <ul className="space-y-2 text-sm text-ink-100/80">
            <li><Link to="/faq" className="hover:text-brand-300">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-brand-300">Contact</Link></li>
            <li><Link to="/shipping" className="hover:text-brand-300">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-brand-300">Returns</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3 text-sm uppercase tracking-widest">Company</div>
          <ul className="space-y-2 text-sm text-ink-100/80">
            <li><Link to="/about" className="hover:text-brand-300">About</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-300">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-brand-300">Terms</Link></li>
            <li><a href={SITE.whatsapp} className="hover:text-brand-300">WhatsApp support</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-ink-100/60">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-brand-300" /> SSL secured</span>
            <span className="inline-flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-brand-300" /> AU-wide dispatch</span>
            <span className="inline-flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5 text-brand-300" /> Encrypted checkout</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-300" /> Sydney, AU</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-brand-300" /> {SITE.supportEmail}</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-brand-300" /> +61 4 8999 5839</span>
          </div>
          <div>© {new Date().getFullYear()} {SITE.name}. Information only — not medical advice.</div>
        </div>
      </div>
    </footer>
  );
}
