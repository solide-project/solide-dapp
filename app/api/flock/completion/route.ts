import { flock } from "@/lib/helpers";
import { minify } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    let apiKey: string = body.address;
    apiKey = flock.getFlockKey();
    // if (!body.address) {
    //     apiKey = getFlockKey();
    // }
    const response: flock.FlockConversationalResponse = await completions({
        prompt: body.prompt,
        apiKey,
        history: body.history || [],
    });
    return NextResponse.json({ ...response })
}

const completions = async ({
    prompt,
    apiKey,
    history = [],
}: {
    prompt: string,
    apiKey: string
    history?: any[],
}): Promise<flock.FlockConversationalResponse> => {
    const payload = {
        question: `${minify(prompt)}`,
        chat_history: [],
        knowledge_source_id: process.env.FLOCK_MODEL_ID,
    };
    // console.log("payload", payload.question);

    const headers: any = {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
    };

    const body = JSON.stringify(payload);
    const response = await fetch(`${process.env.FLOCK_ENDPOINT}/chat/conversational_rag_chat`, {
        method: 'POST',
        headers,
        body,
    });

    if (!response.ok) {
        console.log(await response.text())
        console.log("responseData Error");
        return {
            answer: "Error fetching response. Please try again later.",
            source_docs: history,
            generated_question: "Error"
        };
    }

    const responseData: flock.FlockConversationalResponse = await response.json();
    // Need to convert the generated question to a more readable format
    responseData.generated_question = prompt;
    console.log("responseData", responseData);
    return responseData;
}