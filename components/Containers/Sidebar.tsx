import TitleBar from "@/components/TitleBar";
import { ThemeButton } from "@/components/Theming/ThemeButton";
import { Navigation } from "@/components/Containers/Navigation";

export const Sidebar = () => {
    return (
        <aside className="inset-y-0 left-0 w-96 min-w-96 h-screen bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 hidden lg:flex flex-col overflow-y-auto gap-4">
            <TitleBar />
            <Navigation />
            <ThemeButton />
        </aside>
    );
};

