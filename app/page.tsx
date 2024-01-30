import Header from "./layout/header/Header";
import Footer2 from "./layout/footer/Footer2";
import HomePage from "./pages/HomePage";
import CallToAction from "./pages/CallToAction";
import BrandBenefits from "./brands/BrandBenefits";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./layout/ScrollToTop";
import RiderSignUp from "./pages/sign-up/Riders";
import CallToAction2 from "./components/CallToAction2";
import BikeAds101 from "./pages/BikeAds101";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <HomePage />
      <CallToAction />
      <BikeAds101 />
      <BrandBenefits />
      <CallToAction2 />
      <Portfolio />
      <RiderSignUp />
      <ScrollToTop />
      <Footer2 />
    </main>
  );
}
