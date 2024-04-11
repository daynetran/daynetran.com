"use client"

import { usePathname } from "next/navigation"

const ListClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <>
            <aside
                className={`${pathname.split("/").length > 2
                    ? "hidden lg:block"
                    : "block"
                    }` + " flex flex-col overflow-y-auto inset-y-0 left-0 w-full lg:w-72 bg-white dark:bg-neutral-900 lg:border-r border-neutral-200 dark:border-neutral-800"}>
                {children}
            </aside>
        </>
    )
}

export default ListClientLayout;
