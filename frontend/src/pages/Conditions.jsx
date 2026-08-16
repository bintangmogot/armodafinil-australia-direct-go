import React from 'react';
import { Link } from 'react-router-dom';
import { CONDITIONS } from '../mock';
import { ArrowRight } from 'lucide-react';

export default function Conditions() {
  return (
    <div>
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5">Guides</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">Explore by condition</h1>
          <p className="mt-3 text-ink-700">In-depth, plain-language notes on daily wellness — what to expect, what actually helps, and how to spot the noise.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONDITIONS.map((c) => (
            <Link key={c.slug} to={`/conditions/${c.slug}`} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift block">
              <div className="aspect-[16/9] bg-brand-50">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
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
    </div>
  );
}
