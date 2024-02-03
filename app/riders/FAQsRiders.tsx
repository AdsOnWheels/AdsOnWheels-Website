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

const FAQsRiders = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How are Bicycle Ads Placed?",
      answer:
        "We carefully place ads on specific areas of your bicycle, such as the frame or rear wheel, ensuring that they are visible without hindering your riding experience.",
    },
    {
      question: "What Type of Brands Will My Bicycle Carry?",
      answer:
        "Your bicycle will carry ads from a diverse range of brands, from local businesses to national companies, all looking to increase their visibility in urban areas.",
    },
    {
      question: "Can I Choose the Ads Displayed on My Bicycle?",
      answer:
        "Yes, we respect our riders' preferences. You'll have the opportunity to select which ads you're comfortable displaying from a range of options that align with your values.",
    },
    {
      question: "How Much Can I Earn with Bicycle Ad Placements?",
      answer:
        "Earnings are based on factors like the size of the ad, the duration of the campaign, and your cycling frequency and routes. We offer competitive rates to maximize your benefits.",
    },
    {
      question: "What If I Have Concerns About the Ad Content?",
      answer:
        "We take rider concerns seriously. If you have any issues with the content of the ads on your bicycle, our team is readily available to address and resolve these concerns.",
    },
    {
      question: "Are There Any Restrictions on Where I Can Advertise?",
      answer:
        "There are no specific restrictions; however, riding in high-visibility areas can increase the effectiveness of the ads. We encourage riders to follow all local cycling regulations.",
    },
    {
      question: "What Happens in Case of Ad Damage or Vandalism?",
      answer:
        "If the ads on your bicycle get damaged or vandalized, contact us immediately. We'll arrange for repair or replacement at no cost to you.",
    },
    {
      question: "How Long Does an Ad Campaign Typically Last?",
      answer:
        "Ad campaigns can vary in length, typically ranging from a few weeks to several months, depending on the advertiser's needs and campaign goals.",
    },
    {
      question: "Is There a Minimum Commitment Period?",
      answer:
        "We offer flexible arrangements. You can participate in our ad campaigns for as long or as short as you wish, with no fixed minimum commitment period.",
    },
  ];

  return (
    <section
      id="faqs-riders"
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
    >
      <div className="text-center max-w-2xl mx-auto">
        <Heading2
          text="FAQs for Riders"
          color="dark"
          align="center"
          className="mb-8"
        />

        <p className="text-lg mb-8">
          Everything you need to know about AdsOnWheels Bicycle Ads Placement.
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

export default FAQsRiders;
