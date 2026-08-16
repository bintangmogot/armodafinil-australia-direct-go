import React from 'react';

export function LegalPage({ title, intro, sections }) {
  return (
    <div>
      <div className="section-wash">
        <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900">{title}</h1>
          <p className="mt-3 text-ink-700 leading-relaxed">{intro}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">{s.h}</h2>
            <p className="mt-2 text-ink-700 leading-relaxed">{s.p}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export const Privacy = () => (
  <LegalPage title="Privacy policy" intro="We collect only what we need to fulfil your order and keep your account safe. Read on for the plain-English version."
    sections={[
      { h: 'What we collect', p: 'Basic contact information, delivery address, and encrypted payment details supplied via our processor. We do not store raw card numbers on our servers.' },
      { h: 'How we use it', p: 'To process orders, provide support, and — only with your consent — send occasional product updates. You can opt out at any time.' },
      { h: 'Data retention', p: 'Order records are retained for accounting compliance. Marketing preferences can be deleted immediately on request.' },
      { h: 'Your rights', p: 'You can request an export or deletion of your data. Email support and we will act within 14 days.' },
    ]}
  />
);

export const Terms = () => (
  <LegalPage title="Terms of service" intro="By using our website you agree to the following, common-sense terms."
    sections={[
      { h: 'Information only', p: 'Everything on this website is educational and is not a substitute for medical advice from a licensed professional.' },
      { h: 'Eligibility', p: 'You must be an adult resident of Australia and comply with local import regulations for personal-use medicines.' },
      { h: 'Orders', p: 'Prices are quoted in Australian dollars and include applicable taxes unless stated otherwise. We may cancel or refund any order that we cannot fulfil.' },
      { h: 'Liability', p: 'To the extent permitted by law, our liability is limited to the value of the order in question.' },
    ]}
  />
);

export const Shipping = () => (
  <LegalPage title="Shipping information" intro="How we get parcels to Australian addresses — quietly, safely, and on schedule."
    sections={[
      { h: 'Dispatch time', p: 'Orders leave our facility within 24–48 business hours after payment clears.' },
      { h: 'Delivery window', p: 'Standard Australian delivery lands within 6–12 business days depending on your postcode.' },
      { h: 'Packaging', p: 'All parcels use neutral outer packaging — no product names or clinical branding on the outside.' },
      { h: 'Tracking', p: 'You will receive a tracking link on the day your parcel is scanned into the courier network.' },
    ]}
  />
);

export const Returns = () => (
  <LegalPage title="Returns & refunds" intro="Our aim is a smooth experience — here is how to raise an issue if something goes wrong."
    sections={[
      { h: 'Eligible returns', p: 'Sealed, undamaged items can be returned within 14 days of delivery.' },
      { h: 'How to start', p: 'Email support with your order number. We’ll reply with a return address and next steps within one business day.' },
      { h: 'Refunds', p: 'Approved refunds are issued to the original payment method within 3–5 business days after we receive the returned item.' },
      { h: 'Damaged parcels', p: 'If a parcel arrives damaged, please photograph the packaging before opening and contact us straight away.' },
    ]}
  />
);

export const About = () => (
  <LegalPage title="About us" intro="We’re a small Australian team focused on the quiet quality of a good order — predictable dispatch, honest information, and calm support."
    sections={[
      { h: 'Our approach', p: 'We prefer clarity to hype. Product pages explain what to expect, when to expect it, and where the evidence is thin.' },
      { h: 'Who we serve', p: 'Students, professionals, shift workers, and competitive players who value steady focus over big peaks.' },
      { h: 'Contact', p: 'Reach us on WhatsApp or email — real humans usually reply within minutes during business hours.' },
    ]}
  />
);

export const Categories = () => (
  <LegalPage title="Categories" intro="Quickly browse our line-up by product family."
    sections={[
      { h: 'Armodafinil', p: 'Long-duration wakefulness support tablets — favoured for extended cognitive sessions and shift work.' },
      { h: 'Modafinil', p: 'Classic wakefulness support — a smoother onset and shorter tail compared to Armodafinil.' },
      { h: 'Wellness', p: 'Selected complementary items shipped alongside our core cognitive line-up.' },
    ]}
  />
);

export const Account = () => (
  <LegalPage title="Your account" intro="Account sign-in and order history are coming soon. In the meantime, WhatsApp support can retrieve any past order."
    sections={[
      { h: 'Coming soon', p: 'Order history, saved addresses, and reorder shortcuts are on the roadmap.' },
      { h: 'Need help now?', p: 'Contact support and we’ll assist within minutes during business hours.' },
    ]}
  />
);
