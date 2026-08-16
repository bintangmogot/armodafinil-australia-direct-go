import React from 'react';
import { TRUST_PILLS } from '../../mock';
import { ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const items = [...TRUST_PILLS, ...TRUST_PILLS];
  return (
    <div className="border-y border-ink-200 bg-white overflow-hidden">
      <div className="mask-fade-x">
        <div className="flex gap-10 py-4 animate-marquee whitespace-nowrap">
          {items.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-ink-700">
              <ShieldCheck className="w-4 h-4 text-brand-600" /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
