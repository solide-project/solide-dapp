import { Features } from "@/components/main/client/main/features";
import { Hero } from "@/components/main/client/main/hero";
import { IDESupport } from "@/components/main/client/main/ide-support";
import { Jumbotron } from "@/components/main/client/main/jumbotron";
import { SampleIntegration } from "@/components/main/client/main/sample-integration";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IDESupport />
      <Features />
      <SampleIntegration />

      <div className="container my-14">
        <Jumbotron className="border" />
      </div>
    </main>
  );
}
