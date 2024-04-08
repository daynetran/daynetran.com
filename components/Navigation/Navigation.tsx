"use server"

import { ArrowUpRightIcon, } from "lucide-react";
import Link from "next/link";

import { NavLink } from "@/components/Navigation/NavLink";
import { navItems as sections } from "@/config/site";

export const Navigation = () => {
    return (
        <nav className="flex-1 space-y-6 px-2">
            {sections.map((section, i) => {
                const color = section.color;
                return (
                    <ul key={i} className="space-y-1">
                        {section.label && (
                            <h4
                                key={i}
                                className="pb-2 pl-2 text-base font-semibold text-opacity-40 dark:text-gray-100"
                            >
                                {section.label}
                            </h4>
                        )}
                        {section.items.map((item, j) => (
                            <NavLink key={j} href={item.href} color={color}>
                                <Link
                                    href={item.href}
                                    className="w-full flex gap-2"
                                    target={item.isExternal ? "_blank" : ""}
                                >
                                    <span className="flex items-center w-4">
                                        {item.icon}
                                    </span>
                                    <span className="flex-1">
                                        {item.label}
                                    </span>
                                    <span className="flex items-center w-4">
                                        {item.isExternal ? <ArrowUpRightIcon /> : null}
                                    </span>
                                </Link>
                            </NavLink>
                        ))}
                    </ul>
                )
            })}
        </nav>
    )
}

