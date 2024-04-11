"use client"
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftIcon, GlassesIcon, MenuIcon, SquareMenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeaderContainer } from "@/components/Containers/HeaderContainer";

import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet"
import { useZenMode } from "@/stores/use-zen-mode";

type PageHeaderProps = {
    title?: string;
    withSearch?: boolean;
    withFilter?: boolean;
    withSort?: boolean;
    hasList: boolean
}

export const PageHeader = ({
    title = "",
    hasList = false,
    withSearch = false,
    withFilter = false,
    withSort = true,
}: PageHeaderProps) => {
    const { open } = useMobileSidebarSheet();
    const router = useRouter();
    const topPathname = "/" + usePathname().split("/")[1];
    const { zenOn } = useZenMode()
    return (
        <HeaderContainer>
            <section className="flex gap-3 items-center justify-start">
                {hasList && (
                    <Button
                        size="rounded"
                        variant="primary"
                        onClick={() => router.push(topPathname)}
                    >
                        <ArrowLeftIcon className="h-4 w-4" />
                    </Button>
                )}
                {!hasList && (
                    <Button
                        size="rounded"
                        variant="primary"
                        onClick={open}
                        className="lg:hidden"
                    >
                        <MenuIcon className="h-4 w-4" />
                    </Button>
                )}
                {title && (
                    <h1 className="font-semibold text-lg">
                        {title}
                    </h1>
                )}
            </section>
            <section className="flex gap-3 justify-end items-center">
                {withFilter && (
                    <Button size="rounded" variant="primary" onClick={zenOn}>
                        <GlassesIcon className="h-4 w-4" />
                    </Button>
                )}
                {withSort && (
                    < Button size="rounded" variant="primary" onClick={() => console.log("world")}>
                        <SquareMenuIcon className="h-4 w-4" />
                    </Button>
                )}
            </section>
        </HeaderContainer >
    )
}

