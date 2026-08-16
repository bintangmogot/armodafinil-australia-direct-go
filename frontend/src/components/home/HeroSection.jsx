import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Sparkles, Minus, Plus, Info } from 'lucide-react';
import { HERO, SITE } from '../../mock';
import { useCart } from '../../cart/CartContext';

export default function HeroSection() {
  const [qty, setQty] = React.useState(1);
  const [active, setActive] = React.useState(HERO.featured.variants[0]);
  const { add } = useCart();

  return (
    <section className="section-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="animate-fadeup">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 bg-brand-100 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> {HERO.eyebrow}
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] font-semibold text-ink-900">
            {HERO.title}
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-xl">{HERO.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={HERO.ctaTo} className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">
              {HERO.ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/conditions" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-ink-200 hover:border-brand-600 text-ink-900 font-semibold">
              Explore guides
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-ink-200 shadow-card overflow-hidden animate-fadeup">
          <div className="aspect-[16/9] bg-brand-50">
            <img src={HERO.featured.image} alt={HERO.featured.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-xl font-semibold text-ink-900">{HERO.featured.title}</h3>
              <span className="shrink-0 text-xs font-semibold text-brand-700 bg-brand-100 px-2.5 py-1 rounded-full">{HERO.featured.stock}</span>
            </div>
            <div className="mt-4">
              <div className="text-[11px] uppercase tracking-widest text-ink-500 mb-2">{HERO.featured.unit}</div>
              <div className="flex flex-wrap gap-1.5">
                {HERO.featured.variants.map((v) => (
                  <button key={v} onClick={() => setActive(v)} className={`text-xs font-semibold px-2.5 py-1.5 rounded-md border transition-colors ${active === v ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-700 border-ink-200 hover:border-brand-600'}`}>{v}</button>
                ))}
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 shrink-0" /> {HERO.featured.note}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <div className="text-2xl font-semibold text-ink-900">{SITE.currency}{HERO.featured.price.toFixed(2)}</div>
                <div className="text-xs text-ink-500">{HERO.featured.strength}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center border border-ink-200 rounded-full overflow-hidden">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-9 grid place-items-center hover:bg-ink-100"><Minus className="w-4 h-4" /></button>
                  <span className="w-8 text-center text-sm font-medium">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="w-9 h-9 grid place-items-center hover:bg-ink-100"><Plus className="w-4 h-4" /></button>
                </div>
                <button
                  onClick={() => add({ slug: HERO.featured.slug, name: HERO.featured.title, price: HERO.featured.price, image: HERO.featured.image }, qty)}
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold btn-primary"
                >
                  <ShoppingCart className="w-4 h-4" /> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
