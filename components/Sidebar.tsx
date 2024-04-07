import TitleBar from "@/components/TitleBar";
import { Button } from "./ui/button";
import { ThemeButton } from "@/components/ThemeButton";
import { Navigation } from "@/components/Navigation";

export const Sidebar = () => {
    return (
        <div className="inset-y-0 left-0 w-96 h-screen bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-900 shadow-lg hidden lg:block">
            <div className="flex flex-col h-full overflow-y-auto gap-4 pt-4 px-2">
                <TitleBar />
                <Navigation />
                <div className="mb-4">
                    <ThemeButton />
                </div>
            </div>
        </div>
    );
};

