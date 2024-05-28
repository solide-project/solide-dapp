import { Header } from "@/components/main/client/main/header"
import { HomePage as LearnHomePage } from "@/components/main/learn/homepage"
import { loadLearnData, LearnInfo } from "@/lib/lessons/utils"

export default async function Page() {
  const data: LearnInfo[] = await loadLearnData()

  return <div className="container">
    <Header className="my-8">Explore and Learn</Header>
    <LearnHomePage data={data} />
  </div>
}
