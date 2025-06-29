import React from "react";
import type { Metadata } from "next";
import { EMAIL } from "@/misc/data";

export const metadata: Metadata = {
  title: "Terms and Conditions - Height Comparison Chart",
  description: "Terms and conditions for HeightComparisonChart.com",
};

function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          Terms and Conditions
        </h1>

        <p className="text-gray-600 mb-4">
          Effective Date: <span className="font-medium">January 15, 2025</span>
        </p>

        <p className="text-gray-700 mb-6">
          Welcome to{" "}
          <span className="font-semibold">HeightComparisonChart.com</span>! By
          accessing or using our website, including the height comparison tool
          and all related services, you agree to comply with and be bound by the
          following Terms and Conditions. Please read these Terms carefully
          before using our website.
        </p>

        <p className="text-gray-700 mb-6">
          If you do not agree with these Terms and Conditions, please refrain
          from using the website.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing or using HeightComparisonChart.com, you agree to be
            bound by these Terms and Conditions and our Privacy Policy. If you
            are using the website on behalf of an organization or entity, you
            represent that you have the authority to bind that organization to
            these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            2. Use of Website and Services
          </h2>
          <p className="text-gray-600">
            You agree to use the website and its services only for lawful
            purposes and in accordance with these Terms and Conditions. You
            agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>
              Use the website in any way that violates any applicable local,
              state, or international law.
            </li>
            <li>
              Engage in any activity that could damage, disable, or overburden
              the website or interfere with any other user’s access to the site.
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the website or
              related systems or networks.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            3. Content Ownership
          </h2>
          <p className="text-gray-600">
            All content provided on HeightComparisonChart.com, including but not
            limited to text, graphics, images, logos, videos, and comparisons,
            is owned by HeightComparisonChart.com or its licensors and is
            protected by copyright and other intellectual property laws. You may
            not copy, distribute, modify, or use any of the content without our
            prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            4. User-Generated Content
          </h2>
          <p className="text-gray-600">
            If you submit any content to our website, such as comments,
            suggestions, or feedback, you grant us a non-exclusive,
            royalty-free, worldwide license to use, modify, and display that
            content on the site. You represent and warrant that you have the
            right to share such content and that it does not infringe on the
            rights of any third party.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            5. Accuracy of Information
          </h2>
          <p className="text-gray-600">
            While we strive to provide accurate and up-to-date information, we
            make no guarantees regarding the accuracy, completeness, or
            reliability of any content on HeightComparisonChart.com. The height
            comparisons and data provided are intended for general informational
            purposes and should not be relied upon as precise measurements. We
            encourage users to verify the information independently where
            necessary.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            6. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our website may contain links to third-party websites or services
            that are not operated by us. We do not control, endorse, or assume
            responsibility for the content or practices of any third-party
            sites. If you access a third-party site from our website, you do so
            at your own risk and are subject to the terms and conditions of that
            third-party site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            To the fullest extent permitted by law, HeightComparisonChart.com
            and its affiliates, officers, employees, and agents shall not be
            liable for any direct, indirect, incidental, special, consequential,
            or punitive damages arising from your use of the website or any
            content or services provided on the website. This includes, but is
            not limited to, any errors, omissions, interruptions, or technical
            issues related to the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            8. Indemnification
          </h2>
          <p className="text-gray-600">
            You agree to indemnify, defend, and hold harmless
            HeightComparisonChart.com, its affiliates, officers, employees, and
            agents from any claims, liabilities, damages, losses, and expenses
            (including attorney’s fees) arising from your violation of these
            Terms and Conditions or your use of the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            9. Termination
          </h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate your access to the
            website at our sole discretion, without notice, if we believe you
            have violated any of these Terms and Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            10. Changes to Terms and Conditions
          </h2>
          <p className="text-gray-600">
            We may update or modify these Terms and Conditions at any time. Any
            changes will be posted on this page with the updated effective date.
            By continuing to use the website after any changes are made, you
            agree to be bound by the revised Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            11. Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which
            HeightComparisonChart.com operates, without regard to its conflict
            of law principles.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            12. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about these Terms and Conditions, please
            contact us at:
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

export default TermsAndConditions;
