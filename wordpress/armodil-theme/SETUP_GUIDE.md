# Armodafinil Australia Direct — Content & SEO Setup Guide

This document outlines how to populate the WordPress backend to perfectly match the React prototype design system.

## 1. Page Creation & ACF Modules

Every page uses the **Flexible Content** field called "Modules".

1. **Homepage (`/`)**
   - Create a page named "Home", set as Front Page in Settings > Reading.
   - Add modules in this order: `Hero Section`, `Trust Strip`, `Featured Products`, `How to Order`, `Who Uses`, `Why Choose Us`, `Reviews`, `FAQs`.

2. **Conditions Guide (`/conditions`)**
   - Add module: `Conditions Grid`.

3. **Shop (`/shop`)**
   - Set as WooCommerce Shop page. The theme will automatically render `woocommerce/archive-product.php` with the category hero.

4. **Legal Pages (`/privacy`, `/terms`, `/shipping`, `/returns`)**
   - Create standard pages. 
   - Add the specific module (e.g., `Privacy Policy`, `Shipping Features`) or use the standard WYSIWYG content block.

## 2. Product Setup

The theme uses variable products with a specific quantity attribute to power the dynamic price calculator.

1. **Attribute Setup**
   - Create a global attribute named **Quantity** (slug: `pa_quantity`).
   - Add terms: `10 Tabs`, `30 Tabs`, `50 Tabs`, `100 Tabs`, `200 Tabs`, `300 Tabs`.

2. **Product Configuration**
   - Create product as **Variable Product**.
   - In Attributes, add `Quantity` and check "Used for variations".
   - In Variations, generate variations from all attributes. Set prices for each quantity tier.
   - **ACF Fields**: Fill out the `Product Subtext` (e.g., "$1.09 per pill") and `Feature Pills` (e.g., "Free Shipping").

## 3. SEO Configuration (All in One SEO)

1. **Global Settings**
   - Set Organization Schema (Name: Armodafinil Australia Direct, Phone: 0455 241 294, Address: 360 Collins St, Melbourne).
   - Ensure "Person/Organization" logo is set.

2. **Schema Injection**
   - `functions.php` automatically handles the `FAQPage` schema based on the ACF FAQ modules.
   - WooCommerce handles `Product` schema automatically. Ensure AIOSEO WooCommerce integration is active.

3. **Permalinks**
   - Go to Settings > Permalinks.
   - Select "Post name" for standard pages.
   - Select "Custom base" for products: `/shop/%product_cat%/` (or flat as defined in `inc/woocommerce.php`).
