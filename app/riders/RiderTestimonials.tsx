import React from "react";

import Heading2 from "../layout/Heading2";
import Image1 from "../../public/images/brand/dummy_600x400.png";
import TestimonialSlider from "../components/TestimonialSlider";

const RiderTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Smith",
      image: Image1,
      quote:
        "Joining OutFront transformed my daily rides into a profitable journey. Best decision ever!",
    },
    {
      id: 2,
      name: "Mia Johnson",
      image: Image1,
      quote:
        "I love the flexibility OutFront offers. It's a fun way to earn extra cash!",
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      image: Image1,
      quote:
        "OutFront helped me connect with my community while advertising. It's a win-win!",
    },
    {
      id: 4,
      name: "Emily Chen",
      image: Image1,
      quote:
        "The extra income from OutFront has been fantastic for supplementing my full-time job!",
    },
    {
      id: 5,
      name: "David Kim",
      image: Image1,
      quote:
        "As a student, OutFront has been a great way to earn while exploring the city.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-gray-800 to-indigo-900 text-white"
    >
      <div className="container mx-auto px-4">
        <Heading2
          text="Testimonials"
          color="white"
          align="center"
          className="mb-12"
        />

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default RiderTestimonials;
