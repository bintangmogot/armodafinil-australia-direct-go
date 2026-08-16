import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/CartContext';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { SITE } from '../mock';

export default function Cart() {
  const { items, update, remove, subtotal, clear } = useCart();
  const shipping = subtotal > 299 ? 0 : 12.5;
  const total = subtotal + shipping;

  if (items.length === 0) return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <ShoppingBag className="w-10 h-10 text-brand-600 mx-auto" />
      <h1 className="mt-4 font-serif text-3xl font-semibold text-ink-900">Your cart is empty</h1>
      <p className="mt-2 text-ink-500">Browse the catalogue and add something to get started.</p>
      <Link to="/product" className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Explore products <ArrowRight className="w-4 h-4" /></Link>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900">Your cart</h1>
      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((i) => (
            <div key={i.slug} className="flex gap-4 bg-white border border-ink-200 rounded-2xl p-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-brand-50 shrink-0"><img src={i.image} alt={i.name} className="w-full h-full object-cover" /></div>
              <div className="flex-1 min-w-0">
                <div className="font-serif text-lg font-semibold text-ink-900 line-clamp-1">{i.name}</div>
                <div className="text-sm text-ink-500 mt-1">{SITE.currency}{i.price.toFixed(2)} each</div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center border border-ink-200 rounded-full overflow-hidden">
                    <button onClick={() => update(i.slug, i.qty - 1)} className="w-9 h-9 grid place-items-center hover:bg-ink-100"><Minus className="w-4 h-4" /></button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => update(i.slug, i.qty + 1)} className="w-9 h-9 grid place-items-center hover:bg-ink-100"><Plus className="w-4 h-4" /></button>
                  </div>
                  <div className="font-semibold text-ink-900">{SITE.currency}{(i.price * i.qty).toFixed(2)}</div>
                  <button onClick={() => remove(i.slug)} className="text-ink-500 hover:text-red-600" aria-label="Remove"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clear} className="text-sm text-ink-500 hover:text-red-600">Clear cart</button>
        </div>
        <aside className="bg-white border border-ink-200 rounded-2xl p-6 h-fit sticky top-24">
          <h2 className="font-serif text-xl font-semibold text-ink-900">Order summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-ink-500">Subtotal</dt><dd className="font-medium">{SITE.currency}{subtotal.toFixed(2)}</dd></div>
            <div className="flex justify-between"><dt className="text-ink-500">Shipping</dt><dd className="font-medium">{shipping === 0 ? 'Free' : `${SITE.currency}${shipping.toFixed(2)}`}</dd></div>
            <div className="flex justify-between pt-3 border-t border-ink-200"><dt className="font-semibold text-ink-900">Total</dt><dd className="font-semibold text-ink-900">{SITE.currency}{total.toFixed(2)}</dd></div>
          </dl>
          {subtotal < 299 && <p className="mt-3 text-xs text-brand-700 bg-brand-50 rounded-lg p-3">Add {SITE.currency}{(299 - subtotal).toFixed(2)} more to unlock free shipping + 10% off.</p>}
          <button className="mt-5 w-full inline-flex justify-center items-center gap-2 h-11 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Checkout <ArrowRight className="w-4 h-4" /></button>
          <p className="mt-3 text-xs text-ink-500 text-center">Secure, encrypted checkout · discreet packaging</p>
        </aside>
      </div>
    </div>
  );
}
