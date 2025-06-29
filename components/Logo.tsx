import Link from "next/link";
import Image from "next/image";
import React from "react";
import LogoIcon from "@/public/images/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={LogoIcon}
        alt="logo"
        width={194}
        height={24}
        className="h-[40px] w-auto"
      />
    </Link>
  );
};

export default Logo;
