import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../mock';

export default function FAQBlock({ items }) {
  const list = items || FAQS;
  const [open, setOpen] = React.useState(0);
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center">FAQ</h2>
        <p className="mt-2 text-center text-ink-500">Common questions from Australian customers.</p>
        <div className="mt-10 space-y-3">
          {list.map((f, i) => (
            <div key={i} className="border border-ink-200 rounded-xl bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-ink-900">{f.q}</span>
                <ChevronDown className={`w-4 h-4 text-ink-500 transition-transform ${open === i ? 'rotate-180 text-brand-600' : ''}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-ink-700 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
