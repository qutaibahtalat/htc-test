"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/misc/utils";
import { useGlobals } from "@/contexts/GlobalContext";
import { cmToFtAndInch } from "@/utils/HeightConversion";
import { Avatar as AvatarType } from "@/misc/interfaces";
import { ItemType } from "@/misc/enums";
import { SCALING_FACTOR } from "@/misc/data";
import SvgInline from "@/components/SVGInline";
import { Reorder, motion } from "framer-motion";
import { BiSolidEdit } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useMediaQuery } from "@uidotdev/usehooks";

const TOTAL_SCALES = 27;
const MAX_COMPRESSION = 1.5;
const MIN_COMPRESSION = 1;
const COMPRESSION_SPRING = { stiffness: 170, damping: 26 };

export default function Board() {

// --- USER-PROVIDED MOBILE COMPONENTS START ---
const TOTAL_SCALES = 27;

const ScalesAndAvatars = () => {
  const { avatars, setAvatars } = useGlobals();
  const [scalingFactorByWidth, setScalingFactorByWidth] = useState(1);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const tallestAvatarHeight = Math.max(
    ...avatars.map((avatar) => avatar.height),
    180
  );
  const height = tallestAvatarHeight * SCALING_FACTOR * scalingFactorByWidth;
  const delta = height / TOTAL_SCALES;

  const boardRef = useRef<HTMLDivElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);

  // Get total width of all avatars (any type) and board
  const getWidths = () => {
    const avatarNodes = avatarsRef.current?.firstChild?.childNodes || [];
    const avatarsWidthLocal = Array.from(avatarNodes).reduce((acc, child) => {
      const width = (child as HTMLElement).offsetWidth;
      return acc + width;
    }, 0);
    const boardWidthLocal = boardRef.current?.offsetWidth || 0;
    return { avatarsWidthLocal, boardWidthLocal };
  };

  useEffect(() => {
    // Stable compression: only run when avatars change, not during drag
    if (boardRef.current === null || avatarsRef.current === null || avatars.length < 2) return;
    
    const { avatarsWidthLocal, boardWidthLocal } = getWidths();
    const requiredRatio = avatarsWidthLocal / (boardWidthLocal - 20);
    
    if (requiredRatio > 1) {
      // Set compression immediately based on required ratio
      setScalingFactorByWidth(Math.min(5, requiredRatio));
    } else if (scalingFactorByWidth > 1) {
      // Decompress if overcompressed
      setScalingFactorByWidth(1);
    }
  }, [avatars]);

  return (
    <>
      <div
        ref={boardRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-lg overflow-hidden"
      >
        <div className="w-full flex justify-between items-center font-bold">
          <span>cm</span>
          <h1>Height Comparison Chart</h1>
          <span>ft</span>
        </div>
        {Array.from({ length: TOTAL_SCALES - 1 }).map((_, index) => {
          const cm = delta * (TOTAL_SCALES - index - 3);
          const ftIn = cmToFtAndInch(cm);
          return (
            <div
              key={index}
              className={`w-full h-[calc(100%/27)] border-b flex justify-between items-center ${cn(
                cm.toFixed(0) === "0" ? "border-primary" : "border-gray-200"
              )}`}
            >
              <span className="text-xs">{cm.toFixed(0)}</span>
              <span className="text-xs">{`${ftIn.ft}' ${ftIn.in}"`}</span>
            </div>
          );
        })}
      </div>
      <div ref={avatarsRef}>
        <Reorder.Group
          axis="x"
          as="div"
          values={avatars}
          onReorder={setAvatars}
          className="avatarsContainer absolute left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-100px)] overflow-x-scroll h-[calc(100%-40px)] flex items-end justify-center gap-1 z-[20] empty:hidden bottom-0 pb-[18px]"
        >
          {avatars.map((avatar) => (
            <Avatar key={avatar.id} avatar={avatar} boardHeight={height} />
          ))}
        </Reorder.Group>
      </div>
    </>
  );
};

const Avatar = ({
  avatar,
  boardHeight,
}: {
  avatar: AvatarType;
  boardHeight: number;
}) => {
  const ftIn = cmToFtAndInch(avatar.height);
  const isMobile = useMediaQuery("(max-width: 768px)");
  // All avatars follow the same chart scale on mobile, regardless of height
  const height =
    (avatar.height / (boardHeight - boardHeight / TOTAL_SCALES - 24)) *
    (107.5 + SCALING_FACTOR);
  const { avatars, removeAvatar, setSelectedAvatar, setSelectedScreen } =
    useGlobals();
  return (
    <Reorder.Item
      as="div"
      value={avatar}
      className="relative min-w-fit order-none touch-pan-y"
      style={{
        height: `${height}%`,
        ...(isMobile && { translateY: "none!important" }),
      }}
    >
      <div
        className={`edit-avatar absolute left-0 w-full flex-col items-center text-[10px] flex ${
          avatar.weight ? "-top-[92px]" : "-top-[78px]"
        }`}
      >
        <div className="border border-gray-200 bg-white rounded-md flex items-center">
          {avatar.type === ItemType.PERSON && (
            <BiSolidEdit
              size={30}
              className="cursor-pointer p-2 border-r border-gray-200"
              onClick={() => {
                setSelectedAvatar(avatar.id);
                setSelectedScreen("Edit Persons");
              }}
            />
          )}
          <IoIosCloseCircleOutline
            size={30}
            className="cursor-pointer p-2"
            onClick={() => {
              removeAvatar(avatar.id);
              if (avatars.length === 0) {
                setSelectedScreen("Add Person");
              }
            }}
          />
        </div>

        <div className="text-[10px] whitespace-nowrap font-semibold truncate">
          {avatar.name}
        </div>
        <div className="text-[10px] whitespace-nowrap truncate">
          {Math.round(avatar.height * 100) / 100} cm
        </div>
        {avatar.weight ? (
          <div className="text-[10px] whitespace-nowrap truncate">
            {avatar.weight} kg
          </div>
        ) : null}
        <div className="text-[10px] whitespace-nowrap">{`${ftIn.ft}ft ${ftIn.in}in`}</div>
        <hr className="w-full border-gray-500" />
      </div>
      {avatar.type === "person" ? (
        <SvgInline url={avatar.avatar} fill={avatar.color} />
      ) : (
        <img
          src={avatar.avatar}
          alt={avatar.name}
          width={200}
          height={400}
          style={{ fill: avatar.color || "#000" }}
          className="h-full w-fit min-w-fit"
          draggable={false}
        />
      )}
    </Reorder.Item>
  );
};
// --- USER-PROVIDED MOBILE COMPONENTS END ---

  const { avatars, setAvatars } = useGlobals();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const chartRef = useRef<HTMLDivElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);
  const [compression, setCompression] = useState(1);

  const tallest = Math.max(...avatars.map((a) => a.height), 180);
  const boardHeight = tallest * SCALING_FACTOR * compression;
  const rowHeight = boardHeight / TOTAL_SCALES;

  useEffect(() => {
    if (!isMobile || !chartRef.current || !avatarsRef.current) return;

    let animationId: number;
    const checkOverflow = () => {
      const row = avatarsRef.current?.firstChild as HTMLElement;
      const chart = chartRef.current!;
      if (!row || !chart) return;

      const totalWidth = Array.from(row.children).reduce(
        (acc, el) => acc + (el as HTMLElement).offsetWidth,
        0
      );

      const available = chart.offsetWidth - 160;
      const fits = totalWidth < available;

      let updated = false;

      if (!fits && compression < MAX_COMPRESSION) {
        setCompression(Math.min(MAX_COMPRESSION, compression + 0.005));
        updated = true;
      } else if (fits && compression > MIN_COMPRESSION) {
        setCompression(Math.max(MIN_COMPRESSION, compression - 0.005));
        updated = true;
      }

      if (updated) animationId = requestAnimationFrame(checkOverflow);
    };

    animationId = requestAnimationFrame(checkOverflow);
    return () => cancelAnimationFrame(animationId);
  }, [avatars.length, isMobile, compression]);

  return (
    <div className="relative w-full h-full">
      <HeightChart ref={chartRef} rowHeight={rowHeight} />
      
      {isMobile ? (
        // --- USER-PROVIDED MOBILE CODE START ---
        <div className="relative w-full h-[calc(100%-80px)] min-h-[500px] bg-gray-100 rounded-xl p-2 border border-gray-200 overflow-hidden">
          <ScalesAndAvatars />
        </div>
        // --- USER-PROVIDED MOBILE CODE END ---
      ) : (
        <div className="absolute top-0 left-0 w-full h-full">
          <Reorder.Group
            axis="x"
            values={avatars}
            onReorder={setAvatars}
            className="absolute left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-100px)] overflow-x-auto h-full flex items-end justify-center gap-2 bottom-0 pb-4"
          >
            {avatars.map((avatar) => (
              <DesktopAvatar
                key={avatar.id}
                avatar={avatar}
                boardHeight={boardHeight}
                isMobile={isMobile}
              />
            ))}
          </Reorder.Group>
        </div>
      )}
    </div>
  );
}

// Mobile Avatar Component
function MobileAvatar({
  avatar,
  boardHeight,
  compression,
}: {
  avatar: AvatarType;
  boardHeight: number;
  compression: number;
}) {
  const { removeAvatar, setSelectedAvatar, setSelectedScreen } = useGlobals();

  const height = Number(avatar.height);
  const ftIn = cmToFtAndInch(height);
  const visualHeight = ((height / boardHeight) * 100) * compression;

  return (
    <motion.div
      layout
      animate={{ height: `${visualHeight}%` }}
      transition={COMPRESSION_SPRING}
      className="relative min-w-[70px] max-w-[90px] flex flex-col items-center mx-2"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}
    >
      <Reorder.Item value={avatar} className="h-full flex flex-col items-center justify-end">
        {/* Info and controls above avatar, centered */}
        <div className="flex flex-col items-center mb-1">
          <div className="bg-white/95 rounded-xl shadow p-1 flex items-center gap-1 mb-1">
            {avatar.type === ItemType.PERSON && (
              <BiSolidEdit
                size={18}
                className="cursor-pointer"
                onClick={() => {
                  setSelectedAvatar(avatar.id);
                  setSelectedScreen("Edit Persons");
                }}
              />
            )}
            <IoIosCloseCircleOutline
              size={18}
              className="cursor-pointer"
              onClick={() => removeAvatar(avatar.id)}
            />
          </div>
          <div className="bg-white/90 rounded px-1 text-[10px] font-semibold truncate max-w-[70px] text-center">
            {avatar.name || "Unknown"}
          </div>
          <div className="bg-white/90 rounded px-1 text-[9px] font-normal text-center">
            {height.toFixed(1)} cm{avatar.weight ? `, ${avatar.weight} kg` : ""}
          </div>
          <div className="bg-white/90 rounded px-1 text-[9px] font-normal text-center">
            {`${ftIn.ft}ft ${ftIn.in}in`}
          </div>
        </div>
        {/* Avatar SVG or image, bottom-aligned */}
        <div className="flex items-end h-full w-full">
          {avatar.type === "person" ? (
            <div className="h-full w-full flex items-end justify-center">
              <SvgInline url={avatar.avatar} fill={avatar.color} />
            </div>
          ) : (
            <img
              src={avatar.avatar}
              alt={avatar.name}
              className="h-full w-fit min-w-fit"
              draggable={false}
            />
          )}
        </div>
      </Reorder.Item>
    </motion.div>
  );
}

// Desktop Avatar Component
function DesktopAvatar({
  avatar,
  boardHeight,
  isMobile,
}: {
  avatar: AvatarType;
  boardHeight: number;
  isMobile: boolean;
}) {
  const { avatars, removeAvatar, setSelectedAvatar, setSelectedScreen } =
    useGlobals();

  const height = Number(avatar.height);
  const ftIn = cmToFtAndInch(height);
  const isTall = isMobile && height > 122;
  const heightMultiplier = isTall ? 1.25 : 1;
  const visualHeight = ((height / boardHeight) * 100) * heightMultiplier;

  return (
    <motion.div
      layout
      animate={{ height: `${visualHeight}%` }}
      transition={COMPRESSION_SPRING}
      className="relative min-w-fit"
    >
      <Reorder.Item value={avatar} className="h-full">
        <div
          className={`absolute left-0 w-full flex flex-col items-center text-[10px] ${
            avatar.weight ? "-top-[92px]" : "-top-[78px]"
          }`}
        >
          <div className="bg-white border border-gray-200 rounded-md flex items-center">
            {avatar.type === ItemType.PERSON && (
              <BiSolidEdit
                size={30}
                className="cursor-pointer p-2 border-r border-gray-200"
                onClick={() => {
                  setSelectedAvatar(avatar.id);
                  setSelectedScreen("Edit Persons");
                }}
              />
            )}
            <IoIosCloseCircleOutline
              size={30}
              className="cursor-pointer p-2"
              onClick={() => {
                removeAvatar(avatar.id);
                if (avatars.length === 0) {
                  setSelectedScreen("Add Person");
                }
              }}
            />
          </div>
          <div className="font-semibold truncate">{avatar.name}</div>
          <div>{height.toFixed(1)} cm</div>
          {avatar.weight && <div>{avatar.weight} kg</div>}
          <div>{`${ftIn.ft}ft ${ftIn.in}in`}</div>
          <hr className="w-full border-gray-500" />
        </div>

        {avatar.type === "person" ? (
          <div className="h-full w-fit min-w-fit">
            <SvgInline url={avatar.avatar} fill={avatar.color} />
          </div>
        ) : (
          <img
            src={avatar.avatar}
            alt={avatar.name}
            className="h-full w-fit min-w-fit"
            draggable={false}
          />
        )}
      </Reorder.Item>
    </motion.div>
  );
}

// Shared Components
const HeightChart = React.memo(React.forwardRef(function HeightChart(
  { rowHeight, mobile }: { rowHeight: number; mobile?: boolean },
  ref: React.Ref<HTMLDivElement>
) {
  const isMobile = mobile;
  return (
    <div
      ref={ref}
      className={
        isMobile
          ? "absolute top-0 left-0 w-full h-full px-1 z-0 pointer-events-none"
          : "absolute top-0 left-0 w-full h-full px-4 z-0 pointer-events-none"
      }
    >
      <div
        className={
          isMobile
            ? "flex justify-between font-bold text-[11px] mb-1"
            : "flex justify-between font-bold text-sm mb-1"
        }
      >
        <span>cm</span>
        <h1 className={isMobile ? "text-xs" : ""}>Height Comparison Chart</h1>
        <span>ft</span>
      </div>
      {Array.from({ length: TOTAL_SCALES - 1 }).map((_, i) => {
        const cm = rowHeight * (TOTAL_SCALES - i - 3);
        const ftIn = cmToFtAndInch(cm);
        return (
          <div
            key={i}
            className={
              isMobile
                ? "flex justify-between text-[10px] border-b border-gray-300 h-[calc(100%/27)]"
                : "flex justify-between text-xs border-b border-gray-300 h-[calc(100%/27)]"
            }
          >
            <span>{cm.toFixed(0)}</span>
            <span>{`${ftIn.ft}' ${ftIn.in}"`}</span>
          </div>
        );
      })}
    </div>
  );
}));
