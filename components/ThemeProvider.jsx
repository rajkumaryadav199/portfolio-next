'use client';

import {ThemeProvider as NextThemeProvider} from "next-themes";
export function ThemeProvider({children, ...props}){
  console.log('pp',children, props)
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  )
}

