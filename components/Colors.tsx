import { colors } from "@/misc/data";
import React from "react";
import { CgColorPicker } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";

interface ColorsProps {
  selectedColor: string;
  onChange: (color: string) => void;
}

const Colors = ({ onChange, selectedColor }: ColorsProps) => {
  return (
    <div className="grid grid-cols-12 gap-1.5 relative">
      <label
        htmlFor="color-picker"
        className="relative w-full aspect-square rounded-md border border-gray-300 flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: selectedColor || "#fff" }}
      >
        <CgColorPicker
          size={16}
          className="text-gray-500 p-0.5 bg-white rounded-full"
        />
        <input
          id="color-picker"
          type="color"
          className="absolute top-0 left-0 w-full h-full opacity-0"
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      {colors.slice(0, 11).map((c, index) => (
        <div
          key={index}
          className={`flex items-center justify-center w-full aspect-square rounded-md cursor-pointer ${""}`}
          style={{ backgroundColor: c }}
          onClick={() => onChange(c)}
        >
          {selectedColor === c && (
            <FaCheck
              className="aspect-square bg-white rounded-full p-1"
              size={20}
              color="black"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Colors;
