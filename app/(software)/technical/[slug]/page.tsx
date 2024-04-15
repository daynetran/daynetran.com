import { Suspense } from "react";

import { getPostSlugs } from "@/actions/server";

import { Loading } from "@/components/Loaders/Loading";
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
        <Suspense fallback={<Loading />}>
            <PostPage
                slug={params.slug}
                group={'technical'}
            />
        </Suspense>
    )
}

export default TechnicalPostPage;
