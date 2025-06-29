import { cn } from "@/misc/utils";
import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full rounded-xl bg-primary text-white p-3 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
