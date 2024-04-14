import { readFileSync } from "fs";
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Image, { ImageProps } from "next/image";
import { MDXComponents } from 'mdx/types';
import rehypePrettyCode from "rehype-pretty-code";

import { PostHeader } from "@/components/Headers/PostHeader";
import { Post } from "@/components/Content/Post";
import { PostFooter } from "@/components/Footers/PostFooter";
import readingTime from "reading-time";
import Link from "next/link";
import path from "path";
import { navigationRoutes } from "@/config/site";
import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";

const components: MDXComponents = {
    h1: ({ children }) => <h1 className="font-bold text-2xl py-14">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-xl pt-11">{children}</h2>,
    h3: ({ children }) => <h3 className="font-semibold text-lg pt-8">{children}</h3>,
    p: ({ children }) => <p className="dark:text-neutral-300 pt-5 ">{children}</p>,
    a: ({ children, href }) => <Link href={href ? href : ""} className="font-bold text-blue-500 underline decoration-blue-500">{children}</Link>,
    img: (props) => (
        <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            {...(props as ImageProps)}
        />
    ),
}

const groups = navigationRoutes.flatMap(object => object.routes.map(routeObject => routeObject.href)).map((x) => (x.split('/')[1]))

type PostPageProps = {
    showMetadata?: boolean,
    slug: string;
    group: typeof groups[number];
}
const Loading = <LoaderIcon className="h-20 w-20 text-muted-foreground animate-spin" />

export const PostPage = async ({
    showMetadata = true,
    group,
    slug,
}: PostPageProps) => {
    const mdxPath = path.join(process.cwd(), `/content/${group}/${slug}.mdx`)
    const postMDX = readFileSync(mdxPath, 'utf8')
    const postTSX = await compileMDX<{ title: string }>({
        source: postMDX,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [
                    [rehypeKatex, {
                        output: "mathml",
                    }],
                    [rehypePrettyCode, {
                        theme: {
                            light: "catppuccin-latte",
                            dark: "dark-plus",
                        },
                        defaultLang: "tsx",
                    }],
                ],
            }
        },
        components: components
    })

    return (
        <Suspense fallback={Loading}>
            <section className="flex-1 flex flex-col items-center w-full gap-8 overflow-y-auto">
                <PostHeader
                    showMetadata={showMetadata}
                    frontmatter={postTSX.frontmatter}
                    readingTime={readingTime(postMDX).text} />
                <Post content={postTSX.content} frontmatter={postTSX.frontmatter} />
                <PostFooter />
            </section>
        </Suspense>
    )
}
