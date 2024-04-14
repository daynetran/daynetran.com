import { getPostSlugs } from "@/actions/server";

import { PostPage } from '@/components/Post/PostPage';

export const generateStaticParams = async () => {
    const slugs = await getPostSlugs('technical')
    const params = slugs.map((x) => ({ slug: x }))
    return params
}

type TechnicalPostPageProps = {
    params: { slug: string };
}

const TechnicalPostPage = ({ params }: TechnicalPostPageProps) => {
    return (
        <PostPage
            slug={params.slug}
            group={'technical'}
        />
    )
}

export default TechnicalPostPage;
