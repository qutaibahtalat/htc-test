import React from "react";
import type { Metadata } from "next";
import { EMAIL } from "@/misc/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - Height Comparison Chart",
  description: "Contact us at HeightComparisonChart.com",
};

function ContactPage() {
  return (
    <div className="max-w-screen-xl flex justify-center items-center h-screen mx-auto px-6 py-12 ">
      <section className="mb-12 p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
          If you have any questions, concerns, suggestions, or feedback, feel
          free to send us a message at
          <Link
            href={`mailto:${EMAIL}`}
            className="text-blue-600 font-medium hover:underline"
          >
            {" " + EMAIL}
          </Link>
        </p>
        {/* <div className="w-full h-full rounded-md overflow-hidden shadow-md">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScXXXXX/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            className="w-full h-[800px] rounded-lg border border-gray-200"
            title="Contact Form"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div> */}
      </section>
    </div>
  );
}

export default ContactPage;
