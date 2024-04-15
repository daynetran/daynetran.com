import { LoaderCircleIcon } from "lucide-react"

/**
 * Loading is a React component that provides a loading circle that tells users that the application
    * is still running while it waits to download data, like a list or a post.
 */
export const Loading = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <LoaderCircleIcon className="h-10 w-10 text-muted-foreground animate-spin" />
        </div>
    )
}
