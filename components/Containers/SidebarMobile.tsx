"use client"

import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import TitleBar from "@/components/TitleBar";
import { ThemeButton } from "@/components/Theming/ThemeButton";
import { Navigation } from "@/components/Containers/Navigation";

export const SidebarMobile = () => {
    const { isOpen, toggle } = useMobileSidebarSheet();
    return (
        <Sheet open={isOpen} onOpenChange={toggle}>
            <SheetContent side={"left"} className="flex flex-col px-2 py-0 dark:bg-neutral-900 overflow-auto transition-none ">
                <TitleBar />
                <Navigation />
                <ThemeButton />
            </SheetContent>
        </Sheet >
    )
}
