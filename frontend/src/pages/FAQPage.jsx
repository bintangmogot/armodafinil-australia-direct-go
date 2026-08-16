import React from 'react';
import FAQBlock from '../components/home/FAQBlock';

export default function FAQPage() {
  return (
    <div>
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5">Help centre</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">Questions, answered</h1>
          <p className="mt-3 text-ink-700">The most common questions from Australian customers, in one place.</p>
        </div>
      </div>
      <FAQBlock />
    </div>
  );
}
