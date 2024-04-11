import { Menu } from "lucide-react";

import { PageHeader } from "@/components/Headers/PageHeader";

type PageLayoutProps = {
    hasList: boolean;
    params?: { slug: string };
    children: React.ReactNode;
}

const PageLayout = ({ hasList, children, params }: PageLayoutProps) => {
    return (
        <div className="flex-1 flex flex-col items-center w-full">
            <PageHeader withFilter withSort withSearch hasList={hasList} />
            <div className="pt-6 w-full lg:max-w-prose">
                {children}
            </div>
        </div>
    )
}

export default PageLayout;
