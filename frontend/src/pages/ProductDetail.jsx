import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, SITE } from '../mock';
import { useCart } from '../cart/CartContext';
import {
  Minus, Plus, Star, ShoppingCart, ShieldCheck, Truck, Lock, ArrowLeft, ArrowRight,
  Heart, Share2, Copy, Check, Info, AlertTriangle, BadgeCheck, ChevronDown,
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import OrderCTA from '../components/OrderCTA';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [variantIdx, setVariantIdx] = useState(1);
  const [tab, setTab] = useState('description');
  const [copied, setCopied] = useState(false);
  const [specsOpen, setSpecsOpen] = useState(true);

  if (!product) return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="font-serif text-3xl">Product not found</h1>
      <Link to="/product" className="mt-6 inline-block text-brand-700 font-semibold">← Back to products</Link>
    </div>
  );

  const selectedVariant = product.variants[variantIdx];
  const pricePerTablet = (selectedVariant.price / selectedVariant.qty).toFixed(2);
  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  const copyCode = async () => {
    try { await navigator.clipboard.writeText(SITE.promoCode); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-ink-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center text-xs text-ink-500 gap-2">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <span>/</span>
          <Link to="/product" className="hover:text-brand-700">Products</Link>
          <span>/</span>
          <span className="text-ink-900 truncate">{product.name}</span>
        </div>
      </div>

      <div className="section-wash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Link to="/product" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> All products</Link>

          <div className="mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="bg-white rounded-2xl border border-ink-200 overflow-hidden shadow-soft">
              <div className="aspect-square bg-brand-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 grid grid-cols-4 gap-2 border-t border-ink-200">
                {[1,2,3,4].map((i) => (
                  <button key={i} className={`aspect-square rounded-lg overflow-hidden border ${i === 1 ? 'border-brand-500' : 'border-ink-200 hover:border-brand-300'}`}>
                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-brand-700 bg-brand-100 rounded-full px-2.5 py-1">{product.badge}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-2.5 py-1"><BadgeCheck className="w-3.5 h-3.5" /> In stock</span>
              </div>
              <h1 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">{product.name}</h1>
              <div className="mt-3 flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-ink-200'}`} />
                ))}
                <span className="text-sm text-ink-500">{product.rating.toFixed(1)} · <a href="#reviews" className="hover:text-brand-700 underline decoration-dotted">({product.reviews} reviews)</a></span>
              </div>

              <div className="mt-5 flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl font-semibold text-ink-900">{SITE.currency}{selectedVariant.price.toFixed(2)}</span>
                <span className="text-sm text-ink-500">{SITE.currency}{pricePerTablet} / tablet</span>
              </div>

              {/* Promo strip */}
              <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3 flex-wrap">
                <Info className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-sm text-amber-900 flex-1 min-w-[200px]">Free shipping + 10% off on orders above <b>{SITE.currency}{SITE.freeShippingThreshold}</b>. Use code:</p>
                <button onClick={copyCode} className="inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-dashed border-amber-500 bg-white text-amber-800 font-mono font-semibold text-sm hover:bg-amber-100">
                  {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> {SITE.promoCode}</>}
                </button>
              </div>

              {/* Variants */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink-900">Tablets</span>
                  <span className="text-ink-500">Prices vary</span>
                </div>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {product.variants.map((v, i) => (
                    <button key={v.qty} onClick={() => setVariantIdx(i)} className={`p-3 rounded-xl border text-left transition-colors ${variantIdx === i ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-900 border-ink-200 hover:border-brand-500'}`}>
                      <div className="text-lg font-semibold">{v.qty}</div>
                      <div className={`text-xs ${variantIdx === i ? 'text-white/80' : 'text-ink-500'}`}>{SITE.currency}{v.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Buy row */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center border border-ink-200 rounded-full overflow-hidden bg-white">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-11 grid place-items-center hover:bg-ink-100"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center text-sm font-semibold">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="w-10 h-11 grid place-items-center hover:bg-ink-100"><Plus className="w-4 h-4" /></button>
                </div>
                <button
                  onClick={() => add({ ...product, price: selectedVariant.price, name: `${product.name} · ${selectedVariant.qty}` }, qty)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
                <Link to="/cart" className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-ink-900 hover:bg-ink-800 text-white font-semibold btn-primary">Buy now <ArrowRight className="w-4 h-4" /></Link>
                <button aria-label="Wishlist" className="w-11 h-11 grid place-items-center rounded-full border border-ink-200 hover:border-brand-500 hover:text-brand-600 text-ink-500 bg-white"><Heart className="w-4 h-4" /></button>
                <button aria-label="Share" className="w-11 h-11 grid place-items-center rounded-full border border-ink-200 hover:border-brand-500 hover:text-brand-600 text-ink-500 bg-white"><Share2 className="w-4 h-4" /></button>
              </div>

              {/* Trust row */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700"><Truck className="w-4 h-4 text-brand-600" /> AU-wide dispatch</div>
                <div className="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700"><Lock className="w-4 h-4 text-brand-600" /> Encrypted checkout</div>
                <div className="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700"><ShieldCheck className="w-4 h-4 text-brand-600" /> Quality verified</div>
              </div>

              {/* Specs */}
              <div className="mt-6 border border-ink-200 rounded-2xl bg-white overflow-hidden">
                <button onClick={() => setSpecsOpen((v) => !v)} className="w-full flex items-center justify-between px-5 py-3">
                  <span className="font-semibold text-ink-900 inline-flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-brand-600" /> Product specs <span className="text-ink-500 font-normal">({Object.keys(product.specs).length})</span></span>
                  <ChevronDown className={`w-4 h-4 text-ink-500 transition-transform ${specsOpen ? 'rotate-180' : ''}`} />
                </button>
                {specsOpen && (
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 px-5 pb-5 text-sm border-t border-ink-200 pt-4">
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4">
                        <dt className="text-ink-500 capitalize">{k}</dt>
                        <dd className="text-ink-900 font-medium text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-1 border-b border-ink-200 overflow-x-auto">
          {[
            ['description', 'Description'],
            ['dosage', 'Uses & Dosage'],
            ['safety', 'Safety Info'],
            ['faqs', 'FAQs'],
          ].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} className={`shrink-0 px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors ${tab === id ? 'text-brand-700 border-brand-600' : 'text-ink-500 border-transparent hover:text-ink-900'}`}>{label}</button>
          ))}
        </div>

        <div className="py-8 max-w-3xl">
          {tab === 'description' && (
            <div className="space-y-4 text-ink-700 leading-relaxed">
              <h2 className="font-serif text-2xl font-semibold text-ink-900">About {product.name}</h2>
              <p>{product.name} is a wakefulness-support tablet formulated to help adults sustain daytime alertness during demanding schedules. It is dispensed in neutral packaging and shipped tracked across Australia.</p>
              <h3 className="font-serif text-xl font-semibold text-ink-900 mt-6">How it typically feels</h3>
              <p>Most users report a calm, steady lift beginning within 15–30 minutes of a fasted dose. Attention becomes easier to hold, mental fatigue softens, and the tail of the effect fades gradually rather than crashing.</p>
              <h3 className="font-serif text-xl font-semibold text-ink-900 mt-6">Key benefits</h3>
              <ul className="space-y-2">
                {['Supports steady daytime wakefulness', 'Reduces the mid-afternoon energy dip', 'Cleaner focus on long, single-track tasks', 'Comfortable comedown — no jitter or sharp crash', 'Consistent, batch-tested supply'].map((x) => (
                  <li key={x} className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-600 mt-1 shrink-0" /> {x}</li>
                ))}
              </ul>
              <h3 className="font-serif text-xl font-semibold text-ink-900 mt-6">Who it suits</h3>
              <p>Typically chosen by shift workers, students in exam season, and professionals balancing back-to-back mental work. Always confirm suitability with your GP before starting anything new.</p>
            </div>
          )}
          {tab === 'dosage' && (
            <div className="space-y-4 text-ink-700 leading-relaxed">
              <h2 className="font-serif text-2xl font-semibold text-ink-900">Uses & Dosage</h2>
              <p>Please follow the guidance printed on the leaflet inside your parcel and any personal advice from your prescriber. Do not combine with other stimulant medicines or high-dose caffeine without professional oversight.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-600 mt-1 shrink-0" /> Take once daily, ideally after a light breakfast.</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-600 mt-1 shrink-0" /> Avoid dosing after early afternoon — the tail can disturb sleep.</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-600 mt-1 shrink-0" /> Hydrate through the day and eat regular meals.</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-600 mt-1 shrink-0" /> Discontinue and consult a doctor if you develop rash, chest pain, or severe mood changes.</li>
              </ul>
            </div>
          )}
          {tab === 'safety' && (
            <div className="space-y-4 text-ink-700 leading-relaxed">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-sm text-red-900">
                  <b>Important Usage Note.</b> {product.name} is a Schedule 4 (prescription-only) medicine in Australia. Effects, dosage, and possible side-effects can differ from person to person. This site is informational — never a substitute for professional medical advice.
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-ink-900 mt-2">Possible side-effects</h3>
              <ul className="space-y-1 list-disc pl-6">
                <li>Headache</li>
                <li>Nausea or mild digestive upset</li>
                <li>Anxiety or restlessness</li>
                <li>Insomnia if dosed too late in the day</li>
                <li>Rare hypersensitivity reactions</li>
              </ul>
              <p className="text-xs text-ink-500 mt-4">Medically reviewed by our clinical panel. Last updated: {SITE.lastUpdated}.</p>
            </div>
          )}
          {tab === 'faqs' && (
            <div className="space-y-3">
              {[
                { q: `Is ${product.name} suitable for regular use?`, a: 'Regular use should be reviewed with your GP. Many adults tolerate it well as part of a professional treatment plan.' },
                { q: 'How quickly will I feel the effect?', a: 'Onset is usually 15–30 minutes on an empty stomach. A large meal can delay onset by 30–60 minutes.' },
                { q: 'Does the parcel look discreet?', a: 'Yes — plain outer packaging with no product names or clinical labelling on the outside.' },
              ].map((f, i) => (
                <details key={i} className="group bg-white border border-ink-200 rounded-xl overflow-hidden">
                  <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-4">
                    <span className="font-medium text-ink-900">{f.q}</span>
                    <ChevronDown className="w-4 h-4 text-ink-500 group-open:rotate-180 group-open:text-brand-600 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-ink-700 leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reviews */}
      <div id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">Verified reviews</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { t: 'Steady, no crash', b: 'Used the 200mg pack across two exam weeks. Focus was clean and the drop-off gentle by evening.' },
            { t: 'Fast, discreet parcel', b: 'Arrived within the estimate and packaging was neutral. Support answered a dosing question the same day.' },
            { t: 'Sensible price', b: 'Compared several sites — the pricing here is fair and the reorder experience is smooth.' },
          ].map((r, i) => (
            <div key={i} className="p-5 bg-white border border-ink-200 rounded-2xl">
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-amber-500" />)}
              </div>
              <h3 className="font-serif text-lg font-semibold">{r.t}</h3>
              <p className="mt-1 text-sm text-ink-700">{r.b}</p>
              <p className="mt-3 text-xs text-ink-500">— Verified buyer</p>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Bought Together */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">Frequently Bought Together</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </div>

      <OrderCTA />
    </div>
  );
}
