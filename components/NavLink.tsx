"use client"

import { usePathname } from "next/navigation";
import Link from "next/link"
import { Button } from "./ui/button"

type Props = {
    href: string;
    children: React.ReactNode;
}

export const NavLink = ({
    href,
    children
}: Props) => {
    const active = usePathname() === href

    return (
        <Button
            variant={active ? "navOutline" : "nav"}
            className="w-full"
            asChild
        >
            {children}
        </Button>
    )
}
