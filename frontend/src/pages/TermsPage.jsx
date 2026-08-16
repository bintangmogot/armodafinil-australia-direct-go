import React from 'react';
import PolicyPage from '../components/PolicyPage';

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The everyday terms that govern how you buy from us — payments, dispatch, product guarantees, and pharmacy service standards."
      updated="August 2026"
      sections={[
        {
          id: 'general-info',
          title: 'General information and customer support',
          blocks: [
            { p: 'Armodafinil Australia Direct is committed to a clear, transparent online-shopping experience. Every product page shows the active ingredient, strength, pack sizes, prices in Australian dollars, and dispatch expectations. If we spot an error in any listing, we reserve the right to correct it and to notify affected customers.' },
            { p: 'Support covers questions across four everyday areas:' },
            { list: [
              'Products — dosing, strengths, and pack options',
              'Orders — placement, tracking, and delivery windows',
              'Shipping — carrier options, timelines, and packaging',
              'Account — email preferences, order history, and receipts',
            ] },
            { p: 'Please use the official channels listed on our contact page (email or WhatsApp). We do not initiate contact through social-media DMs and will never ask for your password.' },
          ],
        },
        {
          id: 'privacy-payment-security',
          title: 'Your privacy and payment security',
          blocks: [
            { p: 'We take a minimal-data approach — we collect only what we need to fulfil your order and keep it safe. Full details are covered in our privacy policy.' },
            { p: 'Payments run through PCI-aligned gateways with modern encryption. Card numbers, CVCs, and expiry data are never stored on our servers. If you ever suspect unauthorised activity on your account, contact us straight away so we can lock it down.' },
          ],
        },
        {
          id: 'comments-feedback',
          title: 'Sharing comments and feedback',
          blocks: [
            { p: 'Customer reviews, ratings, and suggestions genuinely shape what we improve next. By submitting a review or comment you grant us permission to display, quote, and lightly edit that content for the following purposes:' },
            { list: [
              'Product pages and marketing materials',
              'Service quality and continuous improvement',
              'General communication and community building',
            ] },
            { p: 'We reserve the right to remove any submission that contains personal information about a third party, is defamatory, or breaches these terms.' },
          ],
        },
        {
          id: 'shipping-policies',
          title: 'Shipping policies and order guidelines',
          blocks: [
            { p: 'Orders are queued for dispatch as soon as payment is cleared, subject to stock availability. Most parcels leave our facility within 24–48 business hours. During launches, public holidays, or extreme demand, dispatch can slip by up to two days — we notify affected orders proactively when that happens.' },
          ],
        },
        {
          id: 'shipping-rates',
          title: 'Shipping rates and delivery costs',
          blocks: [
            { p: 'Shipping is priced based on:' },
            { list: [
              'Destination postcode and zone',
              'Chosen delivery speed (standard vs express where available)',
              'Package size and total weight',
              'Carrier surcharges applicable at time of dispatch',
            ] },
            { p: 'The final shipping charge appears in your cart before you enter payment details — no surprise charges after checkout. Free-shipping promotions and discounted delivery rates are surfaced with clear minimum-order thresholds and expiry dates.' },
          ],
        },
        {
          id: 'address-management',
          title: 'Managing your shipping address',
          blocks: [
            { p: 'Please double-check the delivery address before submitting your order. An incorrect address can cause:' },
            { list: [
              'Delayed delivery while the parcel is redirected',
              'Additional courier charges passed on to the buyer',
              'A failed delivery and return-to-sender, requiring reshipment fees',
            ] },
            { warn: 'Once an order enters processing or dispatch, we cannot change the delivery address. Please contact support immediately if a mistake is spotted.' },
          ],
        },
        {
          id: 'customs-delays',
          title: 'Understanding possible customs delays',
          blocks: [
            { p: 'For international shipments, customs inspection and border clearance can add unpredictable time to the transit window. We work closely with reliable carriers to minimise this, but we cannot guarantee delivery dates for parcels held by customs, government inspectors, or affected by severe weather.' },
          ],
        },
        {
          id: 'customs-duties',
          title: 'Customs duties and charges',
          blocks: [
            { p: 'International orders may attract customs duties, taxes, import fees, or other government-imposed charges as determined by your destination country. These charges are the buyer’s responsibility.' },
            { p: 'We have no control over the amount, timing, or applicability of these fees. If you are unsure, contact your local customs office or a licensed customs broker before ordering.' },
          ],
        },
      ]}
    />
  );
}
