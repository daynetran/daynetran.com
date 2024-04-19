"use server"

import { promises, readFileSync, } from 'fs';
import { MDXComponents } from 'mdx/types';
import { notFound } from 'next/navigation';
import path, { join } from 'path';
import { cwd } from 'process';

import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import remarkToc from "remark-toc";
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { NavGroups } from "@/types/types";

/**
  * `getPostPaths` is a Server Action. It receives a `group` that refers to a route segment href like
  * /projects, /interests, etc. It creates a pathname for the matching `group` in the `@/content`
  * directory, and it stores all the pathnames for MDX files in an array. It returns the array `paths`.
  */
export const getPostPaths = async (group: string) => {
    const dirName = join(cwd(), 'content', group, '/')
    let paths: string[] = [];
    const items = await promises.readdir(dirName, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            paths = [...paths, ...(await getPostPaths(`${dirName}/${item.name}`))];
        } else {
            paths.push(`${dirName}${item.name}`);
        }
    }
    return paths;
};

/**
 * getPostSlugs is a Server Action. It receives a `group` that refers to a route segment href like 
 * /projects, /interest, etc. It creates a pathname for the matching `group` in the `@/content` 
 * directory, and it stores all slugs for MDX files, or their file names, in an array. It returns 
 * the array `slugs`.
 */
export const getPostSlugs = async (group: NavGroups) => {
    const dirName = join(cwd(), 'content', group, '/')
    let slugs: string[] = [];
    const items = await promises.readdir(dirName, { withFileTypes: true });

    for (const item of items) {
        slugs.push(`${item.name}`.split('.mdx')[0]);
    }
    return slugs;
}

export const convertPathtoMDX = (group: string, slug: string) => {
    const source = path.join(process.cwd(), `/content/${group}/${slug}.mdx`)
    console.log(source)
    try {
        const mdx = readFileSync(source, 'utf8')
        return mdx
    } catch (error) {
        console.error("Cannot find file.")
        notFound()
    }
}

/**
  * convertMDXtoTSX is a Server Action. It receives a `mdx` string that represents the entirety of 
  * a .mdx file. It uses `compileMDX` to convert the MDX into JSX. `compileMDX` receives several 
  * properties, like the source markdown, the remark plugins, and the rehype plugins. It also 
  * receives `components`, which map custom JSX to common elements like h1, p, and li. It returns 
  * the JSX. 
  */
export const convertMDXtoTSX = async (mdx: string, components: MDXComponents) => {
    const tsx = await compileMDX<{ title: string, date?: Date }>({
        source: mdx,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [
                    remarkMath,
                    remarkToc,
                    remarkGfm,
                ],
                rehypePlugins: [
                    // @ts-ignore
                    [rehypeKatex, {
                        output: "mathml",
                    }],
                    // @ts-ignore
                    [rehypePrettyCode, {
                        theme: {
                            light: "catppuccin-latte",
                            dark: "dark-plus",
                        },
                        defaultLang: "tsx",
                    }],
                    [rehypeSlug],
                    [rehypeAutolinkHeadings],
                ],
            }
        },
        components: components
    })

    return tsx
}
