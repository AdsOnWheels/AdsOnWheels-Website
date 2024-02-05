import Link from "next/link";

const Legal = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Legal Information
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            Terms of Use
          </h2>
          <p className="mb-3 font-normal text-gray-700">
            Read our terms of use to understand the rules and regulations
            governing the use of our services.
          </p>
          <Link
            href="/legal/terms-of-use"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read More
          </Link>
        </div>

        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            Privacy Policy
          </h2>
          <p className="mb-3 font-normal text-gray-700">
            Understand how we collect, use, and protect your personal
            information in accordance with GDPR.
          </p>
          <Link
            href="/legal/privacy-policy"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read More
          </Link>
        </div>

        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            Cookie Policy
          </h2>
          <p className="mb-3 font-normal text-gray-700">
            Learn about the cookies we use to enhance your experience on our
            website.
          </p>
          <Link
            href="/legal/cookie-policy"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read More
          </Link>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Legal;
