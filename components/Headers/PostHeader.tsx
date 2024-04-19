"use client"
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftIcon, EllipsisVerticalIcon, GlassesIcon, MenuIcon, SquareMenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeaderContainer } from "@/components/Containers/HeaderContainer";

import { useMobileSidebarSheet } from "@/stores/use-mobile-sidebar-sheet"
import { useZenMode } from "@/stores/use-zen-mode";
import { MetabarMobileLayout } from "../Layouts/MetabarMobileLayout";
import { useMobileMetabarSheet } from "@/stores/use-mobile-metabar-sheet";
import { TableOfContents } from "../Post/TableOfContents";

type PostHeaderProps = {
    frontmatter: {
        title: string,
        date?: Date,
    }
    showMetadata: boolean;
    readingTime: string;
}

/**
 * `PostHeader` is a React Client Component. It provides information about a post, like the title 
 * and the reading time when it receives `frontmatter`. It also provides metadata and user 
 * interactivity, when `showMetadata` is `true`. It allows the user to toggle Zen Mode, open the 
 * table of contents for the blog post, and toggle the theme.
 */
export const PostHeader = ({
    frontmatter,
    showMetadata = true,
    readingTime = ''
}: PostHeaderProps) => {
    const title = frontmatter.title;
    const { open } = useMobileSidebarSheet();
    const router = useRouter();

    const pathnames = usePathname().split("/")
    const topPathname = "/" + pathnames[1];
    const hasList = pathnames.length > 2;

    const { toggle, isZen } = useZenMode()
    const { toggleMeta } = useMobileMetabarSheet()

    return (
        <header className="w-full sticky top-0 dark:bg-transparent h-16 min-h-16 max-h-16 backdrop-blur-2xl flex items-center justify-between">
            <div className="w-full h-full px-3 py-3 relative bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex">
                <section className="flex-1 flex gap-3 items-center justify-start w-1/2 " >
                    {!isZen && (
                        <>
                            {hasList
                                ? <Button
                                    size="rounded"
                                    variant="button"
                                    onClick={() => router.push(topPathname)}
                                    title={`Back to ${topPathname}`}

                                >
                                    <ArrowLeftIcon className="h-4 w-4" />
                                </Button>
                                : <Button
                                    size="rounded"
                                    variant="button"
                                    onClick={open}
                                    className="lg:hidden"
                                    title="Open Sidebar"
                                >
                                    <MenuIcon className="h-4 w-4" />
                                </Button>
                            }
                        </>
                    )}
                    {
                        <h1 className="text-sm font-medium">{title}</h1>
                    }
                </section>
                <section className="flex gap-3 justify-end items-center w-1/5 lg:w-1/2 ">
                    {showMetadata && (
                        <>
                            <Button
                                size={isZen ? "rounded" : "default"}
                                variant="button"
                                onClick={toggle}
                                title="Zen Mode"
                                className="group items-center hidden lg:flex"
                            >
                                <GlassesIcon className="h-4 w-4 " />
                                {!isZen && <span className="pl-2">Zen Mode</span>}
                            </Button>
                            <Button
                                size="rounded"
                                variant="primary"
                                onClick={toggleMeta}
                                title="Meta Menu"
                                className="lg:hidden"
                            >
                                <EllipsisVerticalIcon className="h-4 w-4" />
                            </Button>
                            <MetabarMobileLayout >
                                Hello world
                            </MetabarMobileLayout>
                        </>
                    )}
                </section>
            </div >
        </header>
    )
}

