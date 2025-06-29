"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import { BsPinterest } from "react-icons/bs";
import { routes } from "@/misc/routes";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between p-3 rounded-2xl bg-white shadow-sm border border-gray-200">
      <Logo />
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-50 md:hidden" />
      )}
      <nav
        className={`flex flex-col md:flex-row items-center gap-6 absolute md:relative top-0 md:!left-0 w-[90vw] md:w-auto h-full bg-white text-black z-50 shadow-2xl md:shadow-none md:z-0 p-10 md:p-0 transition-all duration-300 ${
          isMobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        {Object.values(routes).map((route, index) => (
          <Link
            key={index}
            href={route.path}
            target={route?.target || "_self"}
            className="text-base font-medium"
          >
            {route.title}
          </Link>
        ))}
        <IoCloseOutline
          size={24}
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-5 md:hidden"
        />
      </nav>
      <Link
        href="https://www.pinterest.com/heightcomparison/"
        target="_blank"
        className="font-medium text-[#c92228] text-sm md:text-lg bg-[#c92228]/10 rounded-xl px-2 md:px-4 py-3 flex items-center gap-2"
      >
        <BsPinterest />
        Join Pinterest
      </Link>
      <IoMenuOutline
        size={24}
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden"
      />
    </header>
  );
};

export default Header;
