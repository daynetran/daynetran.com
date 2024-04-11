import { ListLayout } from "@/components/Layouts/ListLayout";
import { PageLink } from "@/components/Layouts/ListLink";
import { Viewport } from "next";
import Link from "next/link";
import { dummyItems } from "@/config/dummy";

export const viewport: Viewport = {
    themeColor: '#171717',
}

const ProjectLayout = ({ params, children }: { params: { slug: string }, children: React.ReactNode }) => {
    return (
        <>
            <ListLayout
                title={"Projects"}
                withSearch
                withFilter
                withSort
                params={params}
            >
                <ol className="flex flex-col items-center gap-1 w-full">
                    <PageLink
                        href="/projects/building-my-site"
                    >
                        <Link
                            href="/projects/building-my-site">
                            <div>Building my site</div>
                        </Link>
                    </PageLink>
                    {dummyItems.map((dummy, i) => {
                        return (
                            <PageLink
                                href="/projects/fire-fighter"
                            >
                                <Link
                                    href="/projects/fire-fighter">
                                    <div className="flex flex-col gap-2">
                                        <div key={i}>{dummy.title}</div>
                                        <br />
                                        <div key={i}>{dummy.title}</div>
                                    </div>

                                </Link>
                            </PageLink>
                        )
                    })}
                </ol>
            </ListLayout >
            {children}
        </>
    )
}

export default ProjectLayout;
