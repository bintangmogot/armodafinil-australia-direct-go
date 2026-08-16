import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => { e.preventDefault(); if (email) setDone(true); };
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-ink-900 text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-600/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">Stay in the loop</h2>
            <p className="mt-2 text-ink-100/70 max-w-xl">Focus tips, dosage explainers, and exclusive Australian-only offers — straight to your inbox. Unsubscribe anytime.</p>
            {done ? (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600/20 text-brand-200 px-4 py-2"><CheckCircle2 className="w-4 h-4" /> Subscribed — check your inbox.</div>
            ) : (
              <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 h-12 rounded-full bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/50 outline-none focus:border-brand-300" />
                <button className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-brand-600 hover:bg-brand-700 font-semibold btn-primary">Subscribe <Send className="w-4 h-4" /></button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/50">Protected by reCAPTCHA. No spam, ever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
