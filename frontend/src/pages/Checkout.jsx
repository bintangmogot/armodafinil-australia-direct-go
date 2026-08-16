import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../cart/CartContext';
import { SITE } from '../mock';
import {
  Check, CheckCircle2, ChevronLeft, ChevronRight, CreditCard, Landmark, Bitcoin,
  Lock, Truck, ShieldCheck, MapPin, Mail, ArrowRight, Package, Home as HomeIcon,
} from 'lucide-react';

const AU_STATES = [
  { code: 'ACT', name: 'Australian Capital Territory' },
  { code: 'NSW', name: 'New South Wales' },
  { code: 'NT',  name: 'Northern Territory' },
  { code: 'QLD', name: 'Queensland' },
  { code: 'SA',  name: 'South Australia' },
  { code: 'TAS', name: 'Tasmania' },
  { code: 'VIC', name: 'Victoria' },
  { code: 'WA',  name: 'Western Australia' },
];

function Field({ label, err, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold text-ink-700 uppercase tracking-wider">{label}</span>
      <div className="mt-1">{children}</div>
      {err && <p className="mt-1 text-xs text-red-600">{err}</p>}
    </label>
  );
}
const inputCls = (err) => `h-11 w-full rounded-lg border px-3 outline-none text-sm bg-white transition-colors ${err ? 'border-red-400 focus:border-red-500' : 'border-ink-200 focus:border-brand-500'}`;

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: address, 2: payment, 3: confirm
  const [orderId, setOrderId] = useState('');
  const [form, setForm] = useState({
    email: '', phone: '', firstName: '', lastName: '',
    address1: '', address2: '', city: '', state: 'NSW', postcode: '',
    notes: '',
  });
  const [payment, setPayment] = useState('bank');
  const [errors, setErrors] = useState({});

  const shipping = subtotal > SITE.freeShippingThreshold ? 0 : 12.5;
  const promoDiscount = subtotal > SITE.freeShippingThreshold ? subtotal * 0.1 : 0;
  const total = Math.max(0, subtotal + shipping - promoDiscount);

  if (items.length === 0 && step < 3) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <Package className="w-10 h-10 text-brand-600 mx-auto" />
        <h1 className="mt-4 font-serif text-3xl font-semibold text-ink-900">Your cart is empty</h1>
        <p className="mt-2 text-ink-500">Add something to the cart before checking out.</p>
        <Link to="/product" className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Browse products <ArrowRight className="w-4 h-4" /></Link>
      </div>
    );
  }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validateAddress = () => {
    const e = {};
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone || form.phone.replace(/\D/g, '').length < 8) e.phone = 'Enter a valid phone number';
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.address1.trim()) e.address1 = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!/^\d{4}$/.test(form.postcode)) e.postcode = 'Australian postcode is 4 digits';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextFromAddress = () => { if (validateAddress()) { setStep(2); window.scrollTo({ top: 0 }); } };
  const placeOrder = () => {
    const id = 'AMD-' + Date.now().toString(36).toUpperCase().slice(-8);
    setOrderId(id);
    setStep(3);
    clear();
    window.scrollTo({ top: 0 });
  };

  const Steps = () => (
    <ol className="flex items-center gap-1 sm:gap-3 mb-8 text-xs sm:text-sm overflow-x-auto">
      {[{ n: 1, label: 'Address' }, { n: 2, label: 'Payment' }, { n: 3, label: 'Confirmation' }].map((s, i) => {
        const done = step > s.n;
        const active = step === s.n;
        return (
          <li key={s.n} className="flex items-center gap-1 sm:gap-3 shrink-0">
            <div className={`w-8 h-8 rounded-full grid place-items-center font-semibold text-xs ${done ? 'bg-brand-600 text-white' : active ? 'bg-ink-900 text-white' : 'bg-ink-100 text-ink-500'}`}>
              {done ? <Check className="w-4 h-4" /> : s.n}
            </div>
            <span className={`font-semibold ${active ? 'text-ink-900' : done ? 'text-brand-700' : 'text-ink-500'}`}>{s.label}</span>
            {i < 2 && <ChevronRight className="w-4 h-4 text-ink-400" />}
          </li>
        );
      })}
    </ol>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900">Checkout</h1>
        <Link to="/cart" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ChevronLeft className="w-4 h-4" /> Back to cart</Link>
      </div>
      <p className="text-ink-500 text-sm mb-8">Secure, encrypted checkout · discreet Australian dispatch</p>
      <Steps />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); nextFromAddress(); }} className="space-y-6">
              <section className="bg-white border border-ink-200 rounded-2xl p-6 md:p-8">
                <h2 className="font-serif text-xl font-semibold text-ink-900 inline-flex items-center gap-2"><Mail className="w-5 h-5 text-brand-600" /> Contact</h2>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <Field label="Email" err={errors.email}>
                    <input type="email" required value={form.email} onChange={set('email')} className={inputCls(errors.email)} placeholder="you@email.com" autoComplete="email" />
                  </Field>
                  <Field label="Phone" err={errors.phone}>
                    <input type="tel" required value={form.phone} onChange={set('phone')} className={inputCls(errors.phone)} placeholder="04XX XXX XXX" autoComplete="tel" />
                  </Field>
                </div>
              </section>

              <section className="bg-white border border-ink-200 rounded-2xl p-6 md:p-8">
                <h2 className="font-serif text-xl font-semibold text-ink-900 inline-flex items-center gap-2"><MapPin className="w-5 h-5 text-brand-600" /> Shipping address</h2>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <Field label="First name" err={errors.firstName}>
                    <input required value={form.firstName} onChange={set('firstName')} className={inputCls(errors.firstName)} autoComplete="given-name" />
                  </Field>
                  <Field label="Last name" err={errors.lastName}>
                    <input required value={form.lastName} onChange={set('lastName')} className={inputCls(errors.lastName)} autoComplete="family-name" />
                  </Field>
                  <Field label="Street address" err={errors.address1} className="sm:col-span-2">
                    <input required value={form.address1} onChange={set('address1')} className={inputCls(errors.address1)} placeholder="123 George Street" autoComplete="address-line1" />
                  </Field>
                  <Field label="Apartment, suite, etc. (optional)" className="sm:col-span-2">
                    <input value={form.address2} onChange={set('address2')} className={inputCls()} autoComplete="address-line2" />
                  </Field>
                  <Field label="Suburb / city" err={errors.city}>
                    <input required value={form.city} onChange={set('city')} className={inputCls(errors.city)} autoComplete="address-level2" />
                  </Field>
                  <Field label="State / territory">
                    <select value={form.state} onChange={set('state')} className={inputCls()}>
                      {AU_STATES.map((s) => <option key={s.code} value={s.code}>{s.code} — {s.name}</option>)}
                    </select>
                  </Field>
                  <Field label="Postcode (4 digits)" err={errors.postcode}>
                    <input required maxLength={4} inputMode="numeric" value={form.postcode} onChange={set('postcode')} className={inputCls(errors.postcode)} placeholder="2000" autoComplete="postal-code" />
                  </Field>
                  <Field label="Country">
                    <input value="Australia" disabled className="h-11 rounded-lg border border-ink-200 px-3 bg-ink-100/70 text-ink-500 w-full" />
                  </Field>
                  <Field label="Delivery notes (optional)" className="sm:col-span-2">
                    <textarea rows={3} value={form.notes} onChange={set('notes')} className="w-full rounded-lg border border-ink-200 px-3 py-2 outline-none focus:border-brand-500" placeholder="Gate code, safe drop location, etc." />
                  </Field>
                </div>
              </section>

              <div className="flex items-center justify-between">
                <Link to="/cart" className="text-sm font-semibold text-ink-700 hover:text-brand-700 inline-flex items-center gap-1.5"><ChevronLeft className="w-4 h-4" /> Back to cart</Link>
                <button className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Continue to payment <ChevronRight className="w-4 h-4" /></button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <section className="bg-white border border-ink-200 rounded-2xl p-6 md:p-8">
                <h2 className="font-serif text-xl font-semibold text-ink-900 inline-flex items-center gap-2"><Lock className="w-5 h-5 text-brand-600" /> Payment method</h2>
                <div className="mt-4 space-y-3">
                  {[
                    { key: 'bank',   Icon: Landmark,    title: 'Australian bank transfer', desc: 'Receive our account details after ordering. Parcel ships once funds clear.' },
                    { key: 'card',   Icon: CreditCard,  title: 'Credit / debit card',       desc: 'Visa, Mastercard, and Amex via a PCI-aligned encrypted gateway.' },
                    { key: 'crypto', Icon: Bitcoin,     title: 'Cryptocurrency',            desc: 'Pay in BTC, ETH, or USDT and receive a 5% discount on your total.' },
                  ].map((opt) => {
                    const active = payment === opt.key;
                    const Icon = opt.Icon;
                    return (
                      <label key={opt.key} className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${active ? 'border-brand-500 bg-brand-50 shadow-soft' : 'border-ink-200 bg-white hover:border-brand-300'}`}>
                        <input type="radio" name="payment" checked={active} onChange={() => setPayment(opt.key)} className="mt-1 accent-brand-600" />
                        <div className={`w-10 h-10 grid place-items-center rounded-lg ${active ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700'}`}><Icon className="w-5 h-5" /></div>
                        <div className="flex-1">
                          <div className="font-semibold text-ink-900">{opt.title}</div>
                          <div className="text-sm text-ink-500">{opt.desc}</div>
                        </div>
                      </label>
                    );
                  })}
                </div>

                {payment === 'card' && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <Field label="Card number" className="sm:col-span-2">
                      <input inputMode="numeric" placeholder="1234 5678 9012 3456" className={inputCls()} />
                    </Field>
                    <Field label="Name on card" className="sm:col-span-2">
                      <input placeholder="As printed on card" className={inputCls()} />
                    </Field>
                    <Field label="Expiry (MM/YY)">
                      <input placeholder="MM/YY" className={inputCls()} />
                    </Field>
                    <Field label="CVC">
                      <input placeholder="123" className={inputCls()} />
                    </Field>
                  </div>
                )}
              </section>

              <section className="bg-white border border-ink-200 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-ink-900 inline-flex items-center gap-2"><Truck className="w-4 h-4 text-brand-600" /> Delivery to</h3>
                <div className="mt-3 text-sm text-ink-700">
                  <p>{form.firstName} {form.lastName}</p>
                  <p>{form.address1}{form.address2 ? `, ${form.address2}` : ''}</p>
                  <p>{form.city}, {form.state} {form.postcode}, Australia</p>
                  <p className="mt-1 text-ink-500">{form.email} · {form.phone}</p>
                </div>
                <button onClick={() => setStep(1)} className="mt-3 text-sm font-semibold text-brand-700 hover:text-brand-800">Edit address</button>
              </section>

              <div className="flex items-center justify-between">
                <button onClick={() => setStep(1)} className="text-sm font-semibold text-ink-700 hover:text-brand-700 inline-flex items-center gap-1.5"><ChevronLeft className="w-4 h-4" /> Back</button>
                <button onClick={placeOrder} className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary"><Lock className="w-4 h-4" /> Place order · {SITE.currency}{total.toFixed(2)}</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <section className="bg-white border border-ink-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 grid place-items-center mx-auto"><CheckCircle2 className="w-8 h-8" /></div>
                <h2 className="mt-4 font-serif text-3xl font-semibold text-ink-900">Order confirmed</h2>
                <p className="mt-2 text-ink-700">Thanks {form.firstName || 'friend'} — your order has been received. A confirmation email is on its way to <b>{form.email}</b>.</p>
                <div className="mt-5 inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-700 rounded-full px-4 py-2 font-mono text-sm font-semibold">Order ID: {orderId}</div>
              </section>

              <section className="bg-white border border-ink-200 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-ink-900">What happens next?</h3>
                <ol className="mt-4 space-y-3 text-sm text-ink-700">
                  <li className="flex gap-3"><span className="w-6 h-6 grid place-items-center rounded-full bg-brand-600 text-white text-xs font-semibold shrink-0">1</span><span><b>Payment.</b> {payment === 'bank' ? 'You will receive our bank details by email within 15 minutes.' : payment === 'crypto' ? 'A wallet address for your chosen currency will land in your inbox shortly.' : 'Your card is being processed now — no further action needed.'}</span></li>
                  <li className="flex gap-3"><span className="w-6 h-6 grid place-items-center rounded-full bg-brand-600 text-white text-xs font-semibold shrink-0">2</span><span><b>Dispatch.</b> Your parcel leaves our facility within 24–48 business hours after funds clear.</span></li>
                  <li className="flex gap-3"><span className="w-6 h-6 grid place-items-center rounded-full bg-brand-600 text-white text-xs font-semibold shrink-0">3</span><span><b>Tracking.</b> Same-day tracking is emailed to you as soon as your parcel is scanned by the courier.</span></li>
                  <li className="flex gap-3"><span className="w-6 h-6 grid place-items-center rounded-full bg-brand-600 text-white text-xs font-semibold shrink-0">4</span><span><b>Delivery.</b> Most Australian addresses receive the parcel within 6–12 business days, dispatched in neutral outer packaging.</span></li>
                </ol>
              </section>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/product" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">Continue shopping <ArrowRight className="w-4 h-4" /></Link>
                <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-ink-200 hover:border-brand-500 text-ink-900 font-semibold"><HomeIcon className="w-4 h-4" /> Back to home</button>
              </div>
            </div>
          )}
        </div>

        {step !== 3 && (
          <aside className="bg-white border border-ink-200 rounded-2xl p-6 h-fit lg:sticky lg:top-24">
            <h2 className="font-serif text-xl font-semibold text-ink-900">Order summary</h2>
            <ul className="mt-4 space-y-3">
              {items.map((i) => (
                <li key={i.slug} className="flex gap-3 items-start">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-brand-50 border border-ink-200 shrink-0">
                    <img src={i.image} alt="" className="w-full h-full object-cover" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 grid place-items-center rounded-full bg-ink-900 text-white text-[10px] font-semibold">{i.qty}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-ink-900 line-clamp-2">{i.name}</div>
                  </div>
                  <div className="text-sm font-semibold text-ink-900">{SITE.currency}{(i.price * i.qty).toFixed(2)}</div>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-ink-200 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-ink-500">Subtotal</span><span className="font-medium">{SITE.currency}{subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-ink-500">Shipping</span><span className="font-medium">{shipping === 0 ? 'Free' : `${SITE.currency}${shipping.toFixed(2)}`}</span></div>
              {promoDiscount > 0 && <div className="flex justify-between"><span className="text-ink-500">Promo (ARMD10)</span><span className="font-medium text-brand-700">-{SITE.currency}{promoDiscount.toFixed(2)}</span></div>}
              <div className="flex justify-between pt-3 border-t border-ink-200"><span className="font-semibold text-ink-900">Total</span><span className="font-semibold text-ink-900 text-lg">{SITE.currency}{total.toFixed(2)}</span></div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-ink-500">
              <span className="inline-flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-brand-600" /> SSL secured</span>
              <span className="inline-flex items-center gap-1"><Lock className="w-3 h-3 text-brand-600" /> Encrypted</span>
              <span className="inline-flex items-center gap-1"><Truck className="w-3 h-3 text-brand-600" /> Tracked</span>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
