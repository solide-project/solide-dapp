import { LearnContractSchema, getLearnMetadata } from "@/lib/lessons/utils";
import { LessonPage } from "@/components/learn/lesson-page";

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