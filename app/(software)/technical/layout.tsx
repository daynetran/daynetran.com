import { ListLayout } from "@/components/Layouts/ListLayout";


type ProjectListLayoutProps = {
    children: React.ReactNode;
}

const ProjectListLayout = ({ children }: ProjectListLayoutProps) => {
    return (
        <>
            <ListLayout
                header="Technical Articles"
                group="technical"
                withSearch
                withFilter
                withSort
            >
            </ListLayout >
            {children}
        </>
    )
}

export default ProjectListLayout;
