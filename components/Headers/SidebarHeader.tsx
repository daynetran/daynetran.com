import { ThemeButton } from "@/components/Theming/ThemeButton";
import { HeaderContainer } from "@/components/Containers/HeaderContainer";

/**
 * The header for the sidebar. It provides the name for the entire application and the global 
 * features for the user to interact with, such as the Theme Button.
 * */
export const SidebarHeader = () => {
    return (
        <HeaderContainer>
            {// Please put a cool, interactive logo here instead of this basic nonsense. lmao.
            }
            <h1 className="font-bold text-lg"> Dayne Tran </h1>
            <ThemeButton />
        </HeaderContainer>
    )
}