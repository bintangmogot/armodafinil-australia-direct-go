import React, { useMemo, useState } from 'react';
import { Search, Package, CreditCard, Truck, User, ShieldCheck, HelpCircle, ChevronDown, Mail, ArrowRight } from 'lucide-react';
import { FAQ_CATEGORIES, FAQS, SITE } from '../mock';
import OrderCTA from '../components/OrderCTA';

const CAT_ICON = {
  'All topics': HelpCircle,
  'Ordering': Package,
  'Payment': CreditCard,
  'Shipping': Truck,
  'Account': User,
};

export default function FAQPage() {
  const [cat, setCat] = useState('All topics');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(0);

  const items = useMemo(() => {
    let list = FAQS;
    if (cat !== 'All topics') list = list.filter((f) => f.cat === cat);
    if (q) list = list.filter((f) => (f.q + ' ' + f.a).toLowerCase().includes(q.toLowerCase()));
    return list;
  }, [cat, q]);

  return (
    <div>
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5">Help centre</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">FAQs</h1>
          <p className="mt-3 text-ink-700">Quick answers on ordering, payments, delivery, and your account. Filter by topic or search below.</p>
          <p className="mt-2 text-xs text-ink-500">Last updated {SITE.lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {FAQ_CATEGORIES.map((c) => {
            const Icon = CAT_ICON[c] || HelpCircle;
            const active = cat === c;
            return (
              <button
                key={c}
                onClick={() => { setCat(c); setOpen(0); }}
                className={`inline-flex items-center gap-2 text-sm font-medium px-4 h-10 rounded-full border transition-colors ${active ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-700 border-ink-200 hover:border-brand-600'}`}
              >
                <Icon className="w-4 h-4" /> {c}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center bg-white border border-ink-200 rounded-full px-4 h-12 max-w-2xl mx-auto shadow-soft">
          <Search className="w-4 h-4 text-ink-500" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions..." className="bg-transparent outline-none border-0 text-sm flex-1 mx-3" />
        </div>

        <div className="mt-8 space-y-3">
          {items.length === 0 && (
            <p className="text-center text-ink-500 py-16">No answers match your search. Try a different keyword.</p>
          )}
          {items.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q} className={`border rounded-2xl bg-white overflow-hidden transition-colors ${active ? 'border-brand-500 shadow-card' : 'border-ink-200'}`}>
                <button onClick={() => setOpen(active ? -1 : i)} className="w-full flex items-center gap-4 text-left px-5 py-4">
                  <span className={`w-8 h-8 grid place-items-center rounded-lg text-sm font-semibold shrink-0 ${active ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700'}`}>{i + 1}</span>
                  <span className="flex-1 font-medium text-ink-900">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-ink-500 transition-transform ${active ? 'rotate-180 text-brand-600' : ''}`} />
                </button>
                {active && (
                  <div className="px-5 pb-5 pl-16 text-sm text-ink-700 leading-relaxed flex gap-3 items-start">
                    <HelpCircle className="w-4 h-4 text-brand-600 mt-1 shrink-0" />
                    <span>{f.a}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14 bg-white border border-ink-200 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink-900">Still need help?</h2>
          <p className="mt-2 text-ink-700">Our pharmacy support team typically responds within one business day.</p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a href={`mailto:${SITE.supportEmail}`} className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary"><Mail className="w-4 h-4" /> {SITE.supportEmail}</a>
            <a href="/contact" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-ink-200 hover:border-brand-600 text-ink-900 font-semibold">Contact us <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> Verified pharmacy</span>
            <span className="inline-flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5 text-brand-600" /> Secure checkout</span>
            <span className="inline-flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-brand-600" /> AU-wide delivery</span>
          </div>
        </div>
      </div>

      <OrderCTA />
    </div>
  );
}
