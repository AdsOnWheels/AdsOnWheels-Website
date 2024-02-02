import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import BicycleFrame from "../../public/images/rider/advertising-on-bicycle-frames.png";
import WheelRim from "../../public/images/rider/advertising-on-bicycle-wheel-rim-cover.png";
import WheelRim2 from "../../public/images/rider/advertising-on-bicycle-wheel-rim-cover-II.png";
import BicycleBasket from "../../public/images/rider/advertising-on-bicycle-baskets-II.png";
import BicycleBasket2 from "../../public/images/rider/advertising-on-bicycle-baskets.png";
import BicycleFrame2 from "../../public/images/rider/advertising-on bicycle-frame-II.png";
import BicycleFrame3 from "../../public/images/rider/advertising-on bicycle-frame.png";
import WheelRim3 from "../../public/images/rider/advertising-on-bicycle-wheel-rim-cover-III.png";
import CargoBicycle from "../../public/images/rider/advertising-on-cargo-bicycle.png";
import Heading2 from "../layout/Heading2";

interface Props {
  image: StaticImageData;
  altText: string;
}

const PortfolioItem = ({ image, altText }: Props) => (
  <div className="m-4 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <Image src={image} alt={altText} className="w-full h-auto object-cover" />
  </div>
);

const adPortfolio = [
  {
    image: BicycleFrame,
    altText: "Advertising placed in between Bicycle Frame",
    description:
      "Integrates ads into the bicycle's structure for a natural, streamlined look that captures attention on busy streets.",
    learnMoreLink: "/ad-type/in-frame-ads",
  },
  {
    image: WheelRim,
    altText: "Creative ad on bicycle wheel rim cover",
    description:
      "Utilizes the motion of wheel rims to create dynamic, moving advertisements that stand out as the bicycle moves.",
    learnMoreLink: "/ad-type/wheel-rim-ads",
  },
  {
    image: BicycleBasket2,
    altText: "Promotional ad on bicycle baskets",
    description:
      "Places ads on bicycle baskets for high-level exposure, especially effective in pedestrian areas and marketplaces.",
    learnMoreLink: "/ad-type/basket-ads",
  },
  {
    image: BicycleFrame3,
    altText: "Eye-catching ad on bicycle frame",
    description:
      "Employs the broad surface of the bicycle frame for large, eye-catching ads, ideal for branding and promotions.",
    learnMoreLink: "/ad-type/frame-ads",
  },
  {
    image: WheelRim2,
    altText: "Advertising on bicycle wheel rim cover",
    description:
      "Offers innovative advertising on wheel rims, creating a captivating visual effect as the wheels spin.",
    learnMoreLink: "/ad-type/wheel-rim-ads",
  },
  {
    image: BicycleBasket,
    altText: "Innovative ad on bicycle baskets",
    description:
      "Transforms the front basket area into an advertising hotspot, perfect for local businesses and targeted campaigns.",
    learnMoreLink: "/ad-type/basket-ads",
  },
  {
    image: BicycleFrame2,
    altText: "Striking ad on bicycle frame",
    description:
      "Showcases large-scale ads on the bike frame, providing excellent visibility in urban environments.",
    learnMoreLink: "/ad-type/frame-ads",
  },
  {
    image: WheelRim3,
    altText: "Dynamic ad on bicycle wheel rim cover",
    description:
      "Highlights your ad on the move with innovative designs on wheel rim covers, ensuring constant brand exposure.",
    learnMoreLink: "/ad-type/wheel-rim-ads",
  },
  {
    image: CargoBicycle,
    altText: "Effective advertising on cargo bicycles",
    description:
      "Leverages the large cargo space of cargo bicycles for substantial, impactful ads, suitable for wide-ranging promotions.",
    learnMoreLink: "/ad-type/cargo-bike-ads",
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <Heading2
          text="Our Ad Portfolio"
          color="dark"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adPortfolio.map((item, index) => (
            <Link key={index} href={item.learnMoreLink}>
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                  <div className="relative block bg-white transform transition duration-500 hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.altText}
                      layout="responsive"
                      width={500}
                      height={300}
                      quality={100}
                      className="duration-700 ease-in-out group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      <div className="text-center text-white p-4">
                        <p className="text-lg font-semibold">{item.altText}</p>
                        <p className="hidden group-hover:block mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
