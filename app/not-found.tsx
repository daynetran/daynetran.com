import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-screen">
            <h2>Page Not Found</h2>
            <Button variant="default" size="lg" asChild>
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    )
}
