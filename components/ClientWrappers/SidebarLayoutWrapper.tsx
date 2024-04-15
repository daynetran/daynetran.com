"use client"

import { cn } from "@/lib/utils";

import { useZenMode } from "@/stores/use-zen-mode";

/**
 * `SidebarLayoutWrapper` is a React Client Component. It wraps sidebar components and consumes the 
 * `isZen` global state variable from the `useZenMode` store. When the user turns on `isZen`, 
 * ShidebarLayoutWrapper hides the sidebar content to focus the web page on the post.
 */
export const SidebarLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isZen } = useZenMode();
    const zenMode = isZen ? "absolute hidden invisible" : "";

    return (
        <>
            <aside className={cn("min-w-40 max-w-40 lg:min-w-64 lg:max-w-64 2xl:min-w-72 2xl:max-w-72 h-screen bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 hidden lg:flex flex-col overflow-y-auto gap-3 ",
                zenMode
            )}>
                {children}
            </aside>
        </>
    )
}
