import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { CATEGORY_TREE } from '../data/categories';
import { PRODUCTS } from '../mock';
import OrderCTA from '../components/OrderCTA';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Categories() {
  return (
    <div>
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5 inline-flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> Browse by category</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">Browse by category</h1>
          <p className="mt-3 text-ink-700">Explore medicines organised by health area and treatment type, from everyday essentials to specialist care. Pick a category to view products and order with fast Australian delivery.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {CATEGORY_TREE.map((c) => {
          const Icon = Icons[c.icon] || Icons.Sparkles;
          const count = PRODUCTS.filter((p) => p.category === c.slug).length;
          return (
            <section key={c.slug}>
              <div className="rounded-2xl border border-ink-200 bg-gradient-to-br from-brand-50 to-white p-6 md:p-8 flex items-start gap-4 flex-wrap">
                <div className="w-14 h-14 rounded-xl bg-white text-brand-700 grid place-items-center shadow-soft"><Icon className="w-6 h-6" /></div>
                <div className="flex-1 min-w-[240px]">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">{c.name}</h2>
                    <span className="text-xs font-semibold text-brand-700 bg-brand-100 rounded-full px-2.5 py-1">{count} products</span>
                  </div>
                  <p className="mt-2 text-ink-700 max-w-3xl">{c.desc}</p>
                </div>
                <Link to={`/category/${c.slug}`} className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-white border border-ink-200 hover:border-brand-500 text-ink-900 text-sm font-semibold">Browse category <ArrowRight className="w-4 h-4" /></Link>
              </div>

              {c.subs.length > 0 && (
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {c.subs.map((s) => (
                    <Link key={s.slug} to={`/category/${c.slug}/${s.slug}`} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift">
                      <div className="aspect-[4/3] bg-brand-50 overflow-hidden">
                        <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-base font-semibold text-ink-900 line-clamp-1">{s.name}</h3>
                        <div className="mt-1 text-xs text-ink-500">Explore ›</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      <OrderCTA />
    </div>
  );
}
