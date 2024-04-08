import TitleBar from "@/components/TitleBar";
import { ThemeButton } from "@/components/Theming/ThemeButton";
import { Navigation } from "@/components/Navigation/Navigation";

export const Sidebar = () => {
    return (
        <aside className="inset-y-0 left-0 w-96 h-screen bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-900 hidden lg:block">
            <div className="flex flex-col h-full overflow-y-auto gap-4">
                <TitleBar />
                <Navigation />
                <ThemeButton />
            </div>
        </aside>
    );
};

