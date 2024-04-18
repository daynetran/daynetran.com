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
        <HeaderContainer>
            <section className="flex-1 flex gap-3 items-center justify-start w-1/2">
                {!isZen && (
                    <>
                        {hasList
                            ? <Button
                                size="rounded"
                                variant="primary"
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
                {title && (
                    <h1 className="flex-1 font-semibold text-base truncate ...">
                        {title}
                    </h1>
                )}
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
                        <TableOfContents />
                        {readingTime && (
                            <span className="text-sm font-medium hidden lg:flex">{readingTime}</span>
                        )}
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
        </HeaderContainer >
    )
}

