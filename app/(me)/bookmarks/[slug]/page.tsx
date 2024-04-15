import { PostPage } from '@/components/Post/PostPage';
import { getPostSlugs } from "@/actions/server";
import { Suspense } from 'react';
import { Loading } from '@/components/Loaders/Loading';

type BookmarkPostPageProps = {
    params: { slug: string };
}

export const generateStaticParams = async () => {
    const slugs = await getPostSlugs('bookmarks')
    const params = slugs.map((x) => ({ slug: x }))
    return params
}

const BookmarkPostPage = ({ params }: BookmarkPostPageProps) => {
    return (
        <Suspense fallback={<Loading />}>
            <PostPage
                slug={params.slug}
                group={'bookmarks'}
            />
        </Suspense>
    )
}

export default BookmarkPostPage;
