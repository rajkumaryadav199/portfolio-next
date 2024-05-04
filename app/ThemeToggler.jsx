/* Client side */ 
'use client';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../components/ui/button";

const ThemeToggler = () => {
    const {Theme, SetTheme} =useTheme;
  return (
    <div>
      <Button>
        <SunIcon />
        <MoonIcon />
      </Button>
    </div>
  )
}

export default ThemeToggler
