"use server"

import {
    HomeIcon,
    BookmarkIcon,
    MessageSquare as FAQIcon,
    HeadphonesIcon as InterestIcon,
    FolderOpenIcon as ProjectIcon,
    PencilLineIcon as TechArticleIcon,
    TrophyIcon as TierListIcon,
    ScrollTextIcon as ResumeIcon,
    ArrowUpRightIcon,
    DatabaseZapIcon as DataEssayIcon,
    LibraryBigIcon as AnecdoteIcon,
    BananaIcon as SatireIcon,
} from "lucide-react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { GitHubIcon, TwitterIcon } from "./Icons";

const sections = [
    {
        label: null,
        items: [
            {
                href: "/",
                label: "Home",
                icon: <HomeIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
        ]
    },
    {
        label: "Me",
        items: [
            {
                href: "/bookmarks",
                label: "Bookmarks",
                icon: <BookmarkIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/faqs",
                label: "FAQs",
                icon: <FAQIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/interests",
                label: "Interests",
                icon: <InterestIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
        ]
    },
    {
        label: "Software",
        items: [
            {
                href: "/projects",
                label: "Projects",
                icon: <ProjectIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/technicals",
                label: "Technical Articles",
                icon: <TechArticleIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/tier-lists",
                label: "Tier Lists",
                icon: <TierListIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/resume",
                label: "Resume",
                icon: <ResumeIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: true,
            },
        ]
    },
    {
        label: "Meditations",
        items: [
            {
                href: "/data-essays",
                label: "Data Essays",
                icon: <DataEssayIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/anecdotes",
                label: "Anecdotes",
                icon: <AnecdoteIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/satire",
                label: "Satire",
                icon: <SatireIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
        ]
    },
    {
        label: "Online",
        items: [
            {
                href: "https://twitter.com/RealDayneTran",
                label: "X (formerly Twitter)",
                icon: <TwitterIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: true,
            },
            {
                href: "https://github.com/daynetran/",
                label: "Github",
                icon: <GitHubIcon />,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: true,
            },
        ]
    }

]

export const Navigation = () => {
    return (
        <div className="flex-1 space-y-6">
            {sections.map((section, i) => {
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
                            <NavLink key={j} href={item.href}>
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
        </div >
    )
}

