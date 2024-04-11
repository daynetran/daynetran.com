"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"
import { useZenMode } from "@/stores/use-zen-mode";

const ListClientLayout = ({ children }: { children: React.ReactNode }) => {
    const { isZen } = useZenMode();
    const pathname = usePathname();

    const hasPost = pathname.split("/").length > 2 ? "hidden lg:flex" : "flex"
    const zenMode = isZen ? "absolute -translate-x-full" : null;

    return (
        <>
            <aside
                className={cn(
                    hasPost,
                    "flex-col gap-8 overflow-auto w-full lg:w-72 2xl:w-96 bg-white dark:bg-neutral-900 lg:border-r border-neutral-200 dark:border-neutral-800",
                )}>
                {children}
            </aside>
        </>
    )
}

export default ListClientLayout;
