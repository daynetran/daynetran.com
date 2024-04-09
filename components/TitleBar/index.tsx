import { ThemeButton } from "@/components/Theming/ThemeButton";

type Props = {
    isMobile?: boolean
}

const TitleBar = ({ isMobile = false }: Props) => {
    return (
        <header className="sticky top-0 bg-white/90 dark:bg-neutral-900/90 flex pt-6 px-2 items-center justify-between" >
            <span className="pl-2 font-bold text-base"> Dayne Tran </span>
            <ThemeButton />
        </header>
    )
}

export default TitleBar;
