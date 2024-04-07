"use client"

import { Button } from "@/components/ui/button"
import { ThemeButton } from "../ThemeButton";

const TitleBar = () => {
    return (
        <div className="flex items-center justify-between">
            <span className="pl-2 font-bold text-base"> Dayne Tran </span>
            <ThemeButton />
        </div>
    )
}

export default TitleBar;
