import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ThemeToggle } from "./toggle-theme";

const HamburgerMenu = () => {
  return (
    <div className="absolute top-4 left-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-secondary p-1 rounded">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>
            <a href="https://shivamvijaywargi.dev" target="_blank">
              Shivam Vijaywargi
            </a>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ThemeToggle />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HamburgerMenu;
