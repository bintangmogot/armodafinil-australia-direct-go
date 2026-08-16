import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CONDITIONS } from '../../mock';

export default function ConditionsGrid({ limit }) {
  const items = limit ? CONDITIONS.slice(0, limit) : CONDITIONS;
  return (
    <section className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900">Explore by condition</h2>
            <p className="mt-2 text-ink-500">Plain-language guides on what to expect, before you order.</p>
          </div>
          <Link to="/conditions" className="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:gap-2 transition-all">All guides <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((c) => (
            <Link key={c.slug} to={`/conditions/${c.slug}`} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift block">
              <div className="aspect-[16/9] bg-brand-50 overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">Guide</div>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-2">{c.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Read guide <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
