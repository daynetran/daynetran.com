import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { Sidebar } from "@/components/Containers/Sidebar";
import { SidebarMobile } from "@/components/Containers/SidebarMobile";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dayne Tran",
    description: "The digital home of a Dayne Tran",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`relative flex min-h-screen min-w-screen bg-white dark:bg-black ${inter.className}`}>
                    <ThemeProvider attribute="class">
                        <Sidebar />
                        <SidebarMobile />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
