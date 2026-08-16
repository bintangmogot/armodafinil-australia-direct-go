import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CONDITIONS } from '../mock';
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import OrderCTA from '../components/OrderCTA';

export default function ConditionDetail() {
  const { slug } = useParams();
  const c = CONDITIONS.find((x) => x.slug === slug);
  if (!c) return <div className="max-w-3xl mx-auto py-24 text-center"><h1 className="font-serif text-3xl">Guide not found</h1></div>;

  const related = CONDITIONS.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <article>
      {/* Breadcrumb */}
      <div className="border-b border-ink-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center text-xs text-ink-500 gap-2">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <span>/</span>
          <Link to="/conditions" className="hover:text-brand-700">Conditions</Link>
          <span>/</span>
          <span className="text-ink-900 truncate">{c.title}</span>
        </div>
      </div>

      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <Link to="/conditions" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> All guides</Link>
          <div className="mt-6 text-[11px] uppercase tracking-widest text-brand-700 font-semibold">Guide</div>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl font-semibold text-ink-900 leading-tight">{c.title}</h1>
          <p className="mt-4 text-lg text-ink-700 leading-relaxed">{c.excerpt}</p>
          <div className="mt-5 flex items-center gap-3 flex-wrap text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> Medically reviewed</span>
            <span>·</span>
            <span>Reading time · 4 min</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-brand-50 border border-ink-200">
          <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
        </div>

        <div className="mt-10 space-y-8 text-ink-700 leading-relaxed">
          {c.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">{s.h}</h2>
              {s.p && <p className="mt-3 text-base md:text-lg">{s.p}</p>}
              {s.list && (
                <ul className="mt-4 space-y-2">
                  {s.list.map((x) => <li key={x} className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-600 mt-1 shrink-0" /> {x}</li>)}
                </ul>
              )}
            </section>
          ))}

          <div className="mt-10 p-6 rounded-2xl bg-brand-50 border border-brand-100">
            <div className="text-xs uppercase tracking-widest text-brand-700 font-semibold">Editor’s note</div>
            <p className="mt-2 text-ink-700">This guide is informational and does not replace personalised medical advice. If any symptoms persist or worsen, please book an appointment with your GP or a qualified specialist.</p>
          </div>
        </div>
      </div>

      {/* Related guides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-ink-200">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">Related guides</h2>
          <Link to="/conditions" className="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:gap-2 transition-all">All guides <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((r) => (
            <Link key={r.slug} to={`/conditions/${r.slug}`} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift block">
              <div className="aspect-[16/9] bg-brand-50"><img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">Guide</div>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-2">{r.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Read guide <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <OrderCTA />
    </article>
  );
}
