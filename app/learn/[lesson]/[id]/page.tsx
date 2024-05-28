import { LearnContractSchema, getLearnMetadata } from "@/lib/lessons/utils";
import { LessonList } from "@/components/main/learn/lessons/lesson-list";
import { LessonPage } from "@/components/main/learn/lesson/lesson-page";

export default async function Page({
  params,
}: {
  params: { lesson: string, id: string; };
}) {
  const { lesson, id } = params
  const metadata = await getLearnMetadata(lesson)
  const data: LearnContractSchema | undefined = metadata.content.filter((content) => content.id === id).pop()
  if (!data) {
    return <div>
      Content does not exist
    </div>
  }

  return <LessonPage data={data} />
}