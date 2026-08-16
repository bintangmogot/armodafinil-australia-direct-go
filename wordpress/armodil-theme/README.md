# Armodafinil Australia Direct — WordPress Theme

A modular WordPress theme that mirrors the React reference build (`/app/frontend`). Every page and every content section is powered by **ACF Pro Flexible Content / Repeater** fields, so a non-developer can rearrange copy and images from the WP admin without touching PHP.

## Structure

```
armodil-theme/
├── style.css                     # Theme header
├── functions.php                 # Boots the theme, enqueues assets, loads ACF
├── header.php                    # Renders topbar + navbar
├── footer.php                    # Renders footer + WhatsApp FAB
├── index.php                     # Fallback / archive
├── page.php                      # Default single page (blocks/editor)
├── search.php                    # Search results
├── 404.php                       # Not-found page
├── archive.php                   # Blog archive
├── single.php                    # Blog post single
├── single-armodil_product.php    # Product detail
├── single-armodil_condition.php  # Condition guide single
├── archive-armodil_product.php   # Full product catalogue
├── taxonomy-product_category.php # Filtered category listing
├── page-modular.php              # Flexible-content modular page (home)
├── page-policy.php               # Legal / policy page (repeater sections)
├── page-how-to-order.php         # 5-step ordering guide
├── page-about.php                # About us
├── page-contact.php              # Contact form
├── page-faq.php                  # Categorised FAQ
├── page-cart.php                 # Cart (client-side JS)
├── page-checkout.php             # Checkout wizard (client-side JS)
├── page-categories.php           # Category browse tree
├── page-conditions.php           # Condition guides index
├── inc/
│   ├── acf-flexible-content.php  # Home flexible content
│   ├── acf-policy.php            # Policy sections/blocks repeater
│   ├── acf-page-single.php       # Hero + meta for single pages
│   ├── acf-product.php           # Product fields (price, variants, specs)
│   ├── acf-condition.php         # Condition sections repeater
│   ├── acf-faq.php               # FAQ categories + Q&A repeater
│   ├── acf-how-to-order.php      # 5-step timeline fields
│   └── helpers.php               # armodil_icon(), armodil_price(), etc.
├── modules/
│   └── content-*.php             # Per-section templates matching React components
├── parts/
│   ├── breadcrumb.php
│   ├── product-card.php
│   ├── blog-card.php
│   └── condition-card.php
└── assets/
    ├── css/tokens.css            # Design-token CSS
    └── js/theme.js               # Cart + accordion + TOC interactivity
```

## Requirements

- WordPress 6.4+
- PHP 8.1+
- **ACF Pro** plugin (Flexible Content + Repeater + Options Page)
- Optional but recommended: **WooCommerce** for the real store (this theme ships lightweight custom post types for demo)

## Installation

1. Copy the `armodil-theme` folder into `wp-content/themes/`.
2. Install and activate ACF Pro.
3. Activate the theme (Appearance → Themes).
4. Configure global settings under **Settings → Armodil Global**.
5. Create each of these pages in Pages → Add New and select the matching template:

| Page URL slug         | Template file             |
|-----------------------|---------------------------|
| `/` (front)           | `page-modular.php`        |
| `/how-to-order`       | `page-how-to-order.php`   |
| `/faq`                | `page-faq.php`            |
| `/about`              | `page-about.php`          |
| `/contact`            | `page-contact.php`        |
| `/cart`               | `page-cart.php`           |
| `/checkout`           | `page-checkout.php`       |
| `/categories`         | `page-categories.php`     |
| `/conditions`         | `page-conditions.php`     |
| `/privacy-policy`     | `page-policy.php`         |
| `/terms`              | `page-policy.php`         |
| `/return-policy`      | `page-policy.php`         |
| `/shipping-policy`    | `page-policy.php`         |
| `/disclaimer`         | `page-policy.php`         |

Under **Settings → Reading**, set the front page to a static page and choose your Home page.

## Design tokens

All colours, fonts, and spacing are defined in `assets/css/tokens.css` and mirrored to Tailwind via `functions.php` (inline runtime config). Update once, refresh once.

- **Fonts:** Playfair Display (headings) + Inter (body)
- **Primary:** `#0d9488` (teal-600)
- **Ink / text:** `#0f172a` (slate-900)
- **Surface:** `#fafaf9` (stone-50)

## Development notes

- The theme uses the Tailwind CDN in development. For production, install Tailwind locally, generate `assets/css/tailwind.min.css`, then swap the CDN script out for the compiled file in `functions.php`.
- The Cart and Checkout pages are frontend-only. Wire them up to WooCommerce or a custom REST endpoint when you move to production.
- All icons use inline SVGs matching the `lucide-react` set in the React reference. Add new ones to `armodil_icon()` in `inc/helpers.php`.

## Editor workflow

1. **Register fields** — everything is in `inc/acf-*.php` files (Local JSON compatible).
2. **Design the module** — one PHP template per section in `modules/content-*.php`.
3. **Build the page** — pick the ACF template in the page editor and fill in copy.

Enjoy building.
