import { getFlockKey } from "@/lib/flock";
import { minify } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    let apiKey: string = body.address;
    apiKey = getFlockKey();
    // if (!body.address) {
    //     apiKey = getFlockKey();
    // }
    const response: FlockConversationalResponse = await completions({
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
}): Promise<FlockConversationalResponse> => {
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
        return {
            answer: "Error fetching response. Please try again later.",
            source_docs: history,
            generated_question: "Error"
        };
    }

    const responseData: FlockConversationalResponse = await response.json();
    // Need to convert the generated question to a more readable format
    responseData.generated_question = prompt;
    return responseData;
}