import { ContentContainer } from "@/components/Containers/ContentContainer"
import { ReactElement } from 'react';
import "./code.css";
export const Post = ({ content, frontmatter }: {
    content: ReactElement,
    frontmatter: {
        title: string,
    }
}) => {

    return (
        <ContentContainer>
            <article className="flex flex-col w-full overflow-clip max-w-prose justify-center items-start text-start ">
                <h1 className="font-bold text-2xl ">{frontmatter.title}</h1>
                {content}
            </article>
        </ContentContainer >
    )
}
