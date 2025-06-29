import Link from "next/link";
import { APP_URL } from "@/misc/routes";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-primary flex flex-col md:flex-row items-center justify-between p-10 gap-10 text-white">
      <h2 className="text-center">
        &copy; 2024 Height Comparison Chart | All Rights Reserved
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
        {footerLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "Privacy Policy",
    href: `${APP_URL}/privacy`,
  },
  {
    title: "Terms",
    href: `${APP_URL}/terms`,
  },
  {
    title: "FAQ",
    href: `${APP_URL}/faq`,
  },
  {
    title: "Sitemap",
    href: `${APP_URL}/sitemap.xml`,
  },
];
