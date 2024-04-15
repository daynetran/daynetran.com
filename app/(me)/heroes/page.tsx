import { Suspense } from 'react';

import { Loading } from '@/components/Loaders/Loading';
import { PostPage } from '@/components/Post/PostPage';

const HomePage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <PostPage
                slug={'home'}
                group={'home'}
                showMetadata={false} />
        </Suspense >
    )
}

export default HomePage;
