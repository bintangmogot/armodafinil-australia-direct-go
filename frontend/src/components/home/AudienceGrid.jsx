import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { AUDIENCES } from '../../mock';

export default function AudienceGrid() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center">Built for your goals</h2>
        <p className="mt-2 text-center text-ink-500">Choose the profile that fits your day — we’ll guide the rest.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCES.map((a) => {
            const Icon = Icons[a.icon] || Icons.User;
            return (
              <div key={a.title} className="group bg-white border border-ink-200 rounded-2xl p-6 hover-lift flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 grid place-items-center mb-4"><Icon className="w-5 h-5" /></div>
                <h3 className="font-serif text-lg font-semibold text-ink-900">{a.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{a.desc}</p>
                <div className="mt-4 text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-3 py-1.5 self-start">{a.badge}</div>
                <Link to="/product" className="mt-5 text-sm font-semibold text-ink-900 inline-flex items-center gap-1.5 group-hover:text-brand-700">
                  {a.cta} <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
