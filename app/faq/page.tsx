import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Height Comparison Chart",
  description: "Frequently asked questions about HeightComparisonChart.com",
};

function FAQPage() {
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto  p-6 rounded-lg ">
        <h1 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. How do I use the height comparison tool?
            </h2>
            <p className="text-gray-700">
              To use the height comparison tool, simply select the categories or
              entities you&apos;d like to compare, such as people, animals,
              buildings, or fictional characters. Enter the required details,
              and the tool will generate a visual comparison, showing how each
              entity measures up in height.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Is the height comparison data accurate?
            </h2>
            <p className="text-gray-700">
              We strive to provide accurate and reliable height data for each
              entity. However, please note that the height information provided
              is for general informational purposes and may not always be 100%
              precise. For more accurate measurements, we encourage independent
              verification.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Can I compare any characters or objects not listed on the
              website?
            </h2>
            <p className="text-gray-700">
              Yes, we have a predefined list of categories and entities, but we
              are continuously adding new comparisons. If you want to compare
              with something other than what we have on this website, you can
              locate the &quot;Add Image&quot; option in the navbar and upload
              the image of the element to compare.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Is there a cost to use the height comparison tool?
            </h2>
            <p className="text-gray-700">
              No, our height comparison tool is completely free to use. We
              believe in providing access to fun and educational content without
              any cost to our users.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Do you collect any personal information when I use the website?
            </h2>
            <p className="text-gray-700">
              We collect minimal personal information only if you choose to
              interact with certain features, such as contacting us or
              subscribing to our newsletter. For more details on how we handle
              your data, please refer to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
