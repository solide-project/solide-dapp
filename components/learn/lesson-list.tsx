"use client"

import { LearnInfo, LessonMetadata } from "@/lib/lessons/utils"
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface LessonListProps extends React.HTMLAttributes<HTMLDivElement> {
    data: LessonMetadata
}

export const LessonList = ({
    data
}: LessonListProps) => {
    const pathname = usePathname()

    return <div className="grid grid-cols-12 gap-4">
        {data.content.map((file) => {
            return <div key={file.id} className="col-span-12 md:col-span-6 lg:col-span-4">
                <Link href={`${pathname}/${file.id}`} target="_self">
                    {file.image && <img src={file.image} alt="learn" className="w-full rounded-lg" />}
                    <div className="text-2xl font-semibold leading-none tracking-tight my-2">
                        {file.title}
                    </div>
                    <div className="">
                        {file.description}
                    </div>
                </Link>
            </div>
        })}
    </div>
}