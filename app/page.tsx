import HeroSection from "./pages/HeroSection";
import CallToAction from "./pages/CallToAction";
import BrandBenefits from "./brands/BrandBenefits";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./layout/ScrollToTop";
import RiderSignUp from "./pages/sign-up/Riders";
import CallToAction2 from "./components/CallToAction2";
import BikeAds101 from "./pages/BikeAds101";
import ScrollHint from "./components/ScrollHint";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CallToAction />
      <BikeAds101 />
      <BrandBenefits />
      <CallToAction2 />
      <Portfolio />
      <RiderSignUp />
      <ScrollHint
        sections={[
          "homepage",
          "call-to-action",
          "bike-ads",
          "brand-benefits",
          "portfolio",
          "rider-signUp",
        ]}
      />

      <ScrollToTop />
    </>
  );
}
