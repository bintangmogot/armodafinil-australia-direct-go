import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE } from '../mock';

export default function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900">Get in touch</h1>
          <p className="mt-3 text-ink-700">Prefer WhatsApp? We usually respond within minutes during Australian business hours.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {[
            { icon: MessageCircle, label: 'WhatsApp', value: '+61 4 8999 5839', href: SITE.whatsapp },
            { icon: Mail, label: 'Email', value: SITE.supportEmail, href: `mailto:${SITE.supportEmail}` },
            { icon: Phone, label: 'Phone', value: '+61 4 8999 5839', href: 'tel:+61489995839' },
            { icon: MapPin, label: 'Address', value: 'Sydney, NSW, Australia' },
          ].map((it) => (
            <a key={it.label} href={it.href} className="flex items-start gap-3 p-4 bg-white border border-ink-200 rounded-2xl hover-lift">
              <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 grid place-items-center"><it.icon className="w-5 h-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-ink-500">{it.label}</div>
                <div className="mt-0.5 font-medium text-ink-900">{it.value}</div>
              </div>
            </a>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="lg:col-span-2 bg-white border border-ink-200 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink-900">Send us a message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block"><span className="text-sm text-ink-700">Full name</span>
              <input required className="mt-1 w-full h-11 rounded-lg border border-ink-200 px-3 outline-none focus:border-brand-600" />
            </label>
            <label className="block"><span className="text-sm text-ink-700">Email</span>
              <input type="email" required className="mt-1 w-full h-11 rounded-lg border border-ink-200 px-3 outline-none focus:border-brand-600" />
            </label>
          </div>
          <label className="block"><span className="text-sm text-ink-700">Subject</span>
            <input className="mt-1 w-full h-11 rounded-lg border border-ink-200 px-3 outline-none focus:border-brand-600" />
          </label>
          <label className="block"><span className="text-sm text-ink-700">Message</span>
            <textarea required rows={5} className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 outline-none focus:border-brand-600" />
          </label>
          <button className="h-11 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Send message</button>
          {sent && <p className="text-sm text-brand-700">Thanks — we’ll reply within one business day.</p>}
        </form>
      </div>
    </div>
  );
}
