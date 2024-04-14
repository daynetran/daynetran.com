import path, { join } from "path";

import { PostPage } from '@/components/Post/PostPage';
import { getPostSlugs } from "@/actions/server";

type ProjectPostPageProps = {
    params: { slug: string };
}

export const generateStaticParams = async () => {
    const slugs = await getPostSlugs('projects')
    const params = slugs.map((x) => ({ slug: x }))
    return params
}

const ProjectPostPage = ({ params }: ProjectPostPageProps) => {

    return (
        <PostPage
            slug={params.slug}
            group={'projects'}
        />
    )
}

export default ProjectPostPage;
