import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, SITE } from '../mock';
import { useCart } from '../cart/CartContext';
import { Minus, Plus, Star, ShoppingCart, ShieldCheck, Truck, Lock, ArrowLeft, CheckCircle2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('overview');

  if (!product) return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="font-serif text-3xl">Product not found</h1>
      <Link to="/product" className="mt-6 inline-block text-brand-700 font-semibold">← Back to products</Link>
    </div>
  );

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div>
      <div className="section-wash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <Link to="/product" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> All products</Link>
          <div className="mt-6 grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl border border-ink-200 overflow-hidden">
              <div className="aspect-square bg-brand-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">{product.category}</div>
              <h1 className="mt-2 font-serif text-3xl md:text-4xl font-semibold text-ink-900">{product.name}</h1>
              <div className="mt-3 flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-ink-200'}`} />
                ))}
                <span className="text-sm text-ink-500">({product.rating.toFixed(1)}) · 128 verified buyers</span>
              </div>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-semibold text-ink-900">{SITE.currency}{product.price.toFixed(2)}</span>
                <span className="text-sm text-ink-500 line-through">{SITE.currency}{(product.price * 1.15).toFixed(2)}</span>
                <span className="text-xs font-semibold text-brand-700 bg-brand-100 rounded-full px-2 py-0.5">Save 15%</span>
              </div>
              <p className="mt-5 text-ink-700 leading-relaxed">{product.name} offers steady daytime clarity favoured by Australians who prioritise clean focus without harsh peaks. Every pack ships in neutral outer packaging with tracked dispatch.</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex items-center border border-ink-200 rounded-full overflow-hidden bg-white">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-11 grid place-items-center hover:bg-ink-100"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center text-sm font-semibold">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="w-10 h-11 grid place-items-center hover:bg-ink-100"><Plus className="w-4 h-4" /></button>
                </div>
                <button onClick={() => add(product, qty)} className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">
                  <ShoppingCart className="w-4 h-4" /> Add to cart
                </button>
                <Link to="/cart" className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-ink-900 hover:bg-ink-800 text-white font-semibold btn-primary">Buy now</Link>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700"><Truck className="w-4 h-4 text-brand-600" /> AU-wide dispatch</div>
                <div className="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700"><Lock className="w-4 h-4 text-brand-600" /> Encrypted checkout</div>
                <div className="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700"><ShieldCheck className="w-4 h-4 text-brand-600" /> Quality verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-2 border-b border-ink-200">
          {['overview', 'usage', 'shipping', 'reviews'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-3 text-sm font-semibold capitalize border-b-2 -mb-px ${tab === t ? 'text-brand-700 border-brand-600' : 'text-ink-500 border-transparent hover:text-ink-900'}`}>{t}</button>
          ))}
        </div>
        <div className="py-8 max-w-3xl">
          {tab === 'overview' && (
            <div className="space-y-4 text-ink-700 leading-relaxed">
              <p>This product delivers a smooth, sustained window of alertness — typically favoured by knowledge workers, students in exam season, and professionals managing extended shifts. The formulation is developed to reduce jitter while maintaining clean focus.</p>
              <ul className="space-y-2">
                {['Duration: comfortable 10–14 hour window', 'Onset: usually 15–30 minutes after a fasted dose', 'Feel: calm alertness, minimal restlessness', 'Storage: cool, dry, away from direct sunlight'].map((x) => (
                  <li key={x} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-600 mt-1" /> {x}</li>
                ))}
              </ul>
            </div>
          )}
          {tab === 'usage' && (
            <div className="space-y-3 text-ink-700 leading-relaxed">
              <p>Please follow the guidance printed on the leaflet inside your pack and any personal advice from your doctor. Never combine with other stimulants without professional oversight. Not intended as medical advice.</p>
            </div>
          )}
          {tab === 'shipping' && (
            <div className="space-y-3 text-ink-700 leading-relaxed">
              <p>Orders ship from partnered facilities within 24–48 business hours. Standard Australian delivery lands in 6–12 business days depending on postcode. All parcels use neutral outer packaging and include a tracking link.</p>
            </div>
          )}
          {tab === 'reviews' && (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-5 border border-ink-200 rounded-xl bg-white">
                  <div className="flex items-center gap-2 text-amber-500 mb-2">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-amber-500" />)}</div>
                  <p className="text-sm text-ink-700">Consistent, clean focus — exactly what the product page describes. Packaging arrived neutral and tracking updated the same day.</p>
                  <p className="mt-2 text-xs text-ink-500">— Verified buyer</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">You may also like</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </div>
    </div>
  );
}
