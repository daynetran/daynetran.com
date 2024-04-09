import { ArrowUpRightIcon, } from "lucide-react";
import Link from "next/link";

import { NavigationLink } from "@/components/Containers/NavigationLink";
import { navigationItems } from "@/config/site";

export const Navigation = () => {
    return (
        <nav className="flex-1 space-y-6 px-2">
            {navigationItems.map((section, i) => {
                return (
                    <ul key={section.label} className="space-y-1">
                        {section.label && (
                            <li className="pb-2 pl-2 text-base font-semibold text-opacity-40 dark:text-gray-100" >
                                <h2>{section.label}</h2>
                            </li>
                        )}
                        {section.items.map((item) => (
                            <NavigationLink key={`${section.label}_${item.label}`} href={item.href} color={section.color}>
                                <Link
                                    href={item.href}
                                    className="w-full flex gap-2"
                                    target={item.isExternal ? "_blank" : ""}
                                >
                                    <span className="flex items-center w-4"> {item.icon} </span>
                                    <h3 className="flex-1"> {item.label} </h3>
                                    <span className="flex items-center w-4"> {item.isExternal ? <ArrowUpRightIcon /> : null} </span>
                                </Link>
                            </NavigationLink>
                        ))}
                    </ul>
                )
            })}
        </nav>
    )
}

