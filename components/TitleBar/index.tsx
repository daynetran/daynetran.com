"use client"

import { ThemeButton } from "@/components/Theming/ThemeButton";

type Props = {
    isMobile?: boolean
}

const TitleBar = ({ isMobile = false }: Props) => {
    return (
        <div className={
            isMobile
                ? "bg-white/90 dark:bg-neutral-800/90 flex pt-2 px-2 items-center justify-between"
                : "sticky top-0 bg-white/90 dark:bg-neutral-800/90 flex pt-2 px-2 items-center justify-between"}>
            <span className="pl-2 font-bold text-base"> Dayne Tran </span>
            <ThemeButton />
        </div>
    )
}

export default TitleBar;
