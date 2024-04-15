'use client'

import { ContentContainer } from "@/components/Containers/ContentContainer"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <ContentContainer>
            <div>
                Hello there
            </div>
        </ContentContainer>
    )
}
