import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, User2 } from 'lucide-react';
import { BLOG } from '../../mock';

export default function BlogGrid({ limit }) {
  const items = limit ? BLOG.slice(0, limit) : BLOG;
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900">Latest from the blog</h2>
            <p className="mt-2 text-ink-500">Practical notes, dosing guides, and research summaries.</p>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:gap-2 transition-all">All articles <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b) => (
            <Link key={b.slug} to={`/blog/${b.slug}`} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift block">
              <div className="aspect-[16/9] bg-brand-50 overflow-hidden">
                <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">{b.category}</div>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900 line-clamp-2">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-2">{b.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink-500">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {b.date}</span>
                  <span className="inline-flex items-center gap-1.5"><User2 className="w-3.5 h-3.5" /> {b.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
