import React, { useEffect, useRef, useState } from "react";
import AdFormat from "./AdFormat";

import BicycleFrameAdImage from "../../../public/images/brand/ad-placement-options/bicycle-frame-ads.png";
import BicycleInFramesAdImage from "../../../public/images/brand/ad-placement-options/bicycle-in-frame-ads-II.png";
import BicycleBasketAdImage from "../../../public/images/brand/ad-placement-options/basket-ad-placement.png";
import BicycleWheelRimAdImage from "../../../public/images/brand/ad-placement-options/ads-on-wheel-rim-covers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/app/components/IconButton";

const adFormats = [
  {
    id: "frame-ads",
    image: BicycleFrameAdImage,
    alt: "Bicycle Frame Ad",
    title: "Bicycle Frame Ads",
    description:
      "Ads placed directly on the frames of bicycles. Excellent for brand recognition and conveying brand identity and slogans.",
    reach: "High visibility in urban areas and crowded spaces.",
    demographics:
      "Appeals to a diverse audience using bicycles for commuting, fitness, or leisure.",
  },
  {
    image: BicycleInFramesAdImage,
    alt: "Between Frames Ad",
    title: "Between Frames Ads",
    description:
      "Ads placed between the top, head, seat, and down tube bicycle frames. Ideal for promotions and short messages.",
    reach: "Captures attention in bike parking areas and at events.",
    demographics: "Targets cyclists in urban and recreational settings.",
  },
  {
    image: BicycleBasketAdImage,
    alt: "Bicycle Basket Ad",
    title: "Bicycle Basket Ads",
    description:
      "Ads placed around the bicycle basket. Well-suited for localized promotions and product advertising.",
    reach: "High visibility in areas with high pedestrian traffic.",
    demographics:
      "Appeals to commuters, shoppers, and individuals using bicycles for errands.",
  },
  {
    id: "wheel-rim-ads",
    image: BicycleWheelRimAdImage,
    alt: "Wheel Rim Cover Ad",
    title: "Wheel Rim Cover Ads",
    description:
      "Ads attached to the rim of bicycle wheels. Creates a visually dynamic effect, ideal for event promotions, sponsorships, and limited-time offers.",
    reach:
      "Dynamic visibility while in motion; effective at events and group rides.",
    demographics:
      "Targets cycling enthusiasts, event participants, and group riders.",
  },
];

const AdPlacementOptions = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = direction === "left" ? -200 : 200;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => {
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 via-indigo-500 to-[#ff4f00]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-5xl lg:text-6xl font-extrabold text-white mb-16">
          Ad Placement Options
        </h2>

        <div className="relative flex items-center justify-center">
          {showLeftArrow && (
            <IconButton
              icon={
                <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
              }
              color="indigo"
              className="absolute -left-16 z-10 ml-4 lg:ml-8"
              onClick={() => scrollCarousel("left")}
            />
          )}

          <div
            ref={carouselRef}
            onScroll={checkScrollPosition}
            className="carousel carousel-end flex space-x-4 p-4 rounded-box"
          >
            {adFormats.map((format, index) => (
              <AdFormat key={index} {...format} />
            ))}
          </div>

          {showRightArrow && (
            <IconButton
              icon={
                <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
              }
              color="indigo"
              className="absolute -right-16 z-10 mr-4 lg:mr-8"
              onClick={() => scrollCarousel("right")}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AdPlacementOptions;
