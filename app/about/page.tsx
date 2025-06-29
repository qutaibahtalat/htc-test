import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Height Comparison Chart",
  description: "Learn more about HeightComparisonChart.com",
};

function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          About Us
        </h1>

        <p className="text-gray-700 mb-6">
          Welcome to{" "}
          <span className="font-semibold">HeightComparisonChart.com</span>, the
          ultimate online destination for comparing the heights of people,
          animals, objects, and characters from all walks of life. Whether
          you&apos;re curious about how a famous celebrity measures up to a
          Pokémon or want to see how the tallest buildings in the world compare
          to everyday objects, you&apos;ve come to the right place.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Our mission is to provide a fun, informative, and easy-to-use tool
            that allows visitors to visually compare the height of a wide
            variety of entities. From the tallest skyscrapers to beloved
            fictional characters, our platform brings these comparisons to life
            with engaging, accurate visualizations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li className="mb-4">
              <span className="font-medium">
                Interactive Height Comparison Tool:
              </span>{" "}
              Use our tool to compare the heights of individuals (male, female,
              and child), pets, buildings, objects, Pokémon, fictional
              characters, and famous celebrities from around the world.
            </li>
            <li className="mb-4">
              <span className="font-medium">Visual Accuracy:</span> Our
              comparison charts are designed to give you a clear and accurate
              visual representation, making it easy to see how one entity
              measures up against another.
            </li>
            <li>
              <span className="font-medium">Diverse Categories:</span> Whether
              you&apos;re interested in comparing real-world heights or
              imagining how your favorite character stacks up to iconic figures,
              our categories cover a broad range of interests.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600">
            At <span className="font-semibold">HeightComparisonChart.com</span>,
            we believe that exploring the world through the lens of height can
            be a fun, educational, and inspiring experience. We strive to make
            comparisons accessible, entertaining, and visually appealing,
            sparking curiosity and helping users gain a new perspective on the
            scale of the world around us.
          </p>
          <p className="text-gray-600 mt-4">
            We’re constantly updating our content and adding new comparisons, so
            there’s always something fresh to discover. Our goal is to be your
            go-to source for height comparisons, whether you’re a casual browser
            or a dedicated fan of one of our many categories.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Thank You
          </h2>
          <p className="text-gray-600">
            Thank you for visiting{" "}
            <span className="font-semibold">HeightComparisonChart.com</span>. We
            hope you enjoy exploring and comparing heights with us!
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
