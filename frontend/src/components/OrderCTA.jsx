import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Truck, Headphones, ArrowRight } from 'lucide-react';
import { SITE } from '../mock';

export default function OrderCTA() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-ink-200 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-100 blur-3xl" aria-hidden />
            <div className="relative">
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-700">Get started</span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-semibold text-ink-900">Ready to order with confidence?</h2>
              <p className="mt-3 text-ink-700 max-w-xl">Pick your pack size, complete a secure checkout in minutes, and track your discreet parcel anywhere in Australia.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/product" className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Order now <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/faq" className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-ink-200 hover:border-brand-600 text-ink-900 font-semibold">How ordering works</Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> Verified pharmacy</span>
                <span className="inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-brand-600" /> Secure checkout</span>
                <span className="inline-flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-brand-600" /> AU-wide delivery</span>
              </div>
            </div>
          </div>
          <div className="bg-ink-900 text-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
            <div className="relative">
              <span className="text-xs uppercase tracking-widest text-brand-300 font-semibold">Speak with our team</span>
              <h3 className="mt-2 font-serif text-2xl font-semibold">Australian support</h3>
              <p className="mt-2 text-ink-100/70 text-sm leading-relaxed">Product questions and delivery help — Mon–Fri, 9am–5pm AEST.</p>
              <a href={`mailto:${SITE.supportEmail}`} className="mt-5 inline-flex items-center gap-2 h-10 px-5 rounded-full bg-white text-ink-900 text-sm font-semibold hover:bg-brand-100"><Headphones className="w-4 h-4" /> Contact support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
