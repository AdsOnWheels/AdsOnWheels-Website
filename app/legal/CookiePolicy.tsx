import React from "react";
import Link from "next/link";

const CookiePolicy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen pt-12 pb-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Cookie Policy for OutFront.nl
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            This Cookie Policy explains what cookies are, how we use them on
            OutFront.nl, the types of cookies we use, i.e., the information we
            collect using cookies, how that information is used, and how to
            control the cookie preferences.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
            What are cookies?
          </h2>
          <p className="text-gray-600 mb-6">
            Cookies are small text files that are used to store small pieces of
            information. They are stored on your device when the website is
            loaded on your browser. These cookies help us make the website
            function properly, make it more secure, provide better user
            experience, and understand how the website performs and to analyze
            what works and where it needs improvement.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
            How do we use cookies?
          </h2>
          <p className="text-gray-600 mb-6">
            As most of the online services, our website uses first-party and
            third-party cookies for several purposes. First-party cookies are
            mostly necessary for the website to function the right way, and they
            do not collect any of your personally identifiable data.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
            What types of cookies do we use?
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Necessary:</strong> Some cookies are essential for you to
              be able to experience the full functionality of our site. They
              allow us to maintain user sessions and prevent any security
              threats. They do not collect or store any personal information.
            </li>
            <li>
              <strong>Statistics:</strong> These cookies store information like
              the number of visitors to the website, the number of unique
              visitors, which pages of the website have been visited, the source
              of the visit, etc. This data helps us understand and analyze how
              well the website performs and where it needs improvement.
            </li>
            <li>
              <strong>Marketing:</strong> Our website displays advertisements.
              These cookies are used to personalize the advertisements that we
              show to you so that they are meaningful to you. These cookies also
              help us keep track of the efficiency of these ad campaigns.
            </li>
            <li>
              <strong>Functional:</strong> These are the cookies that help
              certain non-essential functionalities on our website. These
              functionalities include embedding content like videos or sharing
              content of the website on social media platforms.
            </li>
            <li>
              <strong>Preferences:</strong> These cookies help us store your
              settings and browsing preferences like language preferences so
              that you have a better and efficient experience on future visits
              to the website.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
            How can I control the cookie preferences?
          </h2>
          <p className="text-gray-600 mb-6">
            You can manage your cookies preferences by adjusting the settings on
            your browser. Thus, you can accept or reject cookies. Be aware that
            disabling cookies might affect the functionality of this and many
            other websites that you visit.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
            Consent
          </h2>
          <p className="text-gray-600 mb-6">
            By using our website, you hereby consent to our Cookie Policy and
            agree to its terms.
          </p>

          <p className="text-gray-700 mb-6">
            For more information on how to manage your cookie preferences, or if
            you have any further questions regarding our Cookie Policy, please
            contact us at{" "}
            <Link href="mailto:info@outfront.nl" className="underline">
              info@outfront.nl
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
