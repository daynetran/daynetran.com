import { ListLayout } from "@/components/Layouts/ListLayout";


type ProjectListLayoutProps = {
    children: React.ReactNode;
}

const ProjectListLayout = ({ children }: ProjectListLayoutProps) => {
    return (
        <>
            <ListLayout
                group="projects"
                header="Projects"
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
