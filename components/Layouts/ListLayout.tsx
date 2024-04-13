import { Viewport } from "next";
import { promises, } from 'fs';
import { ListLayoutWrapper } from "@/components/ClientWrappers/ListLayoutWrapper";
import { ListHeader } from "@/components/Headers/ListHeader";
import { List } from "@/components/Content/List";
import { ListFooter } from "@/components/Footers/ListFooter";
import { cwd } from "process";
import { join } from "path";
import matter from "gray-matter";

export const viewport: Viewport = {
    themeColor: '#171717',
}

const getPostPaths = async (dirName: string) => {
    let paths: string[] = [];
    const items = await promises.readdir(dirName, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            paths = [...paths, ...(await getPostPaths(`${dirName}/${item.name}`))];
        } else {
            paths.push(`${dirName}${item.name}`);
        }
    }
    return paths;
};


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
    const postsDir = join(cwd(), 'content', group) + '/'
    const postPaths = await getPostPaths(postsDir)

    return (
        <ListLayoutWrapper>
            <ListHeader
                title={header}
                withSearch={withSearch}
                withFilter={withFilter}
                withSort={withSort} />
            <List sources={postPaths} />
            <ListFooter />
        </ListLayoutWrapper>
    )
}
