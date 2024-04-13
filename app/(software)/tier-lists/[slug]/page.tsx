import path from "path";

import { PostPage } from '@/components/Post/PostPage';

type TierListPostPageProps = {
    params: { slug: string };
}

const TierListPostPage = ({ params }: TierListPostPageProps) => {
    const mdxPath = path.join(process.cwd(), `/content/tier-lists/${params.slug}.mdx`)

    return (
        <PostPage mdxPath={mdxPath} hasList={true} />
    )
}

export default TierListPostPage;
