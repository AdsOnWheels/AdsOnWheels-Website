import React from "react";
import Title from "../layout/Title";
import Subtitle from "../layout/Subtitle";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I advertise on bicycles?",
      answer:
        "Businesses can easily advertise on bicycles through our platform. Sign up, choose your ad placement options, and start reaching your audience.",
    },
    {
      question: "How do I become a participating driver?",
      answer:
        "Drivers can join our ad placement program by signing up, selecting their preferred ad campaigns, and earning rewards for each successful placement.",
    },
    // Add more FAQs as needed
  ];

  return (
    <section>
      <Title title="Frequently Asked Questions" />
      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <Subtitle subTitle={faq.question} />
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
