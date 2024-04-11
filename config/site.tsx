import {
    HomeIcon,
    BookmarkIcon,
    MessageSquare as FAQIcon,
    HeadphonesIcon as InterestIcon,
    FolderOpenIcon as ProjectIcon,
    PencilLineIcon as TechArticleIcon,
    TrophyIcon as TierListIcon,
    ScrollTextIcon as ResumeIcon,
    DatabaseZapIcon as DataStoryIcon,
    LibraryBigIcon as AnecdoteIcon,
    BananaIcon as SatireIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    LucideIcon,
} from "lucide-react";

type RouteGroup = {
    label: string | null;
    color: "blue" | "green" | "red" | "primary";
    items: Route[];
}

type Route = {
    href: string;
    label: string | null;
    icon: LucideIcon;
    trailingAccessory: LucideIcon | null;
    trailingAction: LucideIcon | null;
    isExternal: boolean;
}

/**
 * navigationItems is an array of objects, and each object represents a page of the application as
 * well as several features that help define its layout and style.
 */
export const navigationItems: RouteGroup[] = [
    {
        label: null,
        color: "primary",
        items: [
            {
                href: "/",
                label: "Home",
                icon: HomeIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
        ]
    },
    {
        label: "Me",
        color: "red",
        items: [
            {
                href: "/bookmarks",
                label: "Bookmarks",
                icon: BookmarkIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/faqs",
                label: "FAQs",
                icon: FAQIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/interests",
                label: "Interests",
                icon: InterestIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
        ]
    },
    {
        label: "Software",
        color: "blue",
        items: [
            {
                href: "/projects",
                label: "Projects",
                icon: ProjectIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/technicals",
                label: "Technical Articles",
                icon: TechArticleIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/tier-lists",
                label: "Tier Lists",
                icon: TierListIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/resume",
                label: "Resume",
                icon: ResumeIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: true,
            },
        ]
    },
    {
        label: "Meditations",
        color: "green",
        items: [
            {
                href: "/data-stories",
                label: "Data Stories",
                icon: DataStoryIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/anecdotes",
                label: "Anecdotes",
                icon: AnecdoteIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
            {
                href: "/satire",
                label: "Satire",
                icon: SatireIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: false,
            },
        ]
    },
    {
        label: "Socials",
        color: "primary",
        items: [
            {
                href: "https://twitter.com/RealDayneTran",
                label: "Twitter",
                icon: TwitterIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: true,
            },
            {
                href: "https://github.com/daynetran/",
                label: "Github",
                icon: GithubIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: true,
            },
            {
                href: "https://linkedin.com/in/daynetran/",
                label: "LinkedIn",
                icon: LinkedinIcon,
                trailingAccessory: null,
                trailingAction: null,
                isExternal: true,
            }
        ]
    }
]
