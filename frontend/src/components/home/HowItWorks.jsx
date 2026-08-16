import React from 'react';
import { HOW_IT_WORKS } from '../../mock';

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center">How it works</h2>
        <p className="mt-2 text-center text-ink-500">A gentle, predictable curve across your day.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_IT_WORKS.map((h) => (
            <div key={h.step} className="bg-white border border-ink-200 rounded-2xl p-6 hover-lift relative">
              <div className="w-10 h-10 rounded-full bg-brand-600 text-white grid place-items-center font-semibold">{h.step}</div>
              <div className="mt-4 text-[11px] uppercase tracking-widest font-semibold text-ink-500">{h.time}</div>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900">{h.title}</h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
