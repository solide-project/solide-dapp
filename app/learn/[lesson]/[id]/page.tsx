import { LearnContractSchema, getLearnMetadata } from "@/lib/lessons/utils";
import { LessonPage } from "@/components/learn/lesson-page";

export default async function Page({
  params,
}: {
  params: { lesson: string, id: string; };
}) {
  const { lesson, id } = params
  // const metadata = await getLearnMetadata(lesson)
  // const data: LearnContractSchema | undefined = metadata.content.filter((content) => content.id === id).pop()
  const data: LearnContractSchema = {
    "id": "deploying-gasless-vrc25",
    "title": "Deploying Gasless Tokens with VRC25",
    "image": "https://framerusercontent.com/images/oKXpiIqjVmd4STwKVkBvV7gOqa8.png",
    "tutorial": "https://github.com/artela-network/artela-docs/blob/main/docs/develop/guides/contract-via-aspect/index.md",
    "reference": "https://docs.artela.network/develop/guides/contract-via-aspect",
    "description": "Deploy your first VRC25 is the official standard for fungible tokens in Viction ecosystem.",
    "playground": {
      "default": {
        "address": "https://github.com/artela-network/aspect-example/blob/2da0cb993dc88723ee4c81ccf759fedbf6219f48/transientStorage/aspect/index.ts",
      },
    },
    "type": "aspect",
  }

  if (!data) {
    return <div>
      Content does not exist
    </div>
  }

  return <LessonPage data={data} />
}