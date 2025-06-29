import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { Suspense } from "react";
import GoogleAdHeadCode from "@/components/google-ads/GoogleAdHeadCode";
// import StickyFooter from "@/components/StickyFooter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Height Comparison Chart - Compare Multiple Heights Visually",
  description:
    "Heightcomparisonchart.com has a straightforward tool for quickly measuring your height compared to your partner, children, and pet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && <GoogleAdHeadCode />}
      </head>
      <body className={`${poppins.variable} antialiased` + " bg-[#F7F8FD]"}>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0">
              <CgSpinner size={50} className="animate-spin" />
            </div>
          }
        >
          <Header />
          <Providers>{children}</Providers>
          <Footer />
          {/* <StickyFooter /> */}
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
