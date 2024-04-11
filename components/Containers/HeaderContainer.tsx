/** 
 * HeaderContainer is a React Server Component that returns a wrapper. It provides a <header> 
 * {children} </header> with specific styling to be consumed throughout different layouts.
 */
export const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className="w-full sticky top-0 flex py-3 px-3 lg:px-5 backdrop-blur-lg items-center justify-between">
            {children}
        </header>
    )
}

