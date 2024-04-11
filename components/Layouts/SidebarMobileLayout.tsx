"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SidebarHeader } from "@/components/Headers/SidebarHeader";
import { ContentContainer } from "@/components/Containers/ContentContainer";

import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet";

/**
 * The SidebarMobile is a Client component that returns a sheet that opens when a global state 
 * variable, or store, is set to `true`. The trigger or button that opens the sheet is only 
 * available on viewports supported by mobile devices. The sheet provides the same sidebar features
 * as the fixed main sidebar.
 */
export const SidebarMobileLayout = ({ children }: { children: React.ReactNode }) => {
    // Declare variables that consume the store's state and actions.
    const { isOpen, toggle } = useMobileSidebarSheet();

    return (
        <Sheet open={isOpen} onOpenChange={toggle}>
            <SheetContent side={"left"} className="flex flex-col py-0 px-0 dark:bg-neutral-900 overflow-auto transition-none ">
                <SidebarHeader />
                <ContentContainer>
                    {children}
                </ContentContainer>
            </SheetContent>
        </Sheet >
    )
}
