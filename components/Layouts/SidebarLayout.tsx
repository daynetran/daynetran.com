import { SidebarHeader } from "@/components/Headers/SidebarHeader";
import { ReactNode } from "react";
import { ContentContainer } from "../Containers/ContentContainer";
import { SidebarLayoutWrapper } from "../ClientWrappers/SidebarLayoutWrapper";

/**
 * Sidebar is a React Server Component that provides key features across the entire application. It
 * provides the elements for client-side navigation and global features like theming.
 */
export const SidebarLayout = ({ children }: { children: ReactNode }) => {

    return (
        <SidebarLayoutWrapper>
            <SidebarHeader />
            <ContentContainer>
                {children}
            </ContentContainer>
        </SidebarLayoutWrapper>
    );
};

