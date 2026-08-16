import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CONDITIONS } from '../mock';
import { ArrowLeft } from 'lucide-react';

export default function ConditionDetail() {
  const { slug } = useParams();
  const c = CONDITIONS.find((x) => x.slug === slug);
  if (!c) return <div className="max-w-3xl mx-auto py-24 text-center"><h1 className="font-serif text-3xl">Guide not found</h1></div>;
  return (
    <article>
      <div className="section-wash">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <Link to="/conditions" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> All guides</Link>
          <div className="mt-6 text-[11px] uppercase tracking-widest text-brand-700 font-semibold">Guide</div>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl font-semibold text-ink-900">{c.title}</h1>
          <p className="mt-3 text-lg text-ink-700 leading-relaxed">{c.excerpt}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-brand-50 border border-ink-200">
          <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
        </div>
        <div className="prose prose-slate max-w-none mt-8 text-ink-700 leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-ink-900">Overview</h2>
          <p>This guide summarises the everyday factors most Australians should understand — without medical jargon. We stick to widely-accepted principles and flag anything that requires a professional opinion.</p>
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mt-8">What to watch for</h2>
          <p>Small daily choices — sleep timing, hydration, screen breaks, movement — compound quickly. If you notice sustained changes in the areas below, book a check-in with your GP.</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Steady loss of energy or focus outside expected windows</li>
            <li>Discomfort that lasts more than two weeks</li>
            <li>Sudden changes in appetite, sleep, or mood</li>
          </ul>
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mt-8">Practical routines that help</h2>
          <p>Consistency beats intensity. Anchor a single small habit — a 10-minute walk, a 22:30 lights-out, a glass of water before coffee — and build outward. When in doubt, ask us via WhatsApp before making a purchase decision.</p>
        </div>
      </div>
    </article>
  );
}
