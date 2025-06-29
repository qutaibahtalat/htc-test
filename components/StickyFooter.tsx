import React from "react";
import AdsenseUnit from "@/components/google-ads/AdsenseUnit";

const StickyFooter = () => {
  return (
    <div className="w-full !h-[100px] !max-h-[100px] bg-white/80 border-t border-gray-100 z-[99999] fixed bottom-0 left-0 right-0">
      <div
        className="!h-[100px] !max-h-[100px]"
        style={{ height: "100px", maxHeight: "100px" }}
      >
        <AdsenseUnit
          slot="2400450591"
          format="auto"
          responsive={true}
          className="!h-[100px] !max-h-[100px]"
          style={{ height: "100px", maxHeight: "100px" }}
        />
      </div>
    </div>
  );
};

export default StickyFooter;
