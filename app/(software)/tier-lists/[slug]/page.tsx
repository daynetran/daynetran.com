import { getPostSlugs } from "@/actions/server";

import { PostPage } from '@/components/Post/PostPage';

export const generateStaticParams = async () => {
    const slugs = await getPostSlugs('tier-lists')
    const params = slugs.map((x) => ({ slug: x }))
    return params
}

type TierListPostPageProps = {
    params: { slug: string };
}

const TierListPostPage = ({ params }: TierListPostPageProps) => {
    return (
        <PostPage
            slug={params.slug}
            group={'tier-lists'}
        />
    )
}

export default TierListPostPage;
