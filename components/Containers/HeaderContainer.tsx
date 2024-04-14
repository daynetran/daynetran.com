/** 
 * HeaderContainer is a React Server Component that returns a wrapper. It provides a <header> 
 * {children} </header> with specific styling to be consumed throughout different layouts.
 */
export const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className="w-full sticky top-0 py-5 px-3 lg:px-5 bg-white/80 dark:bg-transparent backdrop-blur-lg flex items-center justify-between bg-green-300">
            {children}
        </header>
    )
}

