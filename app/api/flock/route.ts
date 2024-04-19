import { NextRequest, NextResponse } from "next/server";
import { flock } from "@/lib/helpers";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const response: flock.FlockConversationalResponse = await completions(
        body.prompt,
        // body.history // Disable history for now
    );
    return NextResponse.json({ ...response })
}

const minify = (input: string): string => input.replace(/\s+/g, ' ');

const completions = async (prompt: string, history: any[] = []): Promise<flock.FlockConversationalResponse> => {
    // console.log("Prompt:", prompt);
    const payload = {
        question: `Explain in detail what this does in smart contract ${minify(prompt)}`,
        chat_history: [],
        knowledge_source_id: "cls4frht2000njy824nn3c7g5", // replace with your model id
    };

    const keys = [
        process.env.FLOCK_API_1,
        process.env.FLOCK_API_2,
        process.env.FLOCK_API_3,
        process.env.FLOCK_API_4,
    ];
    const randomIndex = Math.floor(Math.random() * keys.length);
    const apiKey: string = keys[randomIndex] || "";

    const headers: any = {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
    };

    const body = JSON.stringify(payload);
    const response = await fetch(process.env.FLOCK_ENDPOINT || "", {
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

    const responseData: flock.FlockConversationalResponse = await response.json();
    // Need to convert the generated question to a more readable format
    responseData.generated_question = prompt;
    return responseData;
}