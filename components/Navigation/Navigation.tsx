import { FC } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, } from "lucide-react";

import { NavigationLink } from "@/components/Navigation/NavigationLink";
import { navigationRoutes } from "@/config/site";

const colors = ["blue", "green", "primary", "red"]

/**
 * The 'Navigation' React Component is a Server Component that returns navigation JSX. The JSX 
 * includes the list of navigation routes, where each item produces a section and a list of links.
 * It is important to note that this Server Component consumes a Client Component that itself passes
 * Server Component JSX as children. The Client Component reads the top-level pathname of the URL, 
 * and it outlines the active navigation route.
 */
export const Navigation: FC = () => {
    return (
        <nav className="flex-1 flex flex-col gap-6 dark:text-neutral-300">
            {navigationRoutes.map((section) => {
                return (
                    <ul key={section.label} className="text-sm ">
                        <li className="flex flex-col gap-3">
                            {section.label && (
                                <h2 className="pl-2 text-xs text-neutral-400" >{section.label}</h2>
                            )}
                            <ul className="flex flex-col gap-1">
                                {section.routes.map((route) => {
                                    if (!colors.includes(section.color)) {
                                        return;
                                    }
                                    return (
                                        <NavigationLink
                                            key={`${section.label}_${route.label}`}
                                            href={route.href}
                                            color={section.color}
                                        >
                                            <Link
                                                href={route.href}
                                                className="w-full flex items-center gap-3"
                                                target={route.isExternal ? "_blank" : ""}
                                            >
                                                <route.icon className="w-4" />
                                                <h3 className="flex-1 "> {route.label} </h3>
                                                {route.isExternal ? <ArrowUpRightIcon className="w-4" /> : null}
                                            </Link>
                                        </NavigationLink>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                )
            })}
        </nav >
    )
}

