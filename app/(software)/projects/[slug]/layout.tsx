import PageLayout from "@/components/Layouts/PageLayout"

type PageLayoutProps = {
    children: React.ReactNode;
    params?: { slug: string };
}

const ProjectPageLayout = ({ children, params }: PageLayoutProps) => {
    return (
        <PageLayout params={params} hasList={true}>
            {children}
        </PageLayout>
    )
}

export default ProjectPageLayout;
