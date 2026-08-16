import React from 'react';
import PolicyPage from '../components/PolicyPage';

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="How we collect, use, store, and protect personal information when you visit our website, create an account, place an order, or interact with our support team."
      updated="August 2026"
      sections={[
        {
          id: 'info-we-collect',
          title: 'Personal information we collect',
          blocks: [
            { subH: 'Registration and ordering', p: 'When you create an account, place an order, or contact us we collect the basics needed to serve you — name, shipping address, email, phone number, and your order history. Nothing more than what an order genuinely needs.' },
            { subH: 'Email addresses', p: 'We collect email addresses when you register, order, subscribe to our newsletter, or reach out to support. We use them for order confirmations, account notifications, customer service, and — only where you have opted in — occasional product updates.' },
            { subH: 'Cookies and tracking technologies', p: 'Our site uses cookies, pixels, and similar tools to remember preferences, measure site performance, and refine the browsing experience. You can manage cookies through your browser settings, keeping in mind that disabling certain cookies may affect functionality such as staying signed in.' },
            { subH: 'Website usage and log data', p: 'We collect technical signals such as IP address, browser type, device information, pages visited, referring URL, and access timestamps. This data helps us maintain security, diagnose issues, and improve the service.' },
            { subH: 'Children’s privacy', p: 'Our services are not intended for children under the age required by applicable law. We do not knowingly collect personal information from minors. If we learn a child has submitted information, we delete it promptly.' },
            { subH: 'Customer reviews and testimonials', p: 'Reviews and ratings are displayed publicly with the reviewer’s first name and city only. Please avoid sharing sensitive information or private medical details in a public review — email support instead.' },
            { subH: 'Medical questionnaire and prescription uploads', p: 'During checkout or via your account you may optionally provide health-questionnaire answers (physician contact, allergies, current medications) and upload a prescription file. This information is used solely to review your order, verify prescriptions where required, and dispatch medicines safely.' },
            { note: 'Prescription files and questionnaire responses are transmitted over TLS/SSL, stored in access-controlled private storage, never published on the site, and never indexed by search engines. Access is limited to authorised staff.' },
          ],
        },
        {
          id: 'how-we-use',
          title: 'How we use your information',
          blocks: [
            { p: 'We use your information for the following, and only the following:' },
            { list: [
              'Processing and fulfilling orders',
              'Verifying transactions and preventing fraud',
              'Providing customer support and answering enquiries',
              'Sending order updates, account notifications, and service messages',
              'Improving website functionality, products, and content',
              'Running privacy-respecting analytics and performance measurement',
              'Meeting legal, regulatory, and pharmacy-compliance obligations',
              'Sending marketing communications where the law permits and where you have consented',
            ] },
          ],
        },
        {
          id: 'payment-security',
          title: 'Payment security and data protection',
          blocks: [
            { p: 'We apply reasonable technical and administrative safeguards to protect personal information from loss, misuse, unauthorised alteration, and unauthorised disclosure. Payments run through licensed processors using industry-standard encryption.' },
            { p: 'We do not store complete payment details on our servers. Where card processing is involved, tokenised references are stored by our PCI-DSS-compliant gateway — never full card numbers.' },
          ],
        },
        {
          id: 'offline-collection',
          title: 'Collection, use, and disclosure while offline',
          blocks: [
            { p: 'We may collect personal information through offline interactions — phone calls, email exchanges, printed support requests, and other direct communications. Information collected offline is used for the same purposes as information collected online:' },
            { list: [
              'Order processing and fulfilment',
              'Customer service and issue resolution',
              'Fraud prevention and security',
              'Legal compliance and pharmacy record-keeping',
              'General business operations',
            ] },
            { p: 'We may share information with service providers, payment processors, shipping partners, and regulators where necessary to deliver our service or to comply with law. We do not sell personal information to third parties for marketing.' },
          ],
        },
        {
          id: 'updates',
          title: 'Updates to this policy',
          blocks: [
            { p: 'We may update this privacy policy from time to time to reflect changes in our practice, applicable law, or business operations. Whenever we make a material change, the updated version is published on this page with a revised "Last updated" date.' },
            { p: 'If you have any questions about how we handle personal information, or if you want to exercise your right to access, correct, or delete your data, please email our support team.' },
          ],
        },
      ]}
    />
  );
}
