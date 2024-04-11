import { ListLayout } from "@/components/Layouts/ListLayout";
import { Button } from "@/components/ui/button";
import { Viewport } from "next";
import Link from "next/link";

export const viewport: Viewport = {
    themeColor: '#171717',
}
const dummyItems = [
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
    {
        title: "Making my site"
    },
]


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
                <ol className="flex flex-col items-center gap-2">
                    {dummyItems.map((dummy, i) => {
                        return (
                            <Button
                                size="lg"
                                variant="primary"
                                className="w-full"
                                asChild
                            >
                                <Link
                                    href="/projects/fire-fighter"
                                >
                                    <div key={i}>{dummy.title}</div>
                                </Link>
                            </Button>
                        )
                    })}
                </ol>
            </ListLayout>
            {children}
        </>
    )
}

export default ProjectLayout;
