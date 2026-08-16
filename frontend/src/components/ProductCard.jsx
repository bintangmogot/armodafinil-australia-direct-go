import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { useCart } from '../cart/CartContext';
import { SITE } from '../mock';

export default function ProductCard({ p }) {
  const { add } = useCart();
  return (
    <div className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift flex flex-col">
      <Link to={`/product/${p.slug}`} className="block aspect-[4/3] bg-brand-50 overflow-hidden">
        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </Link>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(p.rating) ? 'fill-amber-500' : 'fill-none text-ink-200'}`} />
          ))}
          <span className="ml-1 text-xs text-ink-500 font-medium">{p.rating.toFixed(1)}</span>
        </div>
        <Link to={`/product/${p.slug}`} className="font-serif text-lg font-semibold text-ink-900 leading-snug hover:text-brand-700 line-clamp-2">{p.name}</Link>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold text-ink-900">{SITE.currency}{p.price.toFixed(2)}</span>
          <span className="text-xs text-ink-500">/ pack</span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-700">
          <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
        </div>
        <button
          onClick={() => add(p)}
          className="mt-auto inline-flex justify-center items-center gap-2 h-10 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold btn-primary"
        >
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
