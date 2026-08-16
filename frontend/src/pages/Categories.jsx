import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../mock';
import { Pill, FlaskConical, Heart, ArrowRight, Sparkles } from 'lucide-react';
import OrderCTA from '../components/OrderCTA';

const CATS = [
  { name: 'Armodafinil', icon: Pill, gradient: 'from-brand-500/10 to-brand-100', desc: 'Long-duration wakefulness support tablets — favoured for extended cognitive sessions and rotating shift-work.' },
  { name: 'Modafinil', icon: FlaskConical, gradient: 'from-brand-500/10 to-brand-100', desc: 'Classic wakefulness support — a smooth onset and slightly shorter tail than Armodafinil variants.' },
  { name: 'Wellness', icon: Heart, gradient: 'from-brand-500/10 to-brand-100', desc: 'Selected complementary items dispatched alongside our core cognitive line-up.' },
];

export default function Categories() {
  return (
    <div>
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5 inline-flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> Browse by category</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">Categories</h1>
          <p className="mt-3 text-ink-700">Pick a family to explore — every category ships in neutral outer packaging and tracked from dispatch to your doorstep.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {CATS.map((c) => {
          const items = PRODUCTS.filter((p) => p.category === c.name);
          const Icon = c.icon;
          return (
            <section key={c.name}>
              <div className={`rounded-2xl border border-ink-200 bg-gradient-to-br ${c.gradient} p-6 md:p-8 flex items-start gap-4 flex-wrap`}>
                <div className="w-12 h-12 rounded-xl bg-white text-brand-700 grid place-items-center shadow-soft"><Icon className="w-5 h-5" /></div>
                <div className="flex-1 min-w-[220px]">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">{c.name}</h2>
                  <p className="mt-2 text-ink-700 max-w-2xl">{c.desc}</p>
                </div>
                <Link to="/product" className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-white border border-ink-200 hover:border-brand-500 text-ink-900 text-sm font-semibold">Browse all <ArrowRight className="w-4 h-4" /></Link>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {items.map((p) => (
                  <Link key={p.slug} to={`/product/${p.slug}`} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift">
                    <div className="aspect-[4/3] bg-brand-50"><img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                    <div className="p-5">
                      <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">{p.strength}</div>
                      <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900 line-clamp-2">{p.name}</h3>
                      <div className="mt-3 text-lg font-semibold text-ink-900">A${p.price.toFixed(2)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <OrderCTA />
    </div>
  );
}
