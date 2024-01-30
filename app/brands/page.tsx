"use client";

import React from "react";

import Header from "../layout/header/Header";
import Footer2 from "../layout/footer/Footer2";
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

const Brand = () => {
  return (
    <section className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <HeroSection />
      <WhoAreWe />
      <AdPlacementOptions />
      <HowItWorksBrands />
      <Pricing />
      <FeatureAddOns />
      <USP />
      <BrandSignUp />
      <FAQsBrands />
      <ScrollToTop />
      <Footer2 />
    </section>
  );
};

export default Brand;
