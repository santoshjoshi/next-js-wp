// app/components/ThemeSwitcher.tsx
"use client";

import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import useSystemTheme from "../hooks/use-system-theme";

export function ThemeSwitcher( {showLabel } : {showLabel ?: boolean }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useSystemTheme();

  

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <Switch
      isSelected={theme == "light"}
      onValueChange={() =>
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }
      size="lg"
      color="success"
      startContent={<IconSun />}
      endContent={<IconMoon />}
    >
      { showLabel && "Theme" }
    </Switch>
    </div>
  )
};