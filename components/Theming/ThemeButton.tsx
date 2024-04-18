"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button"

/**
 * `ThemeButton` is a React Client Component that provides a theme toggle button to turn on light or
 * dark mode for the entire application. It uses the `next-themes` package to provide quick and
 * easy theming and abstract away the necessary, but hard, details of theme implementation.
 */
export const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    const handleClick = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
        <Button
            size="rounded"
            variant="button"
            onClick={handleClick}
            title="Toggle Theme"
        >
            {theme === "light"
                ? <Sun className="h-4 w-4" />
                : <Moon className="h-4 w-4" />
            }
        </Button>
    )
}

export const ThemeMenu = () => {

};
