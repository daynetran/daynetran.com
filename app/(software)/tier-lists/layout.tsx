import { ListLayout } from "@/components/Layouts/ListLayout";
import { Viewport } from "next";


type TierListListLayoutProps = {
    children: React.ReactNode;
    params: {
        group: string;
    }
}

export const viewport: Viewport = {
    themeColor: '#171717',
}

const TierListListLayout = ({ params, children }: TierListListLayoutProps) => {
    return (
        <>
            <ListLayout
                header="Tier Lists"
                group="tier-lists"
                withSearch
                withFilter
                withSort
            >
            </ListLayout >
            {children}
        </>
    )
}

export default TierListListLayout;
