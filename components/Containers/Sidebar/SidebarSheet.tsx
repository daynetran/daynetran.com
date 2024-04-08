import { SheetContainer } from "@/components/Containers/SheetContainer";
import { Navigation } from "@/components/Navigation/Navigation";
import { ThemeButton } from "@/components/Theming/ThemeButton";
import TitleBar from "@/components/TitleBar";

export const SidebarSheet = () => {
    return (
        <div className="lg:hidden px-6 h-[50px] flex items-center justify-between bg-white dark:bg-black border-b fixed top-0 w-full z-50">
            <SheetContainer side="left">
                <TitleBar isMobile={true} />
                <Navigation />
                <ThemeButton />
            </SheetContainer>
        </div>
    )
}
