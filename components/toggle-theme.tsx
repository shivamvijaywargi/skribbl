"use client";

import { Moon, Sun, SunMoon, UserPlus } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <UserPlus className="mr-2 h-4 w-4" />
        <span>Toggle theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="bg-secondary">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className="hover:bg-muted"
          >
            <Sun className="mr-2 h-[1.2rem] w-[1.2rem]" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className="hover:bg-muted"
          >
            <Moon className="mr-2 h-[1.2rem] w-[1.2rem]" />
            Dark
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className="hover:bg-muted"
          >
            <SunMoon className="mr-2 h-[1.2rem] w-[1.2rem]" />
            System
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
