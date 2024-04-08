"use client"

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button"

type Props = {
    href: string;
    children: React.ReactNode;
    color: string;
}

export const NavLink = ({
    href,
    children,
    color
}: Props) => {
    const topPathname = "/" + usePathname().split("/")[1];
    const active = href === topPathname;

    if (color === "red" || color === "blue" || color === "green" || color === "primary") {

    } else {
        throw new Error("WHAT THE FUCK")
    }

    return (
        <Button
            variant={active ? `${color}Outline` : `${color}`}
            className="w-full"
            asChild
        >
            {children}
        </Button>
    )
}
