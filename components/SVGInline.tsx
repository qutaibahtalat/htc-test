import { cn } from "@/misc/utils";
import React, { useEffect, useRef, useState } from "react";

const SvgInline = ({ url, fill }: { url: string; fill: string }) => {
  const [svg, setSvg] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/proxy-svg?url=${encodeURIComponent(url)}`)
      .then((res) => res.text())
      .then((svgText) => {
        setSvg(svgText);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading SVG:", error);
        setIsErrored(true);
      });
  }, [url]);

  useEffect(() => {
    if (svg && ref.current) {
      // Parse the SVG text into a DOM element
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svg, "image/svg+xml");
      const svgElement = svgDoc.querySelector("svg");

      if (svgElement) {
        // Apply the fill color to all paths within the SVG
        svgElement.querySelectorAll("path").forEach((path) => {
          path.style.setProperty("fill", fill);
        });

        // Append the modified SVG to the div container
        ref.current.innerHTML = "";
        ref.current.appendChild(svgElement);
      }
    }
  }, [svg, fill]);

  return (
    <div
      ref={ref}
      className={`h-full [&_svg]:h-full [&_svg]:w-auto svgInline--${
        isLoaded ? "loaded" : "loading"
      } ${cn(isErrored ? "svgInline--errored" : "")}`}
    />
  );
};

export default SvgInline;
