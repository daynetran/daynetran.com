"use client"

import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

const ErrorBoundary = () => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-screen">
            <h2>Page Not Found</h2>
            <Button variant="default" asChild>
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    )
}

export default ErrorBoundary;
