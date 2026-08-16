import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG } from '../mock';
import { CalendarDays, User2, ArrowRight } from 'lucide-react';
import OrderCTA from '../components/OrderCTA';

export default function Blog() {
  const [feat, ...rest] = BLOG;
  return (
    <div>
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5">Journal</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">From the blog</h1>
          <p className="mt-3 text-ink-700">Practical productivity notes, dosing explainers, and honest research summaries.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {feat && (
          <Link to={`/blog/${feat.slug}`} className="grid lg:grid-cols-2 gap-8 items-center group">
            <div className="aspect-[16/10] rounded-2xl bg-brand-50 overflow-hidden">
              <img src={feat.image} alt={feat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">{feat.category}</div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-semibold text-ink-900">{feat.title}</h2>
              <p className="mt-3 text-ink-700 leading-relaxed">{feat.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-ink-500">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {feat.date}</span>
                <span className="inline-flex items-center gap-1.5"><User2 className="w-3.5 h-3.5" /> {feat.author}</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Read article <ArrowRight className="w-4 h-4" /></span>
            </div>
          </Link>
        )}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((b) => (
            <Link key={b.slug} to={`/blog/${b.slug}`} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift block">
              <div className="aspect-[16/9] bg-brand-50"><img src={b.image} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">{b.category}</div>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900 line-clamp-2">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-2">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <OrderCTA />
    </div>
  );
}
