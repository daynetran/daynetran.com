
import PageLayout from "@/components/Layouts/PageLayout";

const Intro = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-green-900 border-x-black dark:border-x-white h-screen w-full max-w-prose">
            <div className="text-5xl font-extrabold text-transparent bg-clip-text py-2 bg-white transition-colors hover:duration-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-red-600 animate-gradient">
                Hi, I&apos;m Dayne.
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <PageLayout>Hi</PageLayout>
    );
}
