import { Loading } from '@/components/Loaders/Loading';
import { PostPage } from '@/components/Post/PostPage';
import { Suspense } from 'react';

const HomePage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <PostPage
                slug={'interests'}
                group={'interests'}
                showMetadata={false}
            />
        </Suspense>
    )
}

export default HomePage;
