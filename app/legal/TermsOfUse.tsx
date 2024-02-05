import React from "react";
import Link from "next/link";

const TermsOfUse = () => {
  const sections = [
    {
      title: "Terms of Use for OutFront.nl",
      id: "terms-of-use",
      content:
        "These Terms of Use govern your access to and use of OutFront.nl. By accessing or using OutFront.nl, you agree to abide by these terms. Please read them carefully.",
    },
    {
      title: "Account Registration",
      id: "account-registration",
      content:
        "You may need to register an account to access some features of OutFront.nl. By creating an account, you agree to provide accurate information and to keep this information updated. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.",
    },
    {
      title: "Acceptable Use Policy",
      id: "acceptable-use-policy",
      content:
        "You agree not to use OutFront.nl for any purpose that is unlawful or prohibited by these terms. You may not use OutFront.nl in any manner that could damage, disable, overburden, or impair the website, or interfere with any other party's use and enjoyment of the website.",
    },
    {
      title: "User Obligations",
      id: "user-obligations",
      content:
        "You are responsible for your use of OutFront.nl and for any content you post. You agree that any content you post will comply with our content guidelines and will not infringe upon the rights of any third party.",
    },
    {
      title: "Limitations of Liability",
      id: "limitations-of-liability",
      content:
        "OutFront.nl and its affiliates will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Terms of Use for OutFront.nl
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            These Terms of Use govern your access to and use of OutFront.nl. By
            accessing or using OutFront.nl, you agree to abide by these terms.
            Please read them carefully.
          </p>

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
              We reserve the right to modify these Terms of Use at any time.
              Your continued use of OutFront.nl after any such changes indicates
              your acceptance of the new terms.
            </p>

            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about these Terms of Use,
              please contact us at{" "}
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

export default TermsOfUse;
