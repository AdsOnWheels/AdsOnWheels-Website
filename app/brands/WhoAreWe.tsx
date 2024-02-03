import React from "react";

import Heading2 from "../layout/Heading2";
import Button from "../components/Button";

const WhoAreWe = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heading2
          text="Who Are We?"
          color="dark"
          align="center"
          className="mb-12"
        />
        <div className="space-y-6">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            {
              "We are a dedicated team driven by the ambition to transform outdoor advertising. Our focus isn't just on being different; it's about being effective and innovative. Through our bicycle-based strategies, we bring your brand's narrative directly to the bustling streets, connecting with audiences in a dynamic and memorable way."
            }
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            {
              "Why bicycles? They provide unparalleled mobility and visibility, enabling us to navigate through diverse urban environments. This approach allows us to introduce your brand to a broad audience, creating engaging experiences that leave a lasting impression. Our strategy is about making your brand's presence in the urban landscape not just seen, but felt."
            }
          </p>
          <div className="pt-6">
            <Button text="Learn More About Us" color="dutch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
