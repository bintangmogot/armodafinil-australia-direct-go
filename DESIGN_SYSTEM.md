# Armodil AU – Design System Documentation

> Ready to hand off to WordPress/ACF conversion AI. Every token below maps to a Tailwind class and a proposed ACF field key.

## 1. Brand Identity
- Name (clone): **Armodil Australia** (placeholder — safe to rename)
- Voice: Confident, calm, professional, medically-informed but not clinical.
- Tagline concept: "Peak clarity, delivered discreetly."

## 2. Color Palette (Teal + Charcoal)
| Token | HEX | HSL | Tailwind class | Usage |
|---|---|---|---|---|
| `--brand-500` | `#0d9488` | 173 80% 32% | `bg-teal-600` | Primary CTA, links |
| `--brand-600` | `#0f766e` | 174 84% 26% | `bg-teal-700` | Hover state |
| `--brand-100` | `#ccfbf1` | 166 76% 89% | `bg-teal-100` | Soft badge bg |
| `--brand-50`  | `#f0fdfa` | 166 76% 97% | `bg-teal-50`  | Section wash |
| `--ink-900`   | `#0f172a` | 222 47% 11% | `text-slate-900` | Headings |
| `--ink-700`   | `#334155` | 215 25% 27% | `text-slate-700` | Body |
| `--ink-500`   | `#64748b` | 215 16% 47% | `text-slate-500` | Muted |
| `--surface`   | `#fafaf9` | 60 9% 98%   | `bg-stone-50` | Page bg |
| `--card`      | `#ffffff` | -           | `bg-white` | Card bg |
| `--border`    | `#e2e8f0` | 214 32% 91% | `border-slate-200` | Divider |
| `--warn`      | `#f59e0b` | 38 92% 50%  | `bg-amber-500` | Discount / offer pill |
| `--danger`    | `#dc2626` | 0 74% 42%   | `bg-red-600` | Sold out / errors |

**Gradient rule:** only `linear-gradient(135deg, #f0fdfa → #ffffff)` on hero/section washes. NO dark colorful gradients on buttons.

## 3. Typography
- **Headings:** `Playfair Display`, weights 500 / 600 / 700 — serif, editorial.
- **Body/UI:** `Inter`, weights 400 / 500 / 600 — clean, humanist.

| Style | Size / Line | Tailwind |
|---|---|---|
| Display  | 56/60 | `text-5xl md:text-6xl leading-[1.05] font-serif font-semibold` |
| H1       | 40/48 | `text-4xl md:text-5xl font-serif font-semibold` |
| H2       | 32/40 | `text-3xl md:text-4xl font-serif font-semibold` |
| H3       | 22/30 | `text-xl md:text-2xl font-serif font-medium` |
| Body-lg  | 18/28 | `text-lg leading-relaxed font-sans` |
| Body     | 16/26 | `text-base font-sans` |
| Small    | 14/20 | `text-sm font-sans text-slate-500` |
| Micro    | 12/16 | `text-xs uppercase tracking-widest` |

## 4. Spacing & Layout
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-16 md:py-24`
- Card padding: `p-5 md:p-6`
- Radius scale: `rounded-lg` (8), `rounded-xl` (12), `rounded-2xl` (16), `rounded-full` (pills)
- Shadow scale: `shadow-sm`, `shadow-md`, `shadow-[0_10px_30px_-12px_rgba(15,23,42,0.12)]` (card hover)

## 5. Component Inventory (with ACF mapping)
| Component | Purpose | Proposed ACF Flexible Layout key |
|---|---|---|
| `TopBar` | Announcement + support link | `layout_topbar` |
| `Navbar` | Logo, main nav, search, cart | `layout_navbar` |
| `HeroWithProduct` | Headline + featured product card | `layout_hero_product` |
| `TrustStrip` | Pills of trust badges (marquee) | `layout_trust_strip` |
| `ShippingFeatures` | 4-column icon features | `layout_shipping_features` |
| `PopularProducts` | Product grid (up to 8) | `layout_popular_products` |
| `TestimonialsMasonry` | 6 quote cards | `layout_testimonials` |
| `WhyChoose` | 3 pillars w/ icons | `layout_why_choose` |
| `AudienceGrid` | 4 audience cards | `layout_audience_grid` |
| `HowItWorks` | 4-step timeline | `layout_how_it_works` |
| `FAQBlock` | Accordion of Q&A | `layout_faq` |
| `ConditionsGrid` | 3+ condition guide cards | `layout_conditions` |
| `BlogGrid` | 3+ blog previews | `layout_blog_grid` |
| `NewsletterCTA` | Email capture band | `layout_newsletter` |
| `Footer` | Multi-column links, legal | `layout_footer` |
| `WhatsAppFAB` | Floating chat button | `layout_whatsapp_fab` |

Each `layout_*` maps 1:1 to `modules/content-*.php` per the Phase-2 flow.

## 6. ACF Sub-Field Types (typical)
- `text` — headings, eyebrow, CTA label
- `textarea` / `wysiwyg` — descriptions
- `image` — hero/product images (with `alt` sub-field)
- `link` — CTA (url + target + label)
- `repeater` — cards, faq items, testimonials
- `select` — variant strengths, tone

## 7. Animation Language
- Hover on card: `translate-y-[-2px]` + `shadow` deepen — 200ms ease-out.
- Buttons: subtle scale `active:scale-[0.98]`.
- Section entrance: fade-in-up 400ms (respect `prefers-reduced-motion`).
- Marquee trust strip: 30s linear infinite.

## 8. Responsive Breakpoints
Follow Tailwind default: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.

## 9. Iconography
Library: **lucide-react** only. No emoji-as-icon.

## 10. Accessibility
- Color contrast AA min: Teal-600 on white = 4.6:1 ✓
- Focus rings: `focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2`
- All images have `alt`, all inputs have `label`.

## 11. Content Structure of Original Site (for parity)
Pages to replicate: `/`, `/product`, `/product/[slug]`, `/categories`, `/conditions`, `/conditions/[slug]`, `/blog`, `/blog/[slug]`, `/faq`, `/cart`, `/account`, `/about`, `/contact`, `/privacy`, `/terms`, `/shipping`, `/returns`.
