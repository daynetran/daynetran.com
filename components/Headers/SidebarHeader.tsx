import { ThemeButton } from "@/components/Theming/ThemeButton";
import { HeaderContainer } from "@/components/Containers/HeaderContainer";

/**
 * `SidebarHeader` is the header for the sidebar. It provides the name for the 
 * entire application and the global features for the user to interact with, 
 * such as the Theme Button.
 */
export const SidebarHeader = () => {
    return (
        <HeaderContainer>
            {// Please put a cool, interactive logo here instead of this basic nonsense. lmao.
            }
            <h1 className="font-bold text-lg text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text "> Dayne Tran </h1>
            <ThemeButton />
        </HeaderContainer>
    )
}
