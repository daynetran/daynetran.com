"use client"

import { ChevronLeft, Menu } from "lucide-react";
import { createContext, useState } from "react"

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";

export const SheetContext = createContext({ toggleSheet: () => { } })

export const SheetContainer = ({ side, children }: { side: "left" | "right", children: React.ReactNode }) => {
    const [sheet, setSheet] = useState(false);

    const toggleSheet = () => {
        setSheet(prev => !prev)
    }

    return (
        <SheetContext.Provider value={{ toggleSheet }}>
            <Sheet open={sheet} onOpenChange={setSheet} modal={false}>
                <SheetTrigger asChild>
                    <div className="text-black dark:text-white flex font-bold justify-end">
                        {side === "right"
                            ? <ChevronLeft />
                            : <Menu />
                        }
                    </div>
                </SheetTrigger>
                <SheetContent side={side} className="flex flex-col bg-white dark:bg-neutral-800 overflow-auto transition-none ">
                    {children}
                </SheetContent>
            </Sheet >
        </SheetContext.Provider >
    )
}
