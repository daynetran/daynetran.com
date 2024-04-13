"use client"

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type PostLinkProps = {
    href: string;
    children: React.ReactNode;
}

export const PostLink = ({
    href,
    children,
}: PostLinkProps) => {
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
