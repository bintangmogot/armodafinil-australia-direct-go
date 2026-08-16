import React from 'react';
import * as Icons from 'lucide-react';
import { SHIPPING_FEATURES } from '../../mock';

export default function ShippingFeatures() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center">Fast, discreet delivery</h2>
        <p className="mt-2 text-center text-ink-500">Care built into every step — from checkout to your doorstep.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SHIPPING_FEATURES.map((f) => {
            const Icon = Icons[f.icon] || Icons.Package;
            return (
              <div key={f.title} className="bg-white border border-ink-200 rounded-2xl p-6 hover-lift">
                <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 grid place-items-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
