import React from 'react';
import PolicyPage from '../components/PolicyPage';

export default function DisclaimerPage() {
  return (
    <PolicyPage
      eyebrow="Disclaimer"
      title="Medical & Website Disclaimer"
      intro="A candid note on what our website is — and is not. Everything here is educational; nothing on this site should be treated as a substitute for advice from a licensed medical professional."
      updated="August 2026"
      sections={[
        {
          id: 'information-only',
          title: 'Educational information only',
          blocks: [
            { p: 'The content published on this website — product pages, blog articles, condition guides, and FAQs — is general information. It is not medical advice, diagnosis, or treatment guidance for your specific situation.' },
            { warn: 'Never delay, avoid, or discontinue medical advice you have received from a qualified professional because of something you read on our site.' },
          ],
        },
        {
          id: 'prescription-medicines',
          title: 'Prescription medicines in Australia',
          blocks: [
            { p: 'Many of the products described on this website are classified as prescription-only in Australia (Schedule 4 medicines under the Poisons Standard). It remains your responsibility to comply with the Australian Therapeutic Goods Administration (TGA) personal-import rules and to consult a doctor before using any prescription medication.' },
            { p: 'We do not diagnose, prescribe, or issue medical advice. If you are unsure whether a product is right for you, please book an appointment with your GP or a licensed pharmacist first.' },
          ],
        },
        {
          id: 'no-doctor-patient',
          title: 'No doctor–patient relationship',
          blocks: [
            { p: 'Reading this website, subscribing to our newsletter, or corresponding with our support team does not create a doctor–patient relationship. Our customer-service staff are trained to help with orders, dispatch, and general product enquiries — not to interpret symptoms or issue clinical recommendations.' },
          ],
        },
        {
          id: 'individual-results',
          title: 'Individual results and side-effects',
          blocks: [
            { p: 'Response to any medication varies from person to person. Two people taking the same dose can experience different onsets, durations, and side-effect profiles based on genetics, existing conditions, other medicines, and lifestyle factors.' },
            { list: [
              'Read the leaflet included with your parcel before first use',
              'Start with the lowest reasonable dose your prescriber recommends',
              'Stop use and seek medical attention immediately if you develop rash, chest pain, severe headache, or persistent mood changes',
              'Store medicines out of reach of children, in a cool dry place',
            ] },
          ],
        },
        {
          id: 'accuracy-of-content',
          title: 'Accuracy of information',
          blocks: [
            { p: 'We work hard to keep every page accurate and up to date. Even so, medical knowledge evolves quickly and typos happen. We make no warranty — express or implied — about the completeness, reliability, or currency of any information published on this site.' },
            { p: 'If you spot something out of date or ambiguous, please tell us and we will review it promptly.' },
          ],
        },
        {
          id: 'third-party-links',
          title: 'Third-party links and references',
          blocks: [
            { p: 'Some articles link to external research papers, news stories, or reference sites. Those pages are managed by their own authors and organisations — we do not control their content and do not endorse every opinion published there.' },
          ],
        },
        {
          id: 'liability',
          title: 'Limitation of liability',
          blocks: [
            { p: 'To the maximum extent permitted by Australian law, Armodafinil Australia Direct is not liable for any indirect, incidental, special, or consequential loss arising from the use of information on this website or from the use of any product supplied through it. Where liability cannot be excluded, it is limited to the price paid for the product in question.' },
            { note: 'This section does not attempt to exclude any rights you may have under the Australian Consumer Law or other non-excludable consumer protections.' },
          ],
        },
      ]}
    />
  );
}
