import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import ShippingFeatures from '../components/home/ShippingFeatures';
import PopularProducts from '../components/home/PopularProducts';
import Testimonials from '../components/home/Testimonials';
import WhyChoose from '../components/home/WhyChoose';
import AudienceGrid from '../components/home/AudienceGrid';
import HowItWorks from '../components/home/HowItWorks';
import FAQBlock from '../components/home/FAQBlock';
import ConditionsGrid from '../components/home/ConditionsGrid';
import BlogGrid from '../components/home/BlogGrid';
import NewsletterCTA from '../components/home/NewsletterCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ShippingFeatures />
      <PopularProducts />
      <Testimonials />
      <WhyChoose />
      <AudienceGrid />
      <HowItWorks />
      <FAQBlock />
      <ConditionsGrid limit={3} />
      <BlogGrid limit={3} />
      <NewsletterCTA />
    </>
  );
}
