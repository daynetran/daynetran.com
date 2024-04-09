import ListLayout from "@/components/Layouts/ListLayout";
import { Viewport } from "next";

export const viewport: Viewport = {
    themeColor: '#171717',
}

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ListLayout
            title={"Projects"}
            withSearch
            withFilter
            withSort
        >
            {children}
        </ListLayout>
    )
}

export default ProjectLayout;
