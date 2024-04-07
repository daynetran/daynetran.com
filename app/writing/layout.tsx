const WritingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-full flex-col gap-4 bg-white dark:bg-black flex items-center justify-center">
            {children}
        </div>
    )
}

export default WritingLayout;
