import React from "react";

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
    <>
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
    </>
  );
};

export default Rider;
