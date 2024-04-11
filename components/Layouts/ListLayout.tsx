import { ListHeader } from "@/components/Headers/ListHeader";
import ListClientLayout from "./ListClientLayout";
import { ContentContainer } from "@/components/Containers/ContentContainer";

type ListLayoutProps = {
    title: string;
    withSearch?: boolean;
    withFilter?: boolean;
    withSort?: boolean;
    children?: React.ReactNode;
    params?: {
        slug: string;
    }
}

export const ListLayout = ({
    title,
    withSearch,
    withFilter,
    withSort,
    children,
}: ListLayoutProps) => {
    return (
        <ListClientLayout>
            <ListHeader title={title} withSearch withFilter withSort />
            <ContentContainer>
                {children}
            </ContentContainer>
        </ListClientLayout>
    )
}
