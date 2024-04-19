import { ClockIcon, GlassesIcon, LinkIcon } from "lucide-react"
import Link from "next/link"

export const PostMeta = ({ frontmatter, readingTime }: { frontmatter: any, readingTime: string }) => {
    return (
        <section className="w-full px-3 py-5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
            <section className="flex flex-col w-full overflow-clip max-w-prose justify-enter items-start text-start gap-3 ">
                <h1 className="w-full max-w-prose font-bold text-2xl ">{frontmatter.title}</h1>
                <section className="flex w-full gap-5 items-center text-sm">
                    {frontmatter.date && (
                        <span className="flex gap-2 items-center">
                            <ClockIcon className="h-4 w-4" />
                            {frontmatter.date.toLocaleDateString(
                                'en-US',
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </span>
                    )}
                    {frontmatter.date && (
                        <span className="flex gap-2 items-center">
                            <GlassesIcon className="h-4 w-4" />
                            {readingTime}
                        </span>
                    )}
                    {frontmatter.link && (
                        <span className="flex gap-2 items-center post">
                            <LinkIcon className="h-4 w-4" />
                            <Link
                                href={frontmatter.link}
                                className="post"
                            >
                                Live Site
                            </Link>
                        </span>
                    )}

                </section>
            </section>
        </section>

    )
}
