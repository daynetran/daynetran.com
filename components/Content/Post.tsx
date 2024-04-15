import { ReactElement } from 'react';

import { ContentContainer } from "@/components/Containers/ContentContainer"

import "./code.css";
import "@/styles/post.css"
/**
 * Post is a React Server Component that provides the style and structure of the
 * blog post given its `content` TSX and the `frontmatter` object. The blog post
 * also receives styling for the rehype-pretty-code code blocks from the 
 * `@/styles/code.css` file.
 */
export const Post = ({ content, frontmatter }: {
    content: ReactElement,
    frontmatter: {
        title: string,
    }
}) => {
    return (
        <ContentContainer>
            <article className="post flex flex-col w-full overflow-clip max-w-prose justify-center items-start text-start">
                <h1 className="font-bold text-2xl">{frontmatter.title}</h1>
                {content}
            </article>
        </ContentContainer >
    )
}
