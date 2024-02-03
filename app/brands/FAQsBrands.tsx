import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Heading2 from "../layout/Heading2";

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: Props) => {
  return (
    <div className="border-b border-gray-300 py-4 hover:bg-gray-50 transition duration-300">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="transition transform duration-300 text-gray-800"
          style={{ rotate: isOpen ? "180deg" : "0deg" }}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
      </div>
    </div>
  );
};

const FAQsBrands = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What Are the Benefits of Bicycle Advertising?",
      answer:
        "Bicycle advertising offers high visibility in urban areas, the ability to reach specific demographics, and the flexibility to target local events and hotspots, making it an efficient and cost-effective advertising medium.",
    },
    {
      question: "How Do You Select Bicycles and Riders for Our Campaign?",
      answer:
        "We carefully select bicycles and riders based on campaign requirements, ensuring that your ads are displayed in the most relevant and high-traffic areas to maximize exposure.",
    },
    {
      question: "Can We Track the Performance of Our Bicycle Ads?",
      answer:
        "Yes, we provide performance tracking for your ads, offering insights into visibility, reach, and overall impact. This data helps you understand the effectiveness of your campaign.",
    },
    {
      question: "What Types of Ads Can We Place on Bicycles?",
      answer:
        "We offer various ad formats, including full bike wraps, frame banners, wheel covers, and more. Our team can work with you to create custom solutions tailored to your brand's needs.",
    },
    {
      question: "How Long Does a Typical Ad Campaign Run?",
      answer:
        "Campaign durations vary based on your objectives and budget. We offer flexible options ranging from short-term promotions to long-term brand awareness campaigns.",
    },
    {
      question: "Is Bicycle Advertising Eco-Friendly?",
      answer:
        "Absolutely! Bicycle advertising is an environmentally friendly option, aligning your brand with sustainable practices and appealing to eco-conscious consumers.",
    },
    {
      question: "Can We Choose Specific Areas or Routes for Our Ads?",
      answer:
        "Yes, we offer targeted advertising solutions where you can specify particular areas, routes, or events where you'd like your ads to be seen.",
    },
    {
      question: "What Is the Process for Starting a Campaign?",
      answer:
        "Starting a campaign is simple. Just contact us with your requirements, and our team will guide you through the process, from ad design to deployment and monitoring.",
    },
    {
      question: "How Are the Ads Designed and Installed?",
      answer:
        "Our creative team collaborates with you to design impactful ads. Once approved, we professionally install the ads on selected bicycles, ensuring quality and durability.",
    },
    {
      question: "What Support Do You Provide During the Campaign?",
      answer:
        "We offer comprehensive support throughout your campaign, including regular updates, maintenance of the ads, and any necessary adjustments to ensure maximum campaign effectiveness.",
    },
  ];

  return (
    <section
      id="faqs-brands"
      className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
    >
      <div className="text-center max-w-2xl mx-auto">
        <Heading2
          text="FAQs for Brands"
          color="dark"
          align="center"
          className="mb-8"
        />
        <p className="text-lg mb-8">
          {`Explore how to boost your brand's presence with AdsOnWheels Bicycle Ads.`}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQ === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQsBrands;
