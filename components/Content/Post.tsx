import { ReactElement } from 'react';

import { ContentContainer } from "@/components/Containers/ContentContainer"

import "./code.css";
import "@/styles/post.css"
import { ClockIcon, GlassesIcon, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { PostMeta } from '../Post/PostMeta';
/**
 * Post is a React Server Component that provides the style and structure of the
 * blog post given its `content` TSX and the `frontmatter` object. The blog post
 * also receives styling for the rehype-pretty-code code blocks from the 
 * `@/styles/code.css` file.
 */
export const Post = ({ content, frontmatter, readingTime }: {
    content: ReactElement,
    frontmatter: any,
    readingTime: string,
}) => {
    return (
        <>
            <PostMeta
                frontmatter={frontmatter}
                readingTime={readingTime}
            />
            <ContentContainer>
                <article className="post flex flex-col w-full overflow-clip max-w-prose justify-center items-start text-start pt-8">
                    {content}
                </article>
            </ContentContainer >
        </>
    )
}
