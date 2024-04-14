import { PostPage } from '@/components/Post/PostPage';

const HomePage = () => {
    return (
        <PostPage
            slug={'home'}
            group={'home'}
            showMetadata={false}
        />
    )
}

export default HomePage;
