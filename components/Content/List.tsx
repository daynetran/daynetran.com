import { Suspense } from "react";
import Link from "next/link"
import matter from "gray-matter";
import { cwd } from "process";
import { join } from "path";
import { readFileSync } from "fs";

import { getPostPaths } from "@/actions/server";

import { PostLink } from "@/components/ClientWrappers/ListLinkWrapper"
import { ContentContainer } from "@/components/Containers/ContentContainer";
import { PinIcon } from "lucide-react";

const extract = (source: string) => {
    const href = source.replace(join(cwd(), 'content'), '').replace('.mdx', '')
    const frontmatter = matter(readFileSync(source, 'utf8'))
    const title = frontmatter.data.title;
    const date: Date = frontmatter.data.date;
    const pin: boolean = frontmatter.data.pin;
    return { href, title, date, pin }
}


type ListProps = {
    group: string;
}

type PostProps = {
    href: string;
    title: string;
    date: Date;
    pin?: boolean;
}

export const List = async ({
    group
}: ListProps) => {
    const sources: string[] = await getPostPaths(group)

    const frontmatters: PostProps[] = sources.map((s) => {
        const { href, title, date, pin } = extract(s);
        return { href, title, date, pin }
    })

    const pinned = frontmatters.filter((a) => a.pin)
    const therest = frontmatters.filter((a) => !a.pin)
    const posts = pinned.concat(therest)

    return (
        <ContentContainer>
            <ol className="flex flex-col items-center gap-1 w-full text-wrap">
                {posts.map((post, i) => {
                    const { href, title, date, pin } = post;
                    return (
                        <PostLink
                            key={i}
                            href={href}
                        >
                            <Link
                                href={href}
                            >
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="flex justify-between w-full">
                                        <h1 className="font-bold">{title}</h1>
                                        {pin && <PinIcon className="w-4 h-4 text-black dark:text-white" />}
                                    </div>
                                    <p className="text-xs font-light ">
                                        {date &&
                                            date.toLocaleDateString(
                                                'en-US',
                                                {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                }
                                            )
                                        }
                                    </p>
                                </div>
                            </Link>
                        </PostLink>
                    )
                })}
            </ol>
        </ContentContainer>
    )
}
