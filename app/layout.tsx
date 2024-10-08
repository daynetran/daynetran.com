import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { SidebarMobileLayout } from "@/components/Layouts/SidebarMobileLayout"

import { Toaster } from "@/components/ui/sonner"
import { SidebarLayout } from "@/components/Layouts/SidebarLayout";
import { Navigation } from "@/components/Navigation/Navigation"
import { MainLayout } from "@/components/Layouts/MainLayout";

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
        <html lang="en" suppressHydrationWarning>
            <body className={`relative flex min-h-screen min-w-screen bg-white dark:bg-black ${inter.className}`}>
                <ThemeProvider attribute="class">
                    <Toaster />
                    <SidebarLayout>
                        <Navigation />
                    </SidebarLayout>
                    <SidebarMobileLayout >
                        <Navigation />
                    </SidebarMobileLayout>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
