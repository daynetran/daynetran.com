import { PostPage } from '@/components/Post/PostPage';
import { getPostSlugs } from "@/actions/server";
import { Suspense } from 'react';
import { Loading } from '@/components/Loaders/Loading';

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
        <Suspense fallback=<Loading />>
            <PostPage
                slug={params.slug}
                group={'projects'}
            />
        </Suspense>
    )
}

export default ProjectPostPage;
