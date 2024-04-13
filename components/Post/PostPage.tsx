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


const components: MDXComponents = {
    h1: ({ children }) => <h1 className="font-bold text-3xl my-9">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-2xl mt-9 mb-7">{children}</h2>,
    h3: ({ children }) => <h3 className="font-semibold text-xl mt-7 mb-5">{children}</h3>,
    p: ({ children }) => <p className="dark:text-neutral-300 mb-5 ">{children}</p>,
    img: (props) => (
        <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            {...(props as ImageProps)}
        />
    ),
}


type PostPageProps = {
    hasList: boolean;
    mdxPath: string;
}

export const PostPage = async ({ hasList, mdxPath }: PostPageProps) => {
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
        <section className="flex-1 flex flex-col items-center w-full gap-8 overflow-y-auto">
            <PostHeader withFilter withSort withSearch hasList={hasList} frontmatter={postTSX.frontmatter} />
            <Post content={postTSX.content} frontmatter={postTSX.frontmatter} />
            <PostFooter />
        </section>
    )
}
