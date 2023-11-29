import AboutSection from './components/About';
import ScrollToTop from './components/BackToTop';
import CallToAction from './components/CallToAction';
import ClientsSection from './components/Clients';
import FAQSection from './components/FAQ';
import FeaturesSection from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import IntroSection from './components/Intro';
import PricingSection from './components/Pricing';
import ServicesSection from './components/Services';
import TeamSection from './components/Team';
import Testimonials from './components/Testimonial';
import WhyUsSection from './components/WhyUs';
import React, { useEffect } from 'react';
import WOW from 'wowjs';

function App() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div>
      <Header/>
      <IntroSection/>
      <ScrollToTop/>
      <div>
        <AboutSection/>
        <ServicesSection/>
        <WhyUsSection/>
        <CallToAction/>
        <FeaturesSection/>
        <Testimonials/>
        <TeamSection/>
        <ClientsSection/>
        <PricingSection/>
        <FAQSection/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
