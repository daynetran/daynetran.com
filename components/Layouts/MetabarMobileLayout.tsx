"use client"

import { Sheet, SheetContent, SheetOverlay } from "@/components/ui/sheet"
import { useMobileMetabarSheet } from "@/stores/use-mobile-metabar-sheet"

export const MetabarMobileLayout = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, toggleMeta } = useMobileMetabarSheet()
    return (
        <Sheet open={isOpen} onOpenChange={toggleMeta}>
            <SheetContent side={"right"}>
                <div className="h-48 w-48 ">
                    {children}
                </div>
            </SheetContent>
            <SheetOverlay className="bg-transparent" />
        </Sheet>
    )

}
