import { PageHeader } from "@/components/Headers/PageHeader";
import { ContentContainer } from "../Containers/ContentContainer";

type PageLayoutProps = {
    hasList: boolean;
    params?: { slug: string };
    children: React.ReactNode;
}

const PageLayout = ({ hasList, children, params }: PageLayoutProps) => {
    return (
        <div className="flex-1 flex flex-col items-center w-full gap-8">
            <PageHeader withFilter withSort withSearch hasList={hasList} title={params?.slug} />
            <ContentContainer>
                <article className="flex w-full max-w-prose justify-center items-center">
                    {children}
                </article>
            </ContentContainer>
        </div>
    )
}

export default PageLayout;
