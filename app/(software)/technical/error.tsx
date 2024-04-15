"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const Error = ({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-screen " >
            <h2>Something went wrong! The page may not exist (yet).</h2>
            <Button asChild>
                <Link href="/" >
                    Return home.
                </Link>
            </Button>
        </div>
    )
}

export default Error;
