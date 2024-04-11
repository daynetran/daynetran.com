"use client"

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

type Props = {
    href: string;
    children: React.ReactNode;
}
export const PageLink = ({
    href,
    children,
}: Props) => {
    const active = href === usePathname();

    return (
        <Button
            variant={active ? `primaryOutline` : `primary`}
            size="link"
            asChild
        >
            {children}
        </Button>
    )
}
