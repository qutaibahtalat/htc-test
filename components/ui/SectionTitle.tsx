import { cn } from "@/misc/utils";
const SectionTitle = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <span className={cn("text-base font-medium", className)} onClick={onClick}>
      {children}
    </span>
  );
};

export default SectionTitle;
