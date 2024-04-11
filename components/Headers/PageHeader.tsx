"use client"
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftIcon, ArrowUpDownIcon, ListFilterIcon, MenuIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HeaderContainer } from "@/components/Containers/HeaderContainer";

import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet"

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
    return (
        <HeaderContainer>
            <div className="flex gap-3 items-center justify-start">
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
                    <span className="font-semibold text-sm">
                        {title}
                    </span>
                )}
            </div>
            <div className="flex gap-3 justify-end items-center">
                {withSearch &&
                    <Input className="h-6 border-neutral-800 dark:border-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-700 w-1/2" placeholder="Search..." />
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
        </HeaderContainer >
    )
}

