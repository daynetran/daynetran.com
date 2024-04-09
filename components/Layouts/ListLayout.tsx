import { ListHeader } from "./ListHeader";

type ListLayoutProps = {
    title: string;
    withSearch?: boolean;
    withFilter?: boolean;
    withSort?: boolean;
    children: React.ReactNode;
}

const ListLayout = ({
    title,
    withSearch,
    withFilter,
    withSort,
    children
}: ListLayoutProps) => {
    return (
        <main className="flex h-screen w-screen bg-white dark:bg-neutral-900 ">
            <aside className="inset-y-0 left-0 w-screen h-screen lg:w-96 bg-white dark:bg-neutral-900 flex flex-col lg:border-r border-neutral-200 dark:border-neutral-800">
                <ListHeader title={title} withSearch={withSearch} withFilter={withFilter} withSort={withSort} />
                <ol className="flex flex-col gap-2 justify-start items-center p-6">
                </ol>
            </aside>
            {children}
        </main>
    )
}

export default ListLayout;
