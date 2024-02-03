"use client";

import React from "react";

import Header from "../layout/header/Header";
import Footer2 from "../layout/footer/Footer2";
import HeroSection from "./HeroSection";
import RiderBenefits from "../pages/ad-placement/RiderBenefits";
import HowItWorksRiders from "../pages/how-it-works/Riders";
import CompensationAndRewards from "../pages/ad-placement/CompensationAndRewards";
import WaitingList from "./WatingList";
import FAQsRiders from "./FAQsRiders";
import RiderTestimonials from "./RiderTestimonials";
import CallToAction2 from "../components/CallToAction2";
import ScrollToTop from "../layout/ScrollToTop";
import ScrollHint from "../components/ScrollHint";

const Rider = () => {
  return (
    <section className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <HeroSection />
      <RiderBenefits />
      <HowItWorksRiders />
      <CallToAction2 />
      <CompensationAndRewards />
      <RiderTestimonials />
      <WaitingList />
      <FAQsRiders />
      <ScrollHint
        sections={[
          "hero-section",
          "rider-benefits",
          "how-it-works",
          "call-to-action",
          "compensation-rewards",
          "testimonials",
          "waiting-list",
          "faqs-riders",
        ]}
      />
      <ScrollToTop />
      <Footer2 />
    </section>
  );
};

export default Rider;
