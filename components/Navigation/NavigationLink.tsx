"use client"

import { usePathname } from "next/navigation";
import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet";
import { Button } from "@/components/ui/button"

type NavigationLinkProps = {
    href: string;
    children: React.ReactNode;
    color: "red" | "blue" | "green" | "primary";
}

/**
 * NavigationLink is a React Client Component. It retrieves the pathname from 
 * the browser and parses it for the top-level navigation link. It then outlines
 * the Button if its 'href' prop is equal to the top pathname.
 */
export const NavigationLink = ({
    href,
    children,
    color
}: NavigationLinkProps) => {
    const topPathname = "/" + usePathname().split("/")[1];
    const active = href === topPathname;

    const { close } = useMobileSidebarSheet();

    return (
        <Button
            variant={active ? "sidebarActive" : "sidebar"}
            asChild
            onClick={close}
            className=""
        >
            {children}
        </Button>
    )
}
