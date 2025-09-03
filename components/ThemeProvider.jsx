'use client';

import {ThemeProvider as NextThemeProvider} from "next-themes";
import { Button } from "./ui/button"; 
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeProvider({children, ...props}){
  console.log('pp',children, props)
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  )
}

