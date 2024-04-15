"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"
import { useZenMode } from "@/stores/use-zen-mode";

export const ListLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isZen } = useZenMode();
    const pathname = usePathname();

    const hasPost = pathname.split("/").length > 2 ? "hidden lg:flex" : "flex"
    const zenMode = isZen ? "absolute hidden invisible" : "";

    return (
        <>
            <aside
                className={cn(
                    hasPost,
                    "flex-col gap-3 overflow-y-auto w-screen lg:min-w-72 lg:max-w-72 2xl:min-w-96 2xl:max-w-96 bg-white dark:bg-neutral-900 lg:border-r border-neutral-200 dark:border-neutral-800",
                    zenMode,
                )}>
                {children}
            </aside>
        </>
    )
}
