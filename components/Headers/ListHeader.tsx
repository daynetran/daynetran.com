"use client"

import { ArrowUpDownIcon, ListFilterIcon, MenuIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HeaderContainer } from "@/components/Containers/HeaderContainer";

import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet";

type ListHeaderProps = {
    title?: string;
    withSearch?: boolean;
    withFilter?: boolean;
    withSort?: boolean;
}

export const ListHeader = ({
    title = "",
    withSearch = false,
    withFilter = false,
    withSort = true,
}: ListHeaderProps) => {
    const { open } = useMobileSidebarSheet();
    return (
        <HeaderContainer>
            <section className="flex-none w-full flex gap-3 items-center justify-start ">
                <Button
                    size="rounded"
                    variant="primary"
                    onClick={open}
                    className="lg:hidden"
                >
                    <MenuIcon className="h-4 w-4" />
                </Button>
                {title && (
                    <h1 className="w-full flex-1 font-semibold text-md truncate ...">
                        {title}
                    </h1>
                )}
            </section>
        </HeaderContainer>
    )
}

