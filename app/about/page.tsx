import React from "react";

import Header from "@/app/layout/header/Header";
import Footer2 from "@/app/layout/footer/Footer2";
import About from "./About";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <About />
      <Footer2 />
    </div>
  );
};

export default Page;
