import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Truck, Lock, Search, ShoppingCart, CreditCard, PackageCheck, MapPin, Percent, Info, MessageCircle, Mail } from 'lucide-react';
import OrderCTA from '../components/OrderCTA';
import { SITE } from '../mock';

const STEPS = [
  {
    n: '01', title: 'Choose your product', icon: Search,
    body: 'Browse the catalogue or use the search bar in the header. Open the product page for the strength and pack size you want, then click Add to cart. Every listing shows the active ingredient, packaging, and expected delivery window before you commit.',
  },
  {
    n: '02', title: 'Review your cart', icon: ShoppingCart,
    body: 'Open your cart to fine-tune quantities and see estimated shipping. This is the right moment to apply a coupon code — the discount recalculates in real time so you never wonder what your final total will be.',
  },
  {
    n: '03', title: 'Complete checkout', icon: MapPin,
    body: 'Enter your contact details and Australian delivery address. If the product you have selected requires it, our short medical questionnaire appears and — where relevant — you can upload a prescription file. Finally, choose your preferred payment method.',
  },
  {
    n: '04', title: 'Pay and confirm', icon: CreditCard,
    body: 'For bank transfer we email account details within 15 minutes; your parcel is queued once funds are received. Card and crypto payments confirm instantly and move straight into the dispatch queue.',
  },
  {
    n: '05', title: 'Track your delivery', icon: PackageCheck,
    body: 'You receive one email when your order is processing and a second when your parcel ships, complete with a tracking link. Most Australian addresses receive their parcel within 6–12 business days in neutral outer packaging.',
  },
];

export default function HowToOrder() {
  return (
    <article>
      {/* Breadcrumb */}
      <div className="border-b border-ink-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center text-xs text-ink-500 gap-2">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <span>/</span>
          <span className="text-ink-900">How to Order</span>
        </div>
      </div>

      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> Back to home</Link>
          <div className="mt-6 text-[11px] uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5 inline-block">Ordering guide</div>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900 leading-tight">How to Order</h1>
          <p className="mt-4 text-lg text-ink-700 leading-relaxed max-w-2xl">From product selection to doorstep delivery in five clear steps — with a secure, encrypted checkout throughout.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/product" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Start shopping <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/faq" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-ink-200 hover:border-brand-600 text-ink-900 font-semibold">Read the FAQ</Link>
          </div>
          <p className="mt-6 text-xs text-ink-500">Last updated August 2026</p>
        </div>
      </div>

      {/* 5-step timeline */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-xs uppercase tracking-widest text-brand-700 font-semibold">Steps</div>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl font-semibold text-ink-900">Your path to delivery</h2>

        <ol className="mt-10 relative border-l-2 border-brand-100 ml-4 md:ml-6 space-y-8">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.n} className="pl-6 md:pl-10 relative">
                <span className="absolute -left-[19px] md:-left-[22px] top-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-brand-600 text-white grid place-items-center font-semibold shadow-soft">
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </span>
                <div className="bg-white border border-ink-200 rounded-2xl p-5 md:p-6 hover-lift">
                  <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold tabular-nums">Step {s.n}</div>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-ink-700 leading-relaxed">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Before you checkout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">Before you checkout</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-ink-200 rounded-2xl p-6 hover-lift">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 grid place-items-center"><Truck className="w-5 h-5" /></div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-ink-900">Shipping</h3>
            <p className="mt-2 text-sm text-ink-700">Standard Australian shipping is complimentary on orders from <b>{SITE.currency}{SITE.freeShippingThreshold}.00</b>. Your exact shipping cost appears in the cart before you enter payment details.</p>
          </div>
          <div className="bg-white border border-ink-200 rounded-2xl p-6 hover-lift">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 grid place-items-center"><Percent className="w-5 h-5" /></div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-ink-900">Discounts</h3>
            <p className="mt-2 text-sm text-ink-700">Eligible carts can use code <b>{SITE.promoCode}</b> at checkout when the minimum order value is met. Crypto payments earn an additional 5% off.</p>
          </div>
          <div className="bg-white border border-ink-200 rounded-2xl p-6 hover-lift">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 grid place-items-center"><Info className="w-5 h-5" /></div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-ink-900">Prescription products</h3>
            <p className="mt-2 text-sm text-ink-700">Certain items require a valid prescription in Australia. Where applicable, our checkout guides you through a quick medical questionnaire and secure file upload.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-500"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> Verified pharmacy</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-500"><Lock className="w-3.5 h-3.5 text-brand-600" /> Secure checkout</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-500"><Truck className="w-3.5 h-3.5 text-brand-600" /> AU-wide delivery</span>
        </div>

        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-white border border-ink-200 flex items-start gap-4 flex-wrap">
          <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 grid place-items-center"><MessageCircle className="w-5 h-5" /></div>
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-serif text-xl font-semibold text-ink-900">Prefer help while you order?</h3>
            <p className="mt-1 text-sm text-ink-700">Our support team answers WhatsApp and email during Australian business hours — usually within minutes.</p>
          </div>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary"><MessageCircle className="w-4 h-4" /> Chat now</a>
          <a href={`mailto:${SITE.supportEmail}`} className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-ink-200 hover:border-brand-500 text-ink-900 font-semibold"><Mail className="w-4 h-4" /> Email us</a>
        </div>
      </div>

      <OrderCTA />
    </article>
  );
}
