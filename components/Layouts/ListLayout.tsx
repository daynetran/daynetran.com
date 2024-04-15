import { Suspense } from "react";
import { Viewport } from "next";

import { ListLayoutWrapper } from "@/components/ClientWrappers/ListLayoutWrapper";
import { ListHeader } from "@/components/Headers/ListHeader";
import { List } from "@/components/Content/List";
import { ListFooter } from "@/components/Footers/ListFooter";
import { Loading } from "@/components/Loaders/Loading";

export const viewport: Viewport = {
    themeColor: '#171717',
}

type ListLayoutProps = {
    header: string;
    group: string;
    withSearch?: boolean;
    withFilter?: boolean;
    withSort?: boolean;
}

export const ListLayout = async ({
    header = "",
    group = "/",
    withSearch = false,
    withFilter = false,
    withSort = false,
}: ListLayoutProps) => {
    // use the  `group` to create the directory path and retrieve all posts. Retrieve slugs after.

    return (
        <ListLayoutWrapper>
            <ListHeader
                title={header}
                withSearch={withSearch}
                withFilter={withFilter}
                withSort={withSort} />
            <Suspense fallback={<Loading />}>
                <List group={group} />
            </Suspense>
            <ListFooter />
        </ListLayoutWrapper>
    )
}
