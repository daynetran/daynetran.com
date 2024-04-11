export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex h-screen w-screen bg-white dark:bg-black">
            {children}
        </main>
    )
}
