import React from "react";
import type { Metadata } from "next";
import { EMAIL } from "@/misc/data";

export const metadata: Metadata = {
  title: "Privacy Policy - Height Comparison Chart",
  description: "Privacy policy for HeightComparisonChart.com",
};

function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">
          Effective Date: <span className="font-medium">January 15, 2025</span>
        </p>

        <p className="text-gray-700 mb-6">
          At <span className="font-semibold">HeightComparisonChart.com</span>,
          we value your privacy and are committed to protecting the personal
          information you share with us while using our website. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you visit or use our services.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            1. Information We Collect
          </h2>
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            a. Personal Information
          </h3>
          <p className="text-gray-600 mb-4">
            Personal information refers to any information that can identify you
            personally. We do not require you to provide personal information to
            access our height comparison tools. However, if you decide to create
            an account or contact us, we may collect the following:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>User preferences (such as preferred comparison categories)</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-700 mb-2">
            b. Non-Personal Information
          </h3>
          <p className="text-gray-600">
            We automatically collect non-personal information about your
            interaction with our website. This includes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Device information (e.g., mobile or desktop)</li>
            <li>Pages you visit on our website</li>
            <li>Time and date of visits</li>
            <li>Referring websites or search terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            2. Use of Information
          </h2>
          <p className="text-gray-600">
            We use the information we collect in the following ways:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>
              To personalize your experience with the height comparison tool
            </li>
            <li>To respond to inquiries or support requests</li>
            <li>To improve our website and services</li>
            <li>To analyze website performance and usage patterns</li>
            <li>
              To send you occasional updates, newsletters, or promotional offers
              (only if you have opted in)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600">
            We use cookies and similar tracking technologies (such as Google
            Analytics) to enhance your experience on our site. Cookies help us
            remember your preferences, track your interactions, and collect data
            about how users navigate the site.
          </p>
          <p className="text-gray-600 mt-4">
            You can control cookie settings through your browser. However,
            disabling cookies may affect your ability to use certain features of
            the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-600">
            We use industry-standard security measures to protect your personal
            information. However, no method of data transmission over the
            internet or electronic storage is 100% secure. While we strive to
            protect your data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            5. Sharing of Information
          </h2>
          <p className="text-gray-600">
            We do not share, sell, or rent your personal information to third
            parties for marketing purposes. However, we may share non-personal
            information with third-party analytics providers or partners to help
            improve our services.
          </p>
          <p className="text-gray-600 mt-4">
            We may also disclose information if required by law or to protect
            the rights, property, or safety of HeightComparisonChart.com, its
            users, or the public.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            6. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our website may contain links to external websites or services that
            are not operated by us. We are not responsible for the privacy
            practices or content of these third-party sites. We encourage you to
            review their privacy policies before providing any personal
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            7. Children&apos;s Privacy
          </h2>
          <p className="text-gray-600">
            Our website is not intended for children under the age of 13, and we
            do not knowingly collect personal information from children. If you
            believe that a child has provided us with personal information,
            please contact us, and we will take steps to delete such data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            8. Your Rights and Choices
          </h2>
          <p className="text-gray-600">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Access and update your personal information</li>
            <li>
              Request the deletion of your personal information (subject to
              certain conditions)
            </li>
            <li>
              Opt out of receiving marketing communications from us at any time
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            To exercise these rights, please contact us at{" "}
            <span className="text-blue-600">{EMAIL}</span>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. When we make
            changes, we will post the new policy on this page and update the
            &quot;Effective Date&quot; at the top. We encourage you to review
            this policy periodically to stay informed about how we are
            protecting your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Privacy Policy or
            how your data is handled, please contact us at:
          </p>
          <p className="text-gray-600 mt-4">
            <span className="font-semibold">HeightComparisonChart.com</span>
          </p>
          <p className="text-gray-600">
            Email: <span className="text-blue-600">{EMAIL}</span>
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
