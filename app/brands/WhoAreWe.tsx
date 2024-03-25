import React from "react";
import Link from "next/link";
import Image from "next/image";

import Heading2 from "../layout/Heading2";
import Button from "../components/Button";
import TeamImage from "../../public/Bikes-Amsterdam-center.png";

const WhoAreWe = () => {
  return (
    <section id="about" className="bg-gray-100 px-8 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading2
          text="Who Are We?"
          color="dark"
          align="center"
          margin="mb-12"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left space-y-6">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg ease-in-out">
              {`We are a dedicated team driven by the ambition to transform
              outdoor advertising. Our focus isn't just on being different;
              it's about being effective and innovative. Through our
              bicycle-based strategies, we bring your brand's narrative
              directly to the bustling streets, connecting with audiences in a
              dynamic and memorable way.`}
            </p>
            <div className="pt-4">
              <Link href="/about">
                <Button text="Learn More About Us" color="dutch" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full lg:w-auto">
              <Image
                src={TeamImage}
                alt="Team"
                className="h-auto w-full rounded-lg shadow-lg"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
