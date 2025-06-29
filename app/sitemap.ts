import { APP_URL } from "@/misc/routes";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_URL,
      lastModified: "2025-02-06",
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: `${APP_URL}/about`,
      lastModified: "2025-02-06",
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${APP_URL}/contact`,
      lastModified: "2025-02-06",
      changeFrequency: "never",
      priority: 0.7,
    },
    {
      url: `${APP_URL}/faq`,
      lastModified: "2025-02-06",
      changeFrequency: "never",
      priority: 0.7,
    },
    {
      url: `${APP_URL}/privacy`,
      lastModified: "2025-02-06",
      changeFrequency: "never",
      priority: 0.6,
    },
    {
      url: `${APP_URL}/terms`,
      lastModified: "2025-02-06",
      changeFrequency: "never",
      priority: 0.5,
    },
  ];
}
