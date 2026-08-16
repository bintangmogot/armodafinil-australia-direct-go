import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Truck, Lock, Mail, MessageCircle } from 'lucide-react';
import OrderCTA from './OrderCTA';
import { SITE } from '../mock';

/**
 * Shared layout for numbered policy / legal pages.
 * props:
 *  - eyebrow  : small label above title
 *  - title    : main H1
 *  - intro    : short lead paragraph
 *  - updated  : last-updated string
 *  - sections : [{ id, title, blocks: [{ p } | { list } | { note } | { subH, p } | { table }] }]
 *  - trust    : optional bool to show trust badges row (default true)
 */
export default function PolicyPage({ eyebrow = 'Legal', title, intro, updated, sections, trust = true, cta = null }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = sections[0]?.id;
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY) current = s.id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  return (
    <article>
      {/* Breadcrumb */}
      <div className="border-b border-ink-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center text-xs text-ink-500 gap-2">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <span>/</span>
          <span className="text-ink-900 truncate">{title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> Back to home</Link>
          <div className="mt-6 text-[11px] uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5 inline-block">{eyebrow}</div>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900 leading-tight">{title}</h1>
          {intro && <p className="mt-4 text-lg text-ink-700 leading-relaxed max-w-3xl">{intro}</p>}
          <p className="mt-5 text-xs text-ink-500">Last updated {updated || SITE.lastUpdated}</p>
          {cta && (
            <div className="mt-6">
              <Link to={cta.to} className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">{cta.label} <ArrowRight className="w-4 h-4" /></Link>
            </div>
          )}
        </div>
      </div>

      {/* Body with sticky TOC */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[260px_1fr] gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="text-xs uppercase tracking-widest text-brand-700 font-semibold mb-3">On this page</div>
            <ol className="space-y-1 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={`flex gap-2 items-baseline py-1.5 px-2 rounded border-l-2 transition-colors ${activeId === s.id ? 'border-brand-600 text-brand-700 bg-brand-50' : 'border-transparent text-ink-700 hover:text-brand-700'}`}>
                    <span className="text-xs text-ink-400 tabular-nums w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1 leading-snug">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>

            <div className="mt-8 p-5 rounded-2xl bg-white border border-ink-200">
              <div className="text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">Need help?</div>
              <p className="text-sm text-ink-700">Our team usually replies within one business day.</p>
              <a href={`mailto:${SITE.supportEmail}`} className="mt-3 inline-flex items-center gap-2 h-9 px-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold btn-primary"><Mail className="w-3.5 h-3.5" /> Email support</a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 h-9 px-3 rounded-full border border-ink-200 hover:border-brand-500 text-ink-900 text-xs font-semibold"><MessageCircle className="w-3.5 h-3.5" /> WhatsApp</a>
            </div>
          </div>
        </aside>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className="text-[11px] uppercase tracking-widest text-ink-400 font-semibold tabular-nums">{String(i + 1).padStart(2, '0')}</div>
              <h2 className="mt-1 font-serif text-2xl md:text-3xl font-semibold text-ink-900">{s.title}</h2>
              <div className="mt-4 space-y-4 text-ink-700 leading-relaxed">
                {s.blocks.map((b, j) => {
                  if (b.subH) return (<div key={j}><h3 className="font-serif text-lg font-semibold text-ink-900 mt-4 mb-2">{b.subH}</h3><p>{b.p}</p></div>);
                  if (b.list) return (
                    <ul key={j} className="list-disc pl-6 space-y-1.5">
                      {b.list.map((x, k) => <li key={k}>{x}</li>)}
                    </ul>
                  );
                  if (b.note) return (
                    <div key={j} className="p-4 rounded-xl bg-brand-50 border border-brand-100 text-sm">
                      <div className="text-xs uppercase tracking-widest font-semibold text-brand-700 mb-1">Note</div>
                      <p className="text-ink-700">{b.note}</p>
                    </div>
                  );
                  if (b.warn) return (
                    <div key={j} className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm">
                      <div className="text-xs uppercase tracking-widest font-semibold text-amber-800 mb-1">Important</div>
                      <p className="text-amber-900">{b.warn}</p>
                    </div>
                  );
                  return <p key={j}>{b.p}</p>;
                })}
              </div>
            </section>
          ))}

          {trust && (
            <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500 border-t border-ink-200">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> Verified pharmacy</span>
              <span className="inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-brand-600" /> Secure checkout</span>
              <span className="inline-flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-brand-600" /> AU-wide delivery</span>
            </div>
          )}
        </div>
      </div>

      <OrderCTA />
    </article>
  );
}
