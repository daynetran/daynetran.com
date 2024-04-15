import { getPostSlugs } from "@/actions/server";
import { Loading } from "@/components/Loaders/Loading";

import { PostPage } from '@/components/Post/PostPage';
import { Suspense } from "react";

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
        <Suspense fallback={<Loading />}>
            <PostPage
                slug={params.slug}
                group={'tier-lists'}
            />
        </Suspense>
    )
}

export default TierListPostPage;
