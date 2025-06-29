import { cn } from "@/misc/utils";
interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  className?: string;
}

const Input = ({
  name = "",
  type = "text",
  placeholder = "",
  value = "",
  className = "",
  onChange = () => {},
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(`w-full rounded-lg p-2 border border-gray-200`, className)}
    />
  );
};

export default Input;
