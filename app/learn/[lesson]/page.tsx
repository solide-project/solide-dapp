import { getLearnMetadata } from "@/lib/lessons/utils";
import { LessonList } from "@/components/main/learn/lessons/lesson-list";
import { Header } from "@/components/main/client/main/header"

export default async function Page({
  params,
}: {
  params: { lesson: string; };
}) {
  const { lesson } = params
  if (!lesson) {
    return <div>
      Invalid Lession
    </div>
  }

  const data = await getLearnMetadata(lesson)

  if (!data.title) {
    return <div>
      Lesson not found
    </div>
  }

  return <div className="container">
    <Header className="my-8">{data.title}</Header>
    <LessonList data={data} />
  </div>
}