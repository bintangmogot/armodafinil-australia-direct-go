import React from 'react';
import { Quote, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import { TESTIMONIALS } from '../../mock';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center">What Australians say</h2>
        <p className="mt-2 text-center text-ink-500">A handful of recent notes from verified buyers.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white border border-ink-200 rounded-2xl p-6 hover-lift relative">
              <Quote className="w-6 h-6 text-brand-300 mb-3" />
              <h3 className="font-serif text-lg font-semibold text-ink-900">{t.title}</h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">{t.body}</p>
              <div className="mt-4 pt-4 border-t border-ink-200 text-xs text-ink-500">— {t.name}, {t.city}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500">
          <span className="inline-flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-brand-600" /> Verified buyers only</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> Secure review system</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-600" /> Updated regularly</span>
        </div>
      </div>
    </section>
  );
}
