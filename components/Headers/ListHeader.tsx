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
            <section className="flex-none w-1/2 flex gap-3 items-center justify-start ">
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
            <section className="flex-initial w-1/2 flex gap-3 justify-end items-center">
                {withSearch &&
                    <Button size="rounded" variant="primary" onClick={() => console.log("woah")}>
                        <SearchIcon className="h-4 w-4" />
                    </Button>
                    // <Input className="h-6 border-neutral-800 dark:border-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-700 w-1/2" placeholder="Search..." />
                }
                {withFilter && (
                    <Button size="rounded" variant="primary" onClick={() => console.log("hello")}>
                        <ListFilterIcon className="h-4 w-4" />
                    </Button>
                )}
                {withSort && (
                    < Button size="rounded" variant="primary" onClick={() => console.log("world")}>
                        <ArrowUpDownIcon className="h-4 w-4" />
                    </Button>
                )}
            </section>
        </HeaderContainer>
    )
}

