import React from "react";

import HeroSection from "./HeroSection";
import WhoAreWe from "./WhoAreWe";
import AdPlacementOptions from "../pages/ad-placement/AdPlacementOptions";
import HowItWorksBrands from "../pages/how-it-works/Brands";
import Pricing from "../pages/ad-placement/Pricing";
import USP from "./USP";
import FeatureAddOns from "./FeatureAddOns";
import BrandSignUp from "../pages/sign-up/Brands";
import FAQsBrands from "./FAQsBrands";
import ScrollToTop from "../layout/ScrollToTop";
import ScrollHint from "../components/ScrollHint";

const Brand = () => {
  return (
    <>
      <HeroSection />
      <WhoAreWe />
      <AdPlacementOptions />
      <HowItWorksBrands />
      <Pricing />
      <FeatureAddOns />
      <USP />
      <BrandSignUp />
      <FAQsBrands />
      <ScrollHint
        sections={[
          "hero-section",
          "about",
          "ad-options",
          "how-it-works",
          "pricing",
          "add-ons",
          "usp",
          "brand-signUp",
          "faqs-brands",
        ]}
      />
      <ScrollToTop />
    </>
  );
};

export default Brand;
