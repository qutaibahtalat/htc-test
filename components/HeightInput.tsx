import { cmToFtAndInch, ftToCm } from "@/utils/HeightConversion";
import { useState } from "react";

interface HeightInputProps {
  height: number;
  unit: "cm" | "ft";
  onChange: (height: number) => void;
}

const HeightInput = ({ height, unit, onChange }: HeightInputProps) => {
  const [heights, setHeights] = useState({
    cm: height,
    ft: cmToFtAndInch(height).ft,
    in: cmToFtAndInch(height).in,
  });

  const handleChange = (name: keyof typeof heights, value: number) => {
    const newHeights: typeof heights = { ...heights, [name]: value };

    if (name === "ft" || name === "in") {
      const cmValue = ftToCm(newHeights.ft, newHeights.in);
      newHeights.cm = cmValue;
    }

    if (name === "cm") {
      const { ft, in: inch } = cmToFtAndInch(newHeights.cm);
      newHeights.ft = ft;
      newHeights.in = inch;
    }
    setHeights(newHeights);
    onChange(newHeights.cm);
  };

  return inputs[unit].map(({ name, placeholder }) => (
    <input
      key={name}
      type="number"
      className="w-full rounded-lg p-2 py-3 border border-gray-200"
      placeholder={placeholder}
      value={heights[name as keyof typeof heights] || ""}
      min={0}
      onChange={(e) => {
        let newValue = e.target.valueAsNumber;
        if (e.target.value === "") {
          newValue = 0;
        }
        handleChange(name as keyof typeof heights, newValue);
      }}
    />
  ));
};

export default HeightInput;

const inputs = {
  cm: [{ name: "cm", placeholder: "e.g. 120 cm" }],
  ft: [
    { name: "ft", placeholder: "e.g. 4 ft" },
    { name: "in", placeholder: "e.g. 10 in" },
  ],
};
