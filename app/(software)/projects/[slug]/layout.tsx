import PageLayout from "@/components/Layouts/PageLayout"

type PageLayoutProps = {
    children: React.ReactNode;
    params?: { slug: string };
}

const ProjectPageLayout = ({ children, params }: PageLayoutProps) => {
    return (
        <PageLayout params={params}>
            {children}
        </PageLayout>
    )
}

export default ProjectPageLayout;
