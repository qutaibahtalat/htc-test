const TabStyleRadio = ({
  options,
  value,
  onChange,
  padding = "p-1",
  className = "",
}: {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  padding?: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center gap-2 bg-background rounded-xl p-1 ${className}`}
    >
      {options.map((o, index) => (
        <span
          key={index}
          onClick={() => onChange(o)}
          className={`${padding} rounded-[inherit] cursor-pointer w-1/2 h-full text-center flex items-center justify-center ${
            value === o && "bg-white"
          }`}
        >
          {o}
        </span>
      ))}
    </div>
  );
};

export default TabStyleRadio;
