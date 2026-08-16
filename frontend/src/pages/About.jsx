import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Truck, Sparkles, Users, MessageCircle, ArrowRight, Award } from 'lucide-react';
import OrderCTA from '../components/OrderCTA';
import { SITE } from '../mock';

const values = [
  { icon: ShieldCheck, title: 'Integrity first', desc: 'Every batch is verified, every claim is checked, and every parcel carries the same care we would want for our own family.' },
  { icon: HeartHandshake, title: 'Real people, real help', desc: 'Our WhatsApp inbox and email queue are handled by trained team members based in Australia — not a chatbot.' },
  { icon: Truck, title: 'Reliable dispatch', desc: 'Predictable timelines, careful packaging, and honest tracking updates. If something slips, we flag it before you do.' },
];

const stats = [
  { n: '100k+', l: 'Parcels shipped' },
  { n: '4.7 / 5', l: 'Verified rating' },
  { n: '48 hrs', l: 'Median dispatch' },
  { n: '6 yrs', l: 'Serving Australia' },
];

const team = [
  { name: 'Dr. Ginni Mansberg', role: 'Clinical Advisor', bio: 'GP with a special interest in sleep medicine and cognitive health.' },
  { name: 'Dr. Jack Easton', role: 'Editorial Reviewer', bio: 'Medical writer focused on translating research into plain English.' },
  { name: 'Amelia Wong', role: 'Head of Support', bio: 'Runs the WhatsApp and email queue — the friendly voice behind every reply.' },
];

export default function About() {
  return (
    <div>
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5 inline-flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> About us</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">A calmer place to buy focus support</h1>
          <p className="mt-4 text-lg text-ink-700 leading-relaxed">We are a small, Australia-focused team obsessed with the quiet quality of a good order — predictable dispatch, honest information, and calm, human support.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-white border border-ink-200 rounded-2xl p-6 text-center">
              <div className="font-serif text-3xl font-semibold text-ink-900">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ink-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 text-center">What we believe</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-white border border-ink-200 rounded-2xl p-6 hover-lift">
                <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 grid place-items-center"><Icon className="w-5 h-5" /></div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold">Our story</span>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl font-semibold text-ink-900">Why we started {SITE.name} {SITE.brandLine}</h2>
            <p className="mt-4 text-ink-700 leading-relaxed">Shopping for cognitive-support medicine online in Australia used to feel like walking through an unlit corridor — dubious sellers, unclear pricing, and no one to ask when a parcel went sideways.</p>
            <p className="mt-3 text-ink-700 leading-relaxed">We rebuilt that experience around three ideas: transparent product notes, batch-verified sourcing, and a real human at the other end of every message. That is the whole plan.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/product" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Browse the catalogue <ArrowRight className="w-4 h-4" /></Link>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-ink-200 hover:border-brand-600 text-ink-900 font-semibold"><MessageCircle className="w-4 h-4" /> Chat on WhatsApp</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, title: 'TGA-informed', desc: 'Aligned with the spirit of Australian medicine guidance.' },
              { icon: Users, title: 'People-first', desc: 'Support that treats customers as adults with real questions.' },
              { icon: ShieldCheck, title: 'Verified sourcing', desc: 'Batch-level checks before anything ships.' },
              { icon: Truck, title: 'Careful dispatch', desc: 'Neutral packaging and tracked delivery every time.' },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-5 bg-white border border-ink-200 rounded-2xl">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 grid place-items-center"><Icon className="w-5 h-5" /></div>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-ink-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-700">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 text-center">The people behind the parcels</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {team.map((t) => (
            <div key={t.name} className="bg-white border border-ink-200 rounded-2xl p-6 text-center hover-lift">
              <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 grid place-items-center mx-auto font-serif text-2xl font-semibold">{t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-ink-900">{t.name}</h3>
              <div className="text-xs uppercase tracking-widest text-brand-700 font-semibold">{t.role}</div>
              <p className="mt-2 text-sm text-ink-700">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <OrderCTA />
    </div>
  );
}
