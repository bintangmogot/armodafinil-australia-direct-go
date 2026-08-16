import React from 'react';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE } from '../../mock';

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center">Why high-achievers choose us</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {WHY_CHOOSE.map((w) => {
            const Icon = Icons[w.icon] || Icons.ShieldCheck;
            return (
              <div key={w.title} className="bg-white border border-ink-200 rounded-2xl p-7 hover-lift text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 grid place-items-center"><Icon className="w-6 h-6" /></div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-ink-900">{w.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{w.desc}</p>
                <span className="mt-4 inline-block text-[11px] uppercase tracking-widest font-semibold text-brand-700 bg-brand-100 rounded-full px-3 py-1">{w.tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
