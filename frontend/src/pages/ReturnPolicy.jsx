import React from 'react';
import PolicyPage from '../components/PolicyPage';

export default function ReturnPolicy() {
  return (
    <PolicyPage
      eyebrow="Returns"
      title="Return & Refund Policy"
      intro="A plain-English rundown of how order verification, tracking, missing parcels, and product returns are handled at Armodafinil Australia Direct."
      updated="August 2026"
      sections={[
        {
          id: 'order-verification',
          title: 'Order verification and confirmation',
          blocks: [
            { p: 'Every order is checked before it is processed. As soon as your order is placed, a confirmation email is sent so you always have a written record of what you have purchased and at what price.' },
            { p: 'We reserve the right to request additional information, revisit payment details, or cancel an order where we identify potential fraud, a pricing error, a stock shortage, or a regulatory concern. Nothing ships until verification and payment are both clear.' },
            { note: 'If your confirmation email does not arrive within an hour, please check spam then contact our support team so we can resend it manually.' },
          ],
        },
        {
          id: 'shipment-tracking',
          title: 'Shipment tracking and confirmation',
          blocks: [
            { p: 'Once your parcel leaves our facility, you receive a shipment email that includes a tracking link. Tracking updates are provided by the courier and can take up to 24 hours to appear the first time.' },
            { p: 'We recommend checking the tracking link daily during transit. If you notice no update for more than five business days, please reach out and we will chase the courier on your behalf.' },
          ],
        },
        {
          id: 'po-box-apo',
          title: 'PO Box and APO/FPO shipping notes',
          blocks: [
            { p: 'We can dispatch to eligible PO Box addresses depending on the carrier and the delivery method chosen at checkout. APO/FPO military addresses are also supported, but processing at military mail centres can add meaningful delay.' },
            { p: 'A small number of items and services carry restrictions on PO Box or APO/FPO delivery. Please double-check eligibility on the product page before placing the order.' },
          ],
        },
        {
          id: 'customs-duties',
          title: 'Customs duties and import procedures',
          blocks: [
            { p: 'International parcels move through customs on arrival in the destination country. Inspections, duties, and import taxes are determined by the receiving customs authority and remain the responsibility of the buyer.' },
            { p: 'Please familiarise yourself with the personal-import rules of your country before ordering. If a parcel is rejected at the border, we can only offer a partial refund after any recovery costs have been deducted.' },
          ],
        },
        {
          id: 'delivery-timeframes',
          title: 'Estimated delivery timeframes',
          blocks: [
            { p: 'Delivery windows are estimates only. Standard Australian addresses typically receive their parcel within 6–12 business days after dispatch. International orders vary from 10–21 business days depending on origin and customs.' },
            { list: [
              'Metropolitan Australia — usually 6–10 business days',
              'Regional Australia — usually 8–14 business days',
              'International — usually 10–21 business days',
              'Peak seasons and public holidays can add 2–5 business days',
            ] },
          ],
        },
        {
          id: 'missing-packages',
          title: 'Missing packages and reshipment',
          blocks: [
            { p: 'If a parcel is missing after its estimated delivery window has passed, please contact support with your order number. Before a reshipment is approved we complete a short investigation with the courier.' },
            { list: [
              'Review the tracking history in full detail',
              'Confirm the delivery address supplied at checkout',
              'Verify the delivery status directly with the courier',
              'Open a formal enquiry with the shipping partner where needed',
            ] },
            { p: 'When a parcel is confirmed lost in transit, we offer either a free reshipment or a refund at our discretion. Parcels marked as delivered by the courier but reported missing require an extra step of investigation before any resolution is offered.' },
          ],
        },
        {
          id: 'returns-exchanges-refunds',
          title: 'Returns, exchanges, and refunds',
          blocks: [
            { p: 'We stand behind every parcel we send. A return is eligible when one of the following applies:' },
            { list: [
              'The item shipped does not match what you ordered',
              'The item arrived damaged in transit',
              'The item arrived in an unusual or unsealed condition',
              'The order was fulfilled incorrectly on our side',
              'The item is unopened, unused, and in its original packaging (for change-of-mind returns)',
            ] },
            { subH: 'When we treat it as an exchange', p: 'We treat your case as an exchange rather than a refund when the wrong item was shipped, the item arrived defective, or a documented fulfilment error occurred. In those situations we ship the correct product at no additional cost.' },
            { subH: 'When we issue a refund', p: 'A refund is approved when an order cannot be fulfilled or when a shipping/fulfilment issue is verified from our side. Refunds are returned to the original payment method within 3–5 business days after we receive and inspect the returned item.' },
            { warn: 'For hygiene and pharmacy compliance reasons, opened blister packs, unsealed sachets, and change-of-mind returns for controlled products cannot be accepted.' },
          ],
        },
      ]}
    />
  );
}
