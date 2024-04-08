"use client"

import { createContext } from "react"

export const SheetContext = createContext({ toggleSheet: () => { } })
export default function GlobalMobileNavContext({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
