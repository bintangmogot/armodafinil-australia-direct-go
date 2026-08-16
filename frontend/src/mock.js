// Mock data for Armodafinil Australia Direct clone.

export const SITE = {
  name: 'Armodafinil',
  brandLine: 'Australia Direct',
  region: 'Australia',
  currency: 'A$',
  whatsapp: 'https://wa.me/61489995839?text=Hi%2C%20I%20need%20help%20from%20Armodafinil%20Australia%20Direct',
  supportEmail: 'support@armodafinildirect.example',
  supportPhone: '+61 4 8999 5839',
  promoCode: 'ARMD10',
  freeShippingThreshold: 299,
  lastUpdated: 'August 2026',
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
    'Steady focus, cleaner thinking, and dependable energy for the moments that matter — favoured by learners, professionals, and driven Australians.',
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
    image: 'https://www.armodafinil.com.au/images/hero/artvigil-hero-banner.png',
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
  {
    slug: 'armodafinil-250mg-artvigil-250mg',
    name: 'Armodafinil 250mg — Artvigil 250mg',
    price: 187.5, rating: 4.5, reviews: 148,
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Armodafinil-250Mg-%E2%80%93-Artvigil-250Mg.webp',
    category: 'Armodafinil', badge: 'Smart Pills', strength: '250mg', stock: true,
    variants: [
      { qty: 50, price: 90 }, { qty: 100, price: 187.5 }, { qty: 200, price: 342 }, { qty: 300, price: 469.5 },
    ],
    specs: { active: 'Armodafinil', indication: 'Wakefulness support', manufacturer: 'HAB Pharmaceuticals', strength: '250mg', packaging: '10 tablets per strip', delivery: '6–12 days' },
  },
  {
    slug: 'modalert-200mg', name: 'Modalert 200mg — Modafinil 200mg', price: 120, rating: 4.3, reviews: 255,
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/ChatGPT-Image-Jul-6-2026-11_24_26-AM.webp',
    category: 'Modafinil', badge: 'Smart Pills', strength: '200mg', stock: true,
    variants: [
      { qty: 50, price: 120 }, { qty: 100, price: 225 }, { qty: 200, price: 342 }, { qty: 300, price: 403.5 },
    ],
    specs: { active: 'Modafinil', indication: 'Cognitive Enhancers', manufacturer: 'Sun Pharmaceutical Industries Ltd', strength: '200mg', packaging: '10 tablets per strip', delivery: '6–15 days' },
  },
  {
    slug: 'waklert-150-australia', name: 'Waklert 150 Australia — Armodafinil Tablets', price: 112.5, rating: 4.4, reviews: 132,
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Waklert-150-Australia-Armodafinil-Tablets.png',
    category: 'Armodafinil', badge: 'Smart Pills', strength: '150mg', stock: true,
    variants: [
      { qty: 50, price: 82.5 }, { qty: 100, price: 112.5 }, { qty: 200, price: 195 }, { qty: 300, price: 270 },
    ],
    specs: { active: 'Armodafinil', indication: 'Wakefulness support', manufacturer: 'Sun Pharmaceutical Industries Ltd', strength: '150mg', packaging: '10 tablets per strip', delivery: '6–12 days' },
  },
  {
    slug: 'modafinil-400mg', name: 'Modafinil 400mg — Modasmart 400mg', price: 135, rating: 4.2, reviews: 76,
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/ChatGPT-Image-Jul-6-2026-11_43_45-AM.webp',
    category: 'Modafinil', badge: 'Smart Pills', strength: '400mg', stock: true,
    variants: [
      { qty: 50, price: 82.5 }, { qty: 100, price: 135 }, { qty: 200, price: 240 }, { qty: 300, price: 330 },
    ],
    specs: { active: 'Modafinil', indication: 'Cognitive Enhancers', manufacturer: 'Consern Pharma', strength: '400mg', packaging: '10 tablets per strip', delivery: '6–15 days' },
  },
  {
    slug: 'modanil-200mg', name: 'Modanil 200mg — Modafinil 200mg', price: 180, rating: 4.9, reviews: 121,
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Modanil-200mg-Modafinil-200mg.webp',
    category: 'Modafinil', badge: 'Smart Pills', strength: '200mg', stock: true,
    variants: [
      { qty: 50, price: 82.5 }, { qty: 100, price: 130 }, { qty: 200, price: 240 }, { qty: 300, price: 330 },
    ],
    specs: { active: 'Modafinil', indication: 'Cognitive Enhancers', manufacturer: 'Healing Pharma', strength: '200mg', packaging: '10 tablets per strip', delivery: '6–15 days' },
  },
  {
    slug: 'artvigil-150mg', name: 'Artvigil 150mg — Armodafinil 150mg', price: 120, rating: 4.5, reviews: 94,
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/ChatGPT-Image-Jul-6-2026-12_10_48-PM.webp',
    category: 'Armodafinil', badge: 'Smart Pills', strength: '150mg', stock: true,
    variants: [
      { qty: 50, price: 75 }, { qty: 100, price: 120 }, { qty: 200, price: 210 }, { qty: 300, price: 285 },
    ],
    specs: { active: 'Armodafinil', indication: 'Wakefulness support', manufacturer: 'HAB Pharmaceuticals', strength: '150mg', packaging: '10 tablets per strip', delivery: '6–12 days' },
  },
  {
    slug: 'artvigil-50-mg', name: 'Artvigil 50mg — Armodafinil Tablet', price: 90, rating: 4.7, reviews: 68,
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Artvigil-50-Mg-Armodafinil-Tablet.webp',
    category: 'Armodafinil', badge: 'Smart Pills', strength: '50mg', stock: true,
    variants: [
      { qty: 50, price: 60 }, { qty: 100, price: 90 }, { qty: 200, price: 165 }, { qty: 300, price: 225 },
    ],
    specs: { active: 'Armodafinil', indication: 'Wakefulness support', manufacturer: 'HAB Pharmaceuticals', strength: '50mg', packaging: '10 tablets per strip', delivery: '6–12 days' },
  },
  {
    slug: 'kamagra-oral-jelly-100mg', name: 'Kamagra Oral Jelly 100mg — Sildenafil 100mg', price: 82.5, rating: 4.8, reviews: 210,
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Kamagra-Oral-Jelly-100mg-%E2%80%93-Sildenafil-100mg.webp',
    category: 'Wellness', badge: 'Wellness', strength: '100mg', stock: true,
    variants: [
      { qty: 7, price: 45 }, { qty: 14, price: 82.5 }, { qty: 28, price: 145 }, { qty: 56, price: 260 },
    ],
    specs: { active: 'Sildenafil', indication: 'Wellness support', manufacturer: 'Ajanta Pharma', strength: '100mg', packaging: '7 sachets per pack', delivery: '6–15 days' },
  },
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
  { icon: 'Briefcase',     title: 'Busy Professionals', desc: 'Handle back-to-back meetings and complex tasks with steadier mental energy.', badge: 'All-day mental clarity', cta: 'For Professionals' },
  { icon: 'Moon',          title: 'Shift Workers & Night Owls', desc: 'Stay alert through irregular hours without the mid-shift dip in performance.', badge: 'Fatigue-resistant', cta: 'For Shift Workers' },
  { icon: 'Gamepad2',      title: 'Competitive Players', desc: 'Sharper reactions and cleaner concentration when every decision counts.', badge: 'Faster reaction time', cta: 'For Competitors' },
];

export const HOW_IT_WORKS = [
  { step: 1, time: '15–30 mins', title: 'Rapid Absorption', desc: 'Fast-acting profile begins its work within the first half hour of the dose.' },
  { step: 2, time: '1–2 hours', title: 'Neural Activation', desc: 'Supports dopamine and norepinephrine pathways for cleaner cognitive throughput.' },
  { step: 3, time: '2–4 hours', title: 'Peak Focus', desc: 'Attention and mental stamina reach their strongest window.' },
  { step: 4, time: '12+ hours', title: 'Extended Clarity', desc: 'Comfortable mental energy through the rest of the day — no abrupt drop.' },
];

// FAQ with categories, matching source structure (All topics · Ordering · Payment · Shipping · Account)
export const FAQ_CATEGORIES = ['All topics', 'Ordering', 'Payment', 'Shipping', 'Account'];
export const FAQS = [
  { cat: 'Ordering', q: 'How do I place an order?', a: 'Pick your product and pack size, add it to your cart, then complete checkout with your delivery details. A confirmation email with payment instructions will land in your inbox shortly after.' },
  { cat: 'Payment', q: 'What payment methods do you accept?', a: 'We accept Australian bank transfer, major cards through our encrypted gateway, and a handful of supported cryptocurrencies. Every transaction is processed on a secure, PCI-aligned checkout.' },
  { cat: 'Shipping', q: 'When is shipping free?', a: 'Orders above A$299 qualify for complimentary Australia-wide dispatch, plus 10% off with code ARMD10 applied at checkout.' },
  { cat: 'Payment', q: 'Do you offer discounts?', a: 'Yes — new-customer welcome codes, bundle savings for larger pack sizes, and the ongoing ARMD10 code work in combination with our free-shipping threshold.' },
  { cat: 'Shipping', q: 'How long does delivery take?', a: 'Most Australian metropolitan addresses receive their parcel within 6–12 business days. Regional and remote postcodes may take a few days longer during peak periods.' },
  { cat: 'Ordering', q: 'Do I need a prescription?', a: 'Australian regulations may require a prescription depending on your circumstances. We recommend a chat with your GP or our support team before you order for personal use.' },
  { cat: 'Shipping', q: 'Is my order discreet?', a: 'Every parcel ships in neutral outer packaging — no brand names, product references, or clinical branding are printed on the outside.' },
  { cat: 'Ordering', q: 'What is your return policy?', a: 'Sealed, unopened items can be returned within 14 days of delivery. Email support with your order number and we will send return instructions the next business day.' },
  { cat: 'Account', q: 'Do I need an account?', a: 'No — checkout works fine as a guest. Creating an account simply speeds up future orders and gives you a running history of shipments and tracking links.' },
  { cat: 'Account', q: 'How do I contact support?', a: 'WhatsApp is fastest during business hours, or email support@armodafinildirect.example anytime. Our team usually replies within one business day.' },
];

export const CONDITIONS = [
  {
    slug: 'eye-eyelash', title: 'Eye & Eyelash',
    excerpt: 'How to keep vision comfortable and lashes healthy in a screen-heavy world — practical, plain-English notes.',
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Gemini_Generated_Image_tbo79ltbo79ltbo7.png',
    sections: [
      { h: 'Why eye health matters day to day', p: 'Your eyes are a demanding, delicate sensory system — and modern life asks a lot of them. Small, consistent choices around screen time, hydration, and rest go a long way toward sustaining sharp, comfortable vision through your thirties, forties, and beyond.' },
      { h: 'What lashes actually do', p: 'Beyond appearance, lashes serve as a mechanical filter for dust and airflow — triggering the blink reflex when something brushes them. Treat them like the tiny bodyguards they are: gentle cleansing, no aggressive extensions, and a good night to remove make-up.' },
      { h: 'Common issues to watch', list: ['Dry eyes — often worsened by long screen sessions', 'Digital eye strain — headaches, blurring, tired neck', 'Conjunctivitis — redness, itching, discharge', 'Lash thinning — nutritional gaps or heavy cosmetics'] },
      { h: 'Everyday habits that help', list: ['Follow the 20-20-20 rule during screen work', 'Hydrate throughout the day and eat lutein-rich greens', 'Remove make-up before bed and rotate cosmetics quarterly', 'Book an eye exam annually, even if nothing feels off'] },
    ],
  },
  {
    slug: 'weight-fitness', title: 'Weight & Fitness',
    excerpt: 'How movement, sleep, and simple daily choices shape long-term energy, mood, and metabolic health.',
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Gemini_Generated_Image_6r06mv6r06mv6r06.png',
    sections: [
      { h: 'The compound effect of small habits', p: 'Fitness rarely fails from one bad week — it fades from twelve months of neglected basics. Sleep, movement, protein intake, and hydration compound quietly. Anchor one habit, keep it for a month, then stack the next.' },
      { h: 'What actually moves the needle', list: ['Consistent sleep window — same bedtime, same wake time', 'Protein at breakfast to steady appetite', 'Two strength sessions a week beat six long cardio blocks', 'Ten thousand relaxed steps a day is a legitimate anchor'] },
      { h: 'Signs to check with a professional', p: 'Sustained fatigue, unusual weight change without lifestyle shifts, or persistent joint pain deserve a proper consultation. Cognitive-support products are not a substitute for underlying health work.' },
    ],
  },
  {
    slug: 'type-2-diabetes', title: 'Type 2 Diabetes',
    excerpt: 'A plain-language look at insulin resistance, everyday triggers, and choices that genuinely move the needle.',
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Gemini_Generated_Image_kiis8ykiis8ykiis.png',
    sections: [
      { h: 'What is happening in the body', p: 'Type 2 diabetes develops when cells stop responding well to insulin. Blood glucose rises, energy dips, and — over years — subtle damage builds up in blood vessels and nerves. The good news is that early-stage insulin resistance often responds strongly to diet and movement.' },
      { h: 'Daily levers that help', list: ['Anchor meals around lean protein and vegetables', 'Walk 10 minutes after each main meal', 'Prioritise sleep — poor sleep spikes insulin resistance', 'Track fasting glucose quarterly with your GP'] },
      { h: 'When to seek review', p: 'Numbness, frequent thirst, unexplained fatigue, or blurred vision alongside a family history of diabetes warrant a proper check with your GP. Do not self-diagnose from a single reading.' },
    ],
  },
  {
    slug: 'sleep-wakefulness', title: 'Sleep & Wakefulness',
    excerpt: 'Circadian rhythm, sleep debt, and evidence-based tools for staying alert without wrecking recovery.',
    image: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=1000&auto=format&fit=crop&q=60',
    sections: [
      { h: 'The rhythm behind good energy', p: 'Wakefulness is not just the absence of tiredness — it is a rhythm your body wants to keep. Consistent light exposure in the morning, a stable bedtime, and a wind-down routine are worth more than any single supplement.' },
      { h: 'When wakefulness support is useful', p: 'Shift work, jet lag, or clinically diagnosed sleep disorders are the scenarios where products such as modafinil or armodafinil are commonly discussed. They are prescription-only in Australia and should be reviewed with a qualified professional.' },
      { h: 'Guardrails for using them well', list: ['Never combine with other stimulants without medical review', 'Take early enough to avoid disturbing your next sleep window', 'Protect recovery on non-work days — the deficit still exists'] },
    ],
  },
  {
    slug: 'mental-focus', title: 'Mental Focus',
    excerpt: 'Understand attention, task-switching cost, and the routines that produce durable deep work.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&auto=format&fit=crop&q=60',
    sections: [
      { h: 'Why attention is fragile', p: 'Every notification, tab, and background thought costs a small “switching tax”. The brain does not multitask — it flips. Reducing the number of flips is the single biggest lever for producing more meaningful work in less time.' },
      { h: 'A workable deep-work routine', list: ['Block a 90-minute morning window on your calendar', 'Silence notifications, close spare tabs, open one document', 'Track energy — not hours — over a week to spot your peaks', 'Take a 15-minute walk between sessions to reset'] },
    ],
  },
  {
    slug: 'anxiety-stress', title: 'Anxiety & Stress',
    excerpt: 'The difference between healthy pressure and overload — with grounding techniques you can use today.',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1000&auto=format&fit=crop&q=60',
    sections: [
      { h: 'Pressure vs overload', p: 'A short spike of pressure sharpens performance. Sustained overload dulls it. Watch for signs that the pressure has stopped receding on weekends: broken sleep, tight jaw, and irritability that outlives its trigger.' },
      { h: 'Grounding techniques that work in minutes', list: ['Box breathing — 4 in, 4 hold, 4 out, 4 hold, three cycles', 'Cold water on wrists and behind the ears', 'Write the three biggest worries — most shrink on paper', 'Call one friend, no agenda — connection resets the system'] },
    ],
  },
];

// Blog: 4 posts with author, date, TOC, and full paraphrased content
export const BLOG = [
  {
    slug: 'armodafinil-vs-modafinil',
    title: 'Armodafinil or Modafinil — which suits you?',
    category: 'Armodafinil', date: '10 Aug 2026', author: 'Dr. Jack Easton', readTime: '8 min read',
    excerpt: 'A side-by-side look at duration, onset, and the day-to-day feel of each option to help you decide.',
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/08/Does-Armodafinil-work-better-than-Modafinil-.png',
    toc: [
      { id: 'what-is-modafinil', label: 'What is modafinil?' },
      { id: 'what-is-armodafinil', label: 'What is armodafinil?' },
      { id: 'main-difference', label: 'The main difference' },
      { id: 'which-is-better', label: 'Is armodafinil actually better?' },
      { id: 'narcolepsy', label: 'For narcolepsy' },
      { id: 'shift-work', label: 'For shift-work' },
      { id: 'side-effects', label: 'Side effects to know' },
      { id: 'conclusion', label: 'Conclusion' },
    ],
    body: [
      { p: 'Sleep disorders such as narcolepsy, obstructive sleep apnoea, and shift-work sleep disorder can quietly steal daytime energy, dull concentration, and blunt productivity. Two prescription options come up most often in that conversation: modafinil and armodafinil.' },
      { p: 'Which of them fits you best depends on onset, duration, personal tolerance, and — most importantly — the professional advice you receive before starting. This piece walks through the practical differences without the marketing gloss.' },
      { h2: 'What is modafinil?', id: 'what-is-modafinil' },
      { p: 'Modafinil is a wakefulness-promoting medicine widely used to reduce excessive daytime sleepiness across the three sleep disorders mentioned above. It works differently to classic stimulants and has a long clinical track record.' },
      { h2: 'What is armodafinil?', id: 'what-is-armodafinil' },
      { p: 'Armodafinil is the R-enantiomer of modafinil — chemically a purer, longer-lasting slice of the same family. It is prescribed for the same conditions with subtly different pharmacokinetics.' },
      { h2: 'The main difference', id: 'main-difference' },
      { p: 'Modafinil contains two enantiomers (R and S). Armodafinil isolates the R-enantiomer, which the body clears more slowly. The result is often a longer, flatter curve of alertness for many people.' },
      { h2: 'Is armodafinil actually better?', id: 'which-is-better' },
      { p: 'The honest answer: neither wins outright. Comparative studies show meaningful improvements in daytime wakefulness for both. Individual factors — sleep schedule, tolerance, side-effect profile — decide the winner for you, not the label.' },
      { h2: 'For narcolepsy', id: 'narcolepsy' },
      { p: 'Both medicines are commonly prescribed. Modafinil has the deeper body of research; armodafinil has produced strong data on sleep-latency improvements. Discuss the choice with your specialist.' },
      { h2: 'For shift-work', id: 'shift-work' },
      { p: 'Modafinil 200mg roughly one hour before a shift is the standard label; armodafinil 150mg follows a similar pre-shift approach. Choose based on how long you need to stay alert and how well your post-shift sleep tolerates the tail.' },
      { h2: 'Side effects to know', id: 'side-effects' },
      { list: ['Anxiety or nervousness', 'Dizziness or light-headedness', 'Digestive upset or dyspepsia', 'Headache', 'Runny nose (rhinitis)'] },
      { p: 'Rare but serious hypersensitivity and psychiatric reactions are possible. Anyone with a history of psychosis, mania, or significant cardiovascular disease should discuss the risks in detail with their treating clinician before starting.' },
      { h2: 'Conclusion', id: 'conclusion' },
      { p: 'Both medicines are effective, evidence-supported options for daytime wakefulness. The right pick depends on the underlying condition, schedule length, medication history, and how your body reacts. Buy from a source you trust, and — please — always with proper medical review.' },
    ],
  },
  {
    slug: 'dementia-vs-cognitive-enhancers',
    title: 'Dementia vs cognitive enhancers — what really differs',
    category: 'Armodafinil', date: '28 Jul 2026', author: 'Dr. Ginni Mansberg', readTime: '6 min read',
    excerpt: 'Understanding memory decline, brain-support supplements, and where wakefulness aids do and do not belong.',
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/07/What-is-dementia-mean-Dementia-VS-Cognitive-Enhancers.webp',
    toc: [
      { id: 'what-is-dementia', label: 'What dementia actually is' },
      { id: 'not-normal-ageing', label: 'Not the same as normal ageing' },
      { id: 'where-enhancers-fit', label: 'Where cognitive enhancers fit' },
      { id: 'red-flags', label: 'Red flags for a check-up' },
    ],
    body: [
      { p: 'Dementia is not a single illness — it is an umbrella of conditions that gradually erode memory, language, and everyday judgement. It sits well outside the territory of over-the-counter “brain boosters” or prescription wakefulness aids.' },
      { h2: 'What dementia actually is', id: 'what-is-dementia' },
      { p: 'Alzheimer’s disease accounts for the largest share, followed by vascular dementia and mixed forms. Diagnosis takes a clinical work-up: cognitive testing, medical history, and often imaging or blood work to rule out reversible causes.' },
      { h2: 'Not the same as normal ageing', id: 'not-normal-ageing' },
      { p: 'Forgetting a name and later remembering it is normal. Repeatedly getting lost on a familiar route, or struggling to follow a familiar recipe, is not. Trust patterns over one-off moments.' },
      { h2: 'Where cognitive enhancers fit', id: 'where-enhancers-fit' },
      { p: 'Prescription wakefulness medicines such as modafinil and armodafinil do not treat or prevent dementia. They target daytime alertness in specific sleep disorders. Marketing them as a memory shield is misleading and, in some cases, unsafe.' },
      { h2: 'Red flags for a check-up', id: 'red-flags' },
      { list: ['Repeating the same story within a short window', 'Difficulty handling routine finances or dosages', 'Getting lost in familiar places', 'Growing dependence on others for previously easy tasks'] },
    ],
  },
  {
    slug: 'modafinil-shift-work',
    title: 'Modafinil for shift-work sleep disorder — the honest picture',
    category: 'Modafinil', date: '17 Jun 2026', author: 'Dr. Jack Easton', readTime: '7 min read',
    excerpt: 'Realistic expectations, evidence-based dosing windows, and how to protect your recovery on non-work days.',
    image: 'https://backend.armodafinil.com.au/wp-content/uploads/2026/06/Gemini_Generated_Image_zdxsy5zdxsy5zdxs.png',
    toc: [
      { id: 'what-swsd', label: 'What SWSD looks like' },
      { id: 'what-modafinil-does', label: 'What modafinil does (and does not)' },
      { id: 'timing', label: 'Timing your dose' },
      { id: 'recovery', label: 'Protecting your recovery' },
    ],
    body: [
      { p: 'Rotating shifts push your circadian clock in ways it never evolved for. Modafinil can smooth some of the roughest edges, but it is a support layer — never a substitute for the boring fundamentals of sleep hygiene.' },
      { h2: 'What SWSD looks like', id: 'what-swsd' },
      { p: 'The core signs are excessive sleepiness during shift hours and insomnia when you finally try to sleep. Left unmanaged, it drags on mood, focus, and long-term cardiovascular health.' },
      { h2: 'What modafinil does (and does not)', id: 'what-modafinil-does' },
      { p: 'Modafinil supports daytime — or overnight-shift — wakefulness for adults diagnosed with SWSD. It does not repay the underlying sleep debt, and it does not shift your circadian rhythm on its own.' },
      { h2: 'Timing your dose', id: 'timing' },
      { p: 'A common label is 200mg taken roughly one hour before your shift begins. Personal response varies — some people find a slightly earlier or smaller dose fits their schedule better. Adjust only with clinical guidance.' },
      { h2: 'Protecting your recovery', id: 'recovery' },
      { list: ['Anchor a consistent sleep window on non-shift days', 'Keep bedrooms cool, dark, and phone-free', 'Front-load caffeine early in the shift, taper later', 'Book quarterly reviews with your GP or sleep specialist'] },
    ],
  },
  {
    slug: 'nootropics-for-students',
    title: 'Nootropics for students — a beginner-friendly primer',
    category: 'Guides', date: '02 Jun 2026', author: 'Dr. Ginni Mansberg', readTime: '5 min read',
    excerpt: 'What actually helps focus during exam season — from caffeine timing to sleep hygiene to prescription options.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1000&auto=format&fit=crop&q=60',
    toc: [
      { id: 'foundations', label: 'Foundations first' },
      { id: 'caffeine', label: 'Caffeine done well' },
      { id: 'over-the-counter', label: 'Over-the-counter options' },
      { id: 'prescription', label: 'Prescription territory' },
    ],
    body: [
      { p: 'Exam season pressure tempts a lot of quick fixes. The uncomfortable truth: no supplement outperforms consistent sleep and a decent study block. Get those right first, then the other tools work.' },
      { h2: 'Foundations first', id: 'foundations' },
      { list: ['Seven to nine hours of sleep, same bedtime each night', 'A morning walk in daylight to anchor your clock', 'Protein-forward breakfast — steady focus, no midday crash'] },
      { h2: 'Caffeine done well', id: 'caffeine' },
      { p: 'Ninety minutes after waking, not straight after opening your eyes. Cap yourself at two coffees before mid-afternoon so the tail does not gate-crash tonight’s sleep.' },
      { h2: 'Over-the-counter options', id: 'over-the-counter' },
      { p: 'L-theanine pairs cleanly with caffeine to soften jitter. Omega-3s show modest cognitive support in a balanced diet. Skip anything promising a “limitless” effect — the marketing is louder than the evidence.' },
      { h2: 'Prescription territory', id: 'prescription' },
      { p: 'Modafinil and armodafinil sit in prescription-only territory in Australia. They are not exam shortcuts — they are medicines for diagnosed conditions. If you are curious, book a proper consult before buying anything online.' },
    ],
  },
];
