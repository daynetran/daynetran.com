import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground lg:hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground lg:hover:bg-destructive/90",
                red:
                    "bg-white dark:bg-neutral-900 lg:hover:bg-red-200/80 dark:lg:hover:bg-red-200/20  active:scale-[0.99]",
                redOutline:
                    "bg-red-500 dark:bg-red-300 text-white dark:text-neutral-900 active:scale-[0.99]",
                blue:
                    "bg-white dark:bg-neutral-900 lg:hover:bg-blue-200/80 dark:lg:hover:bg-blue-200/20 active:scale-[0.99]",
                blueOutline:
                    "bg-blue-500 dark:bg-blue-300 text-white dark:text-neutral-900 active:scale-[0.99]",
                green:
                    "bg-white dark:bg-neutral-900 lg:hover:bg-green-200/80 dark:lg:hover:bg-green-200/20  active:scale-[0.99]",
                greenOutline:
                    "bg-green-500 dark:bg-green-300 text-white dark:text-neutral-900 active:scale-[0.99]",
                primary:
                    "bg-transparent hover:bg-neutral-200/80 dark:hover:bg-neutral-200/20  active:scale-[0.99]",
                primaryOutline:
                    "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 active:scale-[0.99]",
                secondary:
                    "bg-secondary text-secondary-foreground lg:hover:bg-secondary/80",
                ghost: "lg:hover:bg-accent lg:hover:text-accent-foreground",
                link: "text-primary underline-offset-4 lg:hover:underline",
            },
            size: {
                default: "h-8 px-2 py-1",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                rounded: "p-1 rounded-full",
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
