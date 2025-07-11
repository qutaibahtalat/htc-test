import { cn } from "@/misc/utils";
import React, { useEffect, useState } from "react";

/* ------------------------------------------------------------------
 * SvgInline – optimized
 * ------------------------------------------------------------------
 * 1. Caches processed SVG markup in-memory (url+fill key) so we never
 *    refetch for each avatar re-render.
 * 2. Injects SVG via dangerouslySetInnerHTML so React keeps it intact
 *    between renders → no flicker when zoom changes.
 * ------------------------------------------------------------------ */

interface Props {
  url: string;
  fill: string;
}

// Simple in-memory cache ➜ (url|fill) → processed SVG markup
const svgCache = new Map<string, string>();

const SvgInline: React.FC<Props> = ({ url, fill }) => {
  const cacheKey = `${url}|${fill}`;
  const [markup, setMarkup] = useState<string | null>(svgCache.get(cacheKey) || null);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // If cached with desired fill colour, use it
    if (svgCache.has(cacheKey)) {
      setMarkup(svgCache.get(cacheKey)!);
      return;
    }

    // Otherwise fetch & process
    (async () => {
      try {
        const res = await fetch(`/api/proxy-svg?url=${encodeURIComponent(url)}`);
        const original = await res.text();

        // Parse & apply fill
        const parser = new DOMParser();
        const doc = parser.parseFromString(original, "image/svg+xml");
        doc.querySelectorAll("path").forEach((p) => p.setAttribute("fill", fill));
        const processed = doc.documentElement.outerHTML;

        svgCache.set(cacheKey, processed);
        if (!cancelled) setMarkup(processed);
      } catch (err) {
        console.error("SVGInline error:", err);
        if (!cancelled) setIsErrored(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [cacheKey, url, fill]);

  return (
    <div
      className={cn(
        "h-full [&_svg]:h-full [&_svg]:w-auto",
        svgCache.has(cacheKey) ? "svgInline--loaded" : "svgInline--loading",
        isErrored && "svgInline--errored"
      )}
      style={{ willChange: "transform" }}
      // If markup still null, render empty div (spinner could be added)
      dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
    />
  );
};

export default SvgInline;
