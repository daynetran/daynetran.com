type PageLayoutProps = {
    params?: { slug: string };
    children: React.ReactNode;
}

const PageLayout = ({ children, params }: PageLayoutProps) => {
    return (
        <div className="flex-1 flex flex-col items-center pt-20 bg-dots w-full ">
            <div className="p-4 bg-blue-300 text-white">{params?.slug}</div>
            <div className="w-full max-w-prose bg-black">
                {children}
            </div>
        </div>
    )
}

export default PageLayout;
