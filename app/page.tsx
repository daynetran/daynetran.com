import { ThemeButton } from "@/components/ThemeButton";

export default function Home() {
    return (
        <div className="flex bg-white min-h-screen w-full flex-col dark:bg-black items-center justify-between p-24">
            <ThemeButton />
        </div>
    );
}
