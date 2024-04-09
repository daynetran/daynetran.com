"use client"

import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet"
import { ArrowUpDownIcon, ListFilterIcon, MenuIcon, SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
        <header className="flex w-full gap-8 justify-between items-center pt-6 px-4">
            <div className="flex gap-3 items-center justify-start">
                <MenuIcon onClick={open} className="lg:hidden w-4" />

                {title && (
                    <span className="font-semibold text-sm">
                        {title}
                    </span>
                )}

            </div>
            <div className="flex gap-3 justify-end items-center">
                {withSearch &&
                    <Input className="h-6 border-neutral-800 dark:border-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-700 w-3/4" placeholder="Search..." />
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
            </div>
        </header >
    )
}

