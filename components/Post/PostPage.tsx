import { readFileSync } from "fs";
import path from "path";
import Image, { ImageProps } from "next/image";
import { MDXComponents } from 'mdx/types';
import Link from "next/link";
import readingTime from "reading-time";

import { NavGroups } from "@/types/types";

import { convertMDXtoTSX } from "@/actions/server";

import { PostHeader } from "@/components/Headers/PostHeader";
import { Post } from "@/components/Content/Post";
import { PostFooter } from "@/components/Footers/PostFooter";
import { notFound } from "next/navigation";
import { TableOfContents } from "./TableOfContents";

const components: MDXComponents = {
    a: ({ children, href }) => (
        <Link
            href={href ? href : ""}
            className=""
        >
            {children}
        </Link>
    ),
    img: (props) => (
        <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            {...(props as ImageProps)}
        />
    ),
}

type PostPageProps = {
    showMetadata?: boolean,
    slug: string;
    group: NavGroups;
}

/**
 * PostPage is a React Server Component that provides the content, structure, and styles of a blog 
 * post. It receives `showMetadata` to decide whether to include reading time, zen mode, etc. It 
 * uses `group` and `slug` to locate the matching MDX file with the post content and frontmatter in
 * `@/contents`. When it locates the file, it uses the `convertMDXtoTSX` server action to convert the
 * raw MDX into TSX. Lastly, it provides structure to and sends the appropriate data to the 
 * `<PostHeader />`, '<Post />', and `<PostFooter />` components.
 */
export const PostPage = async ({
    showMetadata = true,
    group,
    slug,
}: PostPageProps) => {
    const mdxPath = path.join(process.cwd(), `/content/${group}/${slug}.mdx`)
    let mdx = ""
    try {
        mdx = readFileSync(mdxPath, `utf8`)
    } catch (error) {
        notFound()
        throw new Error("The post does not exist...yet")
    }

    const tsx = await convertMDXtoTSX(mdx, components)
    const time = readingTime(mdx).text;

    return (
        <section className="flex-1 flex flex-col items-center w-full h-full overflow-y-auto overflow-x-clip pb-5">
            <PostHeader
                showMetadata={showMetadata}
                frontmatter={tsx.frontmatter}
                readingTime={time}
            />
            <Post content={tsx.content} frontmatter={tsx.frontmatter} readingTime={time} />
        </section>
    )
}
