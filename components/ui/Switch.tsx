import { cn } from "@/misc/utils";

interface SwitchProps {
  value: boolean;
  onChange: () => void;
}

const Switch = ({ value, onChange }: SwitchProps) => {
  return (
    <div
      className="h-[20px] w-[36px] rounded-full bg-primary relative p-1 cursor-pointer"
      onClick={onChange}
    >
      <div
        className={`h-[80%] aspect-square rounded-full bg-white shadow-md absolute top-1/2 -translate-y-1/2 transition-all ${cn(
          value ? "right-0.5" : "left-0.5"
        )}`}
      ></div>
    </div>
  );
};

export default Switch;
