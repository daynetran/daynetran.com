"use client"

import Link from 'next/link'
import Image from "next/image";

import { Button } from '@/components/ui/button'
import Penguino from "@/app/Penguinos.png";
import { PostHeader } from '@/components/Headers/PostHeader';

const Error = ({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    return (
        <div className="flex flex-col justify-start items-center w-full h-screen">
            <section className="flex flex-col items-center w-full overflow-y-auto overflow-x-clip pb-5 " >
                <PostHeader
                    frontmatter={{ title: "", }}
                    showMetadata={false}
                    readingTime={""}
                />
            </section>
            <section className="flex flex-col gap-3 justify-center items-center w-full h-screen px-5">
                <h3 className="font-bold text-base lg:text-2xl text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                    404
                </h3>
                <h2 className="font-bold text-2xl py-2 lg:text-5xl text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text ">
                    Page cannot be found
                </h2>
                <div className="-my-12">
                    <Image
                        src={Penguino}
                        alt="Penguino"
                        width={500}
                        height={500}
                    />
                </div>
                <p className="text-center text-base">
                    Sorry, these are not the penguins you are looking for. <br /> Try starting again from the homepage.
                </p>
                <Button size="sm" variant="sidebar" asChild>
                    <Link href="/" className="text-base">Return Home</Link>
                </Button>
            </section>
        </div>
    )
}

export default Error;


