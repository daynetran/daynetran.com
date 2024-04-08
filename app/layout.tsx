import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { Sidebar } from "@/components/Containers/Sidebar/Sidebar";
import { SidebarSheet } from "@/components/Containers/Sidebar/SidebarSheet";

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
                <body className={inter.className}>
                    <ThemeProvider attribute="class">
                        <main className="relative flex min-h-screen w-full bg-white dark:bg-black ">
                            <Sidebar />
                            <SidebarSheet />
                            {children}
                        </main>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
