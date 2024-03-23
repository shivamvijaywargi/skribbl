import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const IconButton = ({
  title = "",
  isActive = "",
  children,
}: {
  title?: string;
  isActive?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        isActive === title ? "bg-muted" : "",
        "hover:bg-muted p-2 rounded transition cursor-pointer grid place-items-center"
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default IconButton;
