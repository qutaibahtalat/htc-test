"use client";

import { useGlobals } from "@/contexts/GlobalContext";
import { cn } from "@/misc/utils";
import { BiSolidDog } from "react-icons/bi";
import {
  BsBox,
  BsBuilding,
  BsImage,
  BsPersonFillAdd,
  BsPersonRaisedHand,
} from "react-icons/bs";
import { ImTv } from "react-icons/im";
import { MdCatchingPokemon } from "react-icons/md";
import AdsenseUnit from "./google-ads/AdsenseUnit";
import { useState } from "react";
import { RiScrollToBottomLine } from "react-icons/ri";
import { useMediaQuery } from "@uidotdev/usehooks";

const NavBar = ({ className }: { className?: string }) => {
  const { selectedScreen, setSelectedScreen } = useGlobals();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <nav
        className={`relative md:h-full w-full bg-white rounded-2xl shadow-sm p-1 pb-0 md:pb-0 md:space-y-4 border border-gray-200 flex flex-row justify-start items-between z-20 overflow-x-auto min-h-fit overflow-y-hidden ${className}`}
        onScroll={(e) => {
          setIsScrolled(e.currentTarget.scrollLeft > 0);
          console.log("scroll", e.currentTarget.scrollLeft);
        }}
      >
        {screens.map(({ title, icon, hideOnMobile }, index) => (
          <span
            key={index}
            onClick={() => setSelectedScreen(title)}
            className={`flex flex-col justify-center items-center gap-2 pb-2 pt-3 px-6 h-full !mt-0 border-b border-transparent transition-all duration-300 cursor-pointer hover:text-primary hover:border-primary/40 ${cn(
              selectedScreen === title && "!text-primary !border-primary",
              hideOnMobile && "hidden md:flex"
            )}`}
          >
            {icon}
            <span className="text-xs text-center">{title}</span>
          </span>
        ))}
        {!isScrolled && isMobile && (
          <div className="absolute top-0 right-0 h-full w-[50px] bg-gradient-to-l from-primary to-transparent overflow-hidden">
            <div className="-rotate-90 absolute top-1/2 left-1/2 -translate-y-1/2 ">
              <RiScrollToBottomLine
                className="animate-bounce text-white"
                size={30}
              />
            </div>
          </div>
        )}
      </nav>
      <AdsenseUnit
        slot="1419638897"
        format="auto"
        responsive={true}
        className="!hidden lg:block"
      />
    </>
  );
};

export default NavBar;

const screens = [
  { title: "Add Person", icon: <BsPersonFillAdd /> },
  { title: "Celebrities", icon: <BsPersonRaisedHand /> },
  { title: "Fictional", icon: <ImTv /> },
  { title: "Objects", icon: <BsBox /> },
  { title: "Buildings", icon: <BsBuilding /> },
  { title: "Animals", icon: <BiSolidDog /> },
  { title: "Pokemon", icon: <MdCatchingPokemon /> },
  { title: "Add Image", icon: <BsImage />, hideOnMobile: true },
];
