import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center text-wrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground lg:hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground lg:hover:bg-destructive/90",
                primary:
                    "bg-transparent hover:bg-neutral-100/80 dark:hover:bg-neutral-200/20  active:scale-[0.99] text-wrap hover:dark:bg-gradient-to-r",
                primaryOutline:
                    "bg-neutral-100 dark:bg-neutral-700 active:scale-[0.99] bg-gradient-to-r from-blue-100 to-green-100 shadow-sm dark:from-blue-700 dark:to-green-700",
                secondary:
                    "bg-secondary text-secondary-foreground lg:hover:bg-secondary/80",
                ghost: "lg:hover:bg-accent lg:hover:text-accent-foreground",
                link: "text-primary underlinej",
                button: "bg-transparent hover:bg-neutral-100/80 dark:hover:bg-neutral-200/20  active:scale-[0.99] ",
                sidebar:
                    "active:scale-[0.99] bg-transparent hover:bg-gradient-to-r hover:from-blue-100/30 hover:to-purple-100/30 text-wrap hover:dark:bg-gradient-to-r hover:dark:from-blue-700/50 hover:dark:to-purple-700/50",
                sidebarActive:
                    "active:scale-[0.99] bg-gradient-to-r from-blue-200 to-purple-100 shadow-sm dark:from-blue-700 dark:to-purple-700",
                post:
                    "active:scale-[0.99] hover:bg-gradient-to-r hover:from-blue-500/80 hover:to-purple-500/80 hover:dark:from-blue-100/90 hover:dark:to-purple-100/90 hover:text-transparent hover:bg-clip-text",
                postActive:
                    "active:scale-[0.99] bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300"

            },
            size: {
                default: "h-8 px-2 py-1",
                sm: "h-9 rounded-md px-3",
                lg: "h-full rounded-md px-8",
                icon: "h-10 w-10",
                rounded: "p-2 rounded-full",
                link: "px-2 py-1 h-full w-full"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
