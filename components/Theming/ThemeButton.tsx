"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button"

export const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }
    let message = ""
    if (theme === "light") {
        message = "Turn on dark mode"
    } else {
        message = "Turn on light mode"
    }

    const handleClick = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
        <Button size="rounded" variant="primary" onClick={handleClick}>
            {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
    )
}

export const ThemeMenu = () => {

};
