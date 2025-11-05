import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import FounderImage from "../../assets/Screenshot 2025-11-05 112614.jpg";

export const metadata: Metadata = {
  title: "About Us - Height Comparison Chart",
  description: "Learn more about HeightComparisonChart.com",
};

function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          About HeightComparisonChart.com
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to HeightComparisonChart.com</h2>
          <p className="text-gray-700">
            <span className="font-semibold">HeightComparisonChart.com</span> helps you visually compare heights between people, celebrities, or fictional characters easily, accurately, and interactively.
          </p>
          <p className="text-gray-700 mt-4">This project was built with one clear mission:</p>
          <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2">
            <li>To make height comparison simple, fun, and accurate for everyone from curious fans to professional content creators.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">The Story Behind the Project</h2>
          <p className="text-gray-700">I’m Asfand Ali, a web developer and SEO expert.</p>
          <p className="text-gray-700 mt-2">
            After working in the digital field for several years, I realized that most height comparison tools online were either outdated, inaccurate, or not mobile-friendly.
          </p>
          <p className="text-gray-700 mt-2">
            So, in 2024, I decided to build something better, a tool that combines:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2">
            <li>Accurate height ratios</li>
            <li>Clean, modern design</li>
            <li>Smooth user experience</li>
          </ul>
          <p className="text-gray-700 mt-4">
            And most importantly, a platform that respects user time and data privacy.
          </p>
          <p className="text-gray-700 mt-2">
            What started as a small idea has now grown into a global tool used by thousands of people every month, from movie fans comparing their favorite stars to teachers, designers, and athletes who rely on visual accuracy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">How We’re Different</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>
              <span className="font-medium">Precision:</span> Built with optimized algorithms and real-world scale accuracy.
            </li>
            <li>
              <span className="font-medium">User Experience:</span> Fast loading, mobile-optimized, and free from unnecessary clutter.
            </li>
            <li>
              <span className="font-medium">Transparency:</span> No hidden data collection, no spam ads, and complete user control.
            </li>
            <li>
              <span className="font-medium">Community Feedback:</span> Every feature improvement is based on real user suggestions.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">We constantly test, refine, and update the platform to make sure every comparison feels realistic and enjoyable.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About the Founder</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><span className="font-medium">Name:</span> Asfand Ali</li>
            <li><span className="font-medium">Profession:</span> SEO Expert &amp; Web Developer</li>
            <li><span className="font-medium">Experience:</span> 4+ years in digital marketing, tool development, and user experience optimization.</li>
            <li><span className="font-medium">Vision:</span> To create globally useful, high-quality online tools that combine technology with simplicity.</li>
          </ul>
          <p className="text-gray-700 mt-3">
            You can connect with me here: 
            <a
              href="https://www.linkedin.com/in/asfand-ali-seo-expert-1a0261205/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700 ml-1"
            >
              LinkedIn
            </a>
          </p>
          <div className="mt-4">
            <Image
              src={FounderImage}
              alt="Asfand Ali, Founder of HeightComparisonChart.com"
              className="rounded-md max-w-full h-auto"
              priority
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Promise</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We do not collect unnecessary personal data.</li>
            <li>We do not share or sell user information.</li>
            <li>We believe in transparency, accessibility, and innovation.</li>
            <li>Every visitor matters, and every click helps us improve.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Future Vision</h2>
          <p className="text-gray-700">
            HeightComparisonChart.com is not just a tool, it’s the foundation for something bigger. In the near future, we plan to introduce advanced comparison features, community profiles, and even digital innovation projects connected with this platform’s name.
          </p>
          <p className="text-gray-700 mt-2">Our goal is simple:</p>
          <p className="text-gray-700 mt-1">To make HeightComparisonChart.com the world’s most trusted place for accurate visual comparisons.</p>
        </section>

        <section>
          <p className="text-gray-700">
            Thank you for being part of this journey. Your feedback, trust, and support are what keep this project growing every single day.
          </p>
          <p className="text-gray-700 mt-4">— Asfand Ali</p>
          <p className="text-gray-700">
            Founder &amp; Developer,
            <a
              href="https://heightcomparisonchart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700 ml-1"
            >
              HeightComparisonChart.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
