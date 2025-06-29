import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "heightcomparisondatabase.site",
      },
    ],
  },
};

export default nextConfig;
