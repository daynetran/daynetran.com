import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/Sidebar";

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
            <body className={inter.className}>
                <ThemeProvider attribute="class">
                    <main className="relative flex min-h-screen w-full bg-white dark:bg-black ">
                        <Sidebar />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
