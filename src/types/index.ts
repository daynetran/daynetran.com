import type { ComponentType } from "svelte";

export type MarkdownPost = {
    metadata: {
        title: string;
        imgUrl?: string;
        youtubeId?: string
        publishedAt: string;
        summary: string;
    };
    default: ComponentType;
};

export type TimelineInfo = {
    title: string;
    desc: string;
    aside: string;
    location: string;
    time_spent: number;
    year: number;
}
