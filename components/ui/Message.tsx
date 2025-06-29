import React from "react";

const Message = ({
  variant = "info",
  children,
}: {
  variant?: "info" | "error";
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={`text-sm rounded-md transition-opacity duration-300 p-3 ${
        variant === "error"
          ? "bg-orange-200 border border-orange-500"
          : "bg-blue-200 border-blue-500"
      }`}
    >
      {children}
    </h3>
  );
};

export default Message;
