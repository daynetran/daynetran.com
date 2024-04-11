import { FC } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, } from "lucide-react";

import { NavigationLink } from "@/components/Navigation/NavigationLink";
import { navigationItems } from "@/config/site";

const colors = ["blue", "green", "primary", "red"]

/**
 * The 'Navigation' React Component is a Server Component that returns navigation JSX. The JSX 
 * includes the list of navigation items, where each item produces section and a list of links.
 * It is important to note that this Server Component consumes a Client Component that itself passes
 * Server Component JSX as children. The Client Component reads the top-level pathname of the URL, 
 * and it outlines the active navigation item.
 */
export const Navigation: FC = () => {
    return (
        <nav className="flex-1 flex flex-col gap-6 dark:text-neutral-300">
            {navigationItems.map((section) => {
                return (
                    <ul key={section.label} className="text-sm ">
                        <li className="flex flex-col gap-2">
                            {section.label && (
                                <h2 className="pl-2 font-semibold text-opacity-40" >{section.label}</h2>
                            )}
                            <ul className="flex flex-col gap-2">
                                {section.items.map((item) => {
                                    if (!colors.includes(section.color)) {
                                        return;
                                    }
                                    return (
                                        < NavigationLink
                                            key={`${section.label}_${item.label}`}
                                            href={item.href}
                                            color={section.color}
                                        >
                                            <Link
                                                href={item.href}
                                                className="w-full flex items-center gap-3"
                                                target={item.isExternal ? "_blank" : ""}
                                            >
                                                <span className="flex items-center w-4"> <item.icon /> </span>
                                                <h3 className="flex-1"> {item.label} </h3>
                                                {item.isExternal ? <ArrowUpRightIcon className="w-4" /> : null}
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

