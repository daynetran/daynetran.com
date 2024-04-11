import { SidebarHeader } from "@/components/Headers/SidebarHeader";
import { ReactNode } from "react";
import { ContentContainer } from "../Containers/ContentContainer";

/**
 * Sidebar is a React Server Component that provides key features across the entire application. It
 * provides the elements for client-side navigation and global features like theming.
 */
export const SidebarLayout = ({ children }: { children: ReactNode }) => {
    return (
        <aside className="inset-y-0 left-0 min-w-64 max-w-64 h-screen bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 hidden lg:flex flex-col overflow-y-auto gap-4">
            <SidebarHeader />
            <ContentContainer>
                {children}
            </ContentContainer>
        </aside>
    );
};

