import { Suspense } from 'react';

import { getPostSlugs } from "@/actions/server";

import { PostPage } from '@/components/Post/PostPage';
import { Loading } from '@/components/Loaders/Loading';

type FAQSPostPageProps = {
    params: { slug: string };
}

export const generateStaticParams = async () => {
    const slugs = await getPostSlugs('faqs')
    const params = slugs.map((x) => ({ slug: x }))
    return params
}

const FAQSPostPage = ({ params }: FAQSPostPageProps) => {
    return (
        <Suspense fallback=<Loading />>
            <PostPage
                slug={params.slug}
                group={'faqs'}
            />
        </Suspense>
    )
}

export default FAQSPostPage;
