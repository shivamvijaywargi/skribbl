import { cn } from "@/lib/utils";

const IconButton = ({
  title = "",
  isActive = "",
  children,
}: {
  title?: string;
  isActive: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        isActive === title ? "bg-muted" : "",
        "hover:bg-muted p-2 rounded transition cursor-pointer grid place-items-center"
      )}
    >
      <span title={title}>{children}</span>
    </div>
  );
};

export default IconButton;
