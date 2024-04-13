import path from "path";

import { PostPage } from '@/components/Post/PostPage';

type ProjectPostPageProps = {
    params: { slug: string };
}

const ProjectPostPage = ({ params }: ProjectPostPageProps) => {
    const mdxPath = path.join(process.cwd(), `/content/technical/${params.slug}.mdx`)

    return (
        <PostPage mdxPath={mdxPath} hasList={true} />
    )
}

export default ProjectPostPage;
