"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Testimonial } from "@/types/types";

interface Props {
  testimonials: Testimonial[];
}

// Assuming the testimonials prop is passed to this component
const TestimonialSlider = ({ testimonials }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          marginTop: "10px",
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="px-4">
          <div className="bg-white text-gray-800 max-w-[745px] h-44 rounded-xl shadow-xl transition duration-500 hover:shadow-2xl flex items-center mx-auto">
            <div className="mx-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-600">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="responsive"
                  width={96}
                  height={96}
                />
              </div>
            </div>
            <div className="my-auto p-4 flex-grow">
              <p className="italic text-md leading-relaxed mb-3 overflow-hidden">
                <span>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-indigo-500 text-3xl mb-1"
                  />
                </span>{" "}
                {testimonial.quote}{" "}
                <span>
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="text-indigo-500 text-3xl mb-1"
                  />
                </span>
              </p>
              <p className="font-semibold text-lg">{testimonial.name}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
