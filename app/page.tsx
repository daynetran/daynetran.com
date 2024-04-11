
import PageLayout from "@/components/Layouts/PageLayout";

const Intro = () => {
    return (
        <div >
            Hi, I&apos;m Dayne.
        </div>
    )
}

export default function Home() {
    return (
        <PageLayout hasList={false}>
            <Intro />
        </PageLayout>
    );
}
