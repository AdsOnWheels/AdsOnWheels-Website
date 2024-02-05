import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      id: "information-we-collect",
      content:
        "We collect information in two ways: information you provide to us and information automatically collected through your use of OutFront.nl, such as cookies and similar technologies.",
    },
    {
      title: "How We Use Information",
      id: "how-we-use-information",
      content:
        "We use the information we collect to operate and improve our website, to provide customer service, and to make OutFront.nl available to you. We may also use the information to communicate with you about promotions, updates, and other information related to OutFront.nl.",
    },
    {
      title: "User Consent",
      id: "user-consent",
      content:
        "By using OutFront.nl, you consent to our collection and use of personal information as outlined in this Privacy Policy. You have the right to withdraw your consent at any time, but this will not affect the lawfulness of processing based on consent before its withdrawal.",
    },
    {
      title: "Data Protection",
      id: "data-protection",
      content:
        "We take reasonable measures to protect against the unauthorized access, use, alteration, or destruction of personal information. We adhere to industry-standard practices and take all necessary steps to secure your data.",
    },
    {
      title: "User Rights",
      id: "user-rights",
      content:
        "Under GDPR, you have the right to access, correct, or delete your personal data stored by OutFront.nl. You also have the right to object to or restrict certain processing activities and the right to data portability.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen pt-12 pb-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Privacy Policy for OutFront.nl
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Your privacy is critically important to us. At OutFront.nl, we have
            a few fundamental principles:
          </p>
          <ul className="list-disc pl-8 mb-8 space-y-2 text-gray-600">
            <li>
              We only collect personal information that is necessary for the
              efficient operation of our website.
            </li>
            <li>
              We don’t share your personal information except to comply with the
              law, develop our products, or protect our rights.
            </li>
            <li>
              We process personal information on the basis of consent and as
              necessary for the provision of our services.
            </li>
          </ul>

          <div className="space-y-8">
            {/* Sections */}
            {sections.map((section) => (
              <div key={section.id}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {/* Content for each section */}
                  {section.content}
                </p>
              </div>
            ))}

            {/* Contact */}
            <p className="text-gray-600 mb-6">
              This Privacy Policy may be updated from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>

            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <Link href="mailto:info@outfront.nl" className="underline">
                info@outfront.nl
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
