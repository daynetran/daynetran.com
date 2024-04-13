import nextMDX from "@next/mdx";
import remarkGfm from 'remark-gfm';
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypePrettyCode]
    }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
};

export default withMDX(nextConfig);
