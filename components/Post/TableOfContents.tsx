"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { SquareMenuIcon } from "lucide-react"
import { useZenMode } from "@/stores/use-zen-mode"
import Link from "next/link"

export const TableOfContents = () => {
    const { isZen } = useZenMode();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="button" className="hidden lg:flex">
                    <SquareMenuIcon className="h-4 w-4" />
                    {!isZen && <span className="pl-2">Outline </span>}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 h-72">
                <Link
                    href="#event-propagation"
                >
                    Link
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
