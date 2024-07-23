import { Header } from "@/components/homepage/header"
import { loadLearnData, LearnInfo } from "@/lib/lessons/utils"
import Link from "next/link"

export default async function Page() {
  const data: LearnInfo[] = await loadLearnData()

  return <div className="container">
    <Header className="my-8">Explore and Learn</Header>
    <div className="grid grid-cols-12 gap-4">
      {data.map((file) => {
        return <div key={file.name} className="col-span-12 md:col-span-6 lg:col-span-4">
          <Link href={`/learn/${""}/${file.name}`} target="_self">
            {file.metadata.image && <img src={file.metadata.image} alt="learn" className="w-full rounded-lg" />}
            <div className="text-2xl font-semibold leading-none tracking-tight my-2">
              {file.metadata.title}
            </div>
            <div className="">
              {file.metadata.description}
            </div>
          </Link>
        </div>
      })}
    </div>
  </div>
}
