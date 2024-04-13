export const ContentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex px-2 lg:px-3 py-0 w-full items-center justify-center ">
            {children}
        </section>
    )
}

export const ProseContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-2 lg:px-3 w-full lg:max-w-prose flex items-center justify-center bg-red-300">
            {children}
        </div>
    )
}
