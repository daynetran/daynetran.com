import Link from "next/link"
import matter from "gray-matter";
import { cwd } from "process";
import { join } from "path";
import { readFileSync } from "fs";
import { PostLink } from "../ClientWrappers/ListLinkWrapper"
import { ContentContainer } from "../Containers/ContentContainer";

const extract = (source: string) => {
    const href = source.replace(join(cwd(), 'content'), '').replace('.mdx', '')
    const frontmatter = matter(readFileSync(source, 'utf8'))
    const title = frontmatter.data.title;
    const date: Date = frontmatter.data.date;
    return { href, title, date }
}


type ListProps = {
    sources: string[]
}

export const List = ({
    sources
}: ListProps) => {
    return (
        <ContentContainer>
            <ol className="flex flex-col items-center gap-3 w-full text-wrap">
                {sources.map((source, i) => {
                    const { href, title, date } = extract(source);
                    return (
                        <PostLink
                            key={i}
                            href={href}
                        >
                            <Link
                                href={href}
                            >
                                <div className="flex flex-col gap-1">
                                    <h1 className="font-semibold">{title}</h1>
                                    <p className="text-sm font-light text-neutral-400">
                                        {date &&
                                            date.toLocaleDateString(
                                                undefined,
                                                {
                                                    weekday: "long",
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })
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
