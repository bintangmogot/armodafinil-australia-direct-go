import React from 'react';
import PolicyPage from '../components/PolicyPage';

export default function ShippingPolicy() {
  return (
    <PolicyPage
      eyebrow="Shipping"
      title="Shipping Policy"
      intro="How we pack, dispatch, and deliver every order across Australia — quietly, securely, and on a schedule you can plan around."
      updated="August 2026"
      sections={[
        {
          id: 'processing-time',
          title: 'Order processing time',
          blocks: [
            { p: 'Once your payment has cleared, our pharmacy team picks and packs the order within 24 to 48 business hours. During peak periods (public holidays, sale events, or clinical launches), dispatch may take up to 72 hours — we notify affected orders proactively when this happens.' },
            { list: [
              'Orders placed before 12:00 AEST on a business day are typically dispatched the same day',
              'Weekend and public-holiday orders begin processing the next business day',
              'A pre-dispatch email confirms your parcel is being prepared',
            ] },
          ],
        },
        {
          id: 'delivery-timeframes',
          title: 'Delivery timeframes',
          blocks: [
            { p: 'Delivery windows vary by destination and courier route. The estimates below apply to parcels dispatched from our Australian warehouse:' },
            { list: [
              'Metropolitan Australia (Sydney, Melbourne, Brisbane, Perth, Adelaide) — 6–10 business days',
              'Regional Australia — 8–14 business days',
              'Remote postcodes and Northern Territory — 10–16 business days',
              'International (case-by-case) — 10–21 business days plus customs clearance',
            ] },
            { note: 'These timeframes are estimates only. Severe weather, transport strikes, and customs holds are outside our direct control.' },
          ],
        },
        {
          id: 'shipping-methods',
          title: 'Shipping methods and carriers',
          blocks: [
            { p: 'We work with reputable domestic and international courier partners including Australia Post and select express carriers. The exact carrier is chosen at dispatch based on your postcode, parcel weight, and current network capacity.' },
            { p: 'Signature-on-delivery is available at additional cost and can be selected at checkout. If no one is home, most carriers leave the parcel in a safe location or a nearby collection point.' },
          ],
        },
        {
          id: 'shipping-costs',
          title: 'Shipping costs and free-shipping threshold',
          blocks: [
            { p: 'Standard Australian shipping starts at A$12.50 for orders under A$299. Free standard shipping applies automatically to Australian orders of A$299 or more — no coupon code needed.' },
            { p: 'Express and signature-required upgrades are shown as optional add-ons in the cart. The final total, including any surcharge, is always displayed before you enter payment details.' },
          ],
        },
        {
          id: 'tracking',
          title: 'Tracking your parcel',
          blocks: [
            { p: 'A shipment confirmation email with a tracking link is sent as soon as your parcel is scanned by the carrier — usually on the day of dispatch. Tracking data can take up to 24 hours to appear the first time.' },
            { p: 'For live updates, use the tracking link in your shipping email. If you notice no update for more than five business days, please contact support so we can chase the courier on your behalf.' },
          ],
        },
        {
          id: 'discreet-packaging',
          title: 'Discreet packaging',
          blocks: [
            { p: 'Every parcel leaves our facility in a plain, unbranded outer package. The exterior carries no product names, no clinical branding, and no pharmacy references — only the delivery address and the return address in the standard courier format.' },
            { note: 'A discreet return label is used so the parcel can be re-routed if you are not home, without revealing its contents.' },
          ],
        },
        {
          id: 'international',
          title: 'International orders and customs',
          blocks: [
            { p: 'Where we are able to ship internationally, please review your country’s personal-import rules for medicines before ordering. Buyers are responsible for any duties, taxes, or brokerage fees applied at the destination.' },
            { p: 'Delivery timeframes for international orders are estimates only. Customs inspections, border-agency holidays, and destination-country processing can add several days to the transit window.' },
          ],
        },
        {
          id: 'missing-damaged',
          title: 'Missing or damaged parcels',
          blocks: [
            { p: 'If your parcel is late, damaged, or has not arrived after the estimated window, please contact support with your order number. We open an investigation with the courier and, once a claim is confirmed, we offer either a free reshipment or a full refund at our discretion.' },
            { p: 'For damaged parcels, please photograph the outer packaging before opening it — this helps us process the courier claim faster.' },
          ],
        },
      ]}
    />
  );
}
