import React from "react";
import Heading1 from "../layout/Heading1";
import Heading2 from "../layout/Heading2";

const Blog = () => {
  return (
    <section>
      <Heading1 text="Explore Our Blog" className="text-4xl font-bold" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-4 rounded-md">
          <Heading2
            text="The Impact of Bicycle Advertising"
            className="text-xl font-semibold mb-2"
          />
          <p className="text-gray-700">
            Learn about the positive effects of bicycle advertising on brand
            visibility and customer engagement.
          </p>
        </div>
        <div className="border p-4 rounded-md">
          <Heading2
            text="Tips for Effective Ad Placement"
            className="text-xl font-semibold mb-2"
          />
          <p className="text-gray-700">
            Discover strategies for maximizing the effectiveness of your bicycle
            ad placements.
          </p>
        </div>
        {/* Additional blog posts can be added here */}
      </div>
    </section>
  );
};

export default Blog;
