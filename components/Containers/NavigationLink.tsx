"use client"

import { usePathname } from "next/navigation";
import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet";
import { Button } from "@/components/ui/button"

type Props = {
    href: string;
    children: React.ReactNode;
    color: "red" | "blue" | "green" | "primary";
}

export const NavigationLink = ({
    href,
    children,
    color
}: Props) => {
    const topPathname = "/" + usePathname().split("/")[1];
    const active = href === topPathname;

    const { close } = useMobileSidebarSheet();

    return (
        <Button
            variant={active ? `${color}Outline` : `${color}`}
            className="w-full"
            asChild
            onClick={close}
        >
            {children}
        </Button>
    )
}
