import { getFlockKey } from "@/lib/flock";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    let apiKey: string = body.address;
    if (!body.address) {
        apiKey = getFlockKey();
    }
    const response: FlockContributionResponse = await contribute({
        prompt: body.prompt,
        target: body.data,
        apiKey,
    });
    return NextResponse.json({ ...response })
}

const contribute = async ({
    prompt,
    target,
    apiKey,
}: {
    prompt: string,
    target: string,
    apiKey: string,
}): Promise<FlockContributionResponse> => {
    const headers: any = {
        // "Content-Type": "multipart/form-data",
        "x-api-key": apiKey,
    };

    const content = JSON.stringify({ prompt, target });
    const blob = new Blob([content], { type: 'text/plain' });
    const file = new File([blob], 'information.txt', { type: 'text/plain' });

    const formdata = new FormData();
    formdata.append("file", file, "text.txt");
    const response = await fetch(`${process.env.FLOCK_ENDPOINT}/contribute/submit_file?file_type=txt&model_id=${process.env.FLOCK_MODEL_ID}`, {
        method: 'POST',
        headers,
        body: formdata,
    });

    if (!response.ok) {
        console.log("Error fetching response. Please try again later.");
        const responseData: any = await response.json();
        console.log("Response Data:", JSON.stringify(responseData));
        return { recieved: false }
    }

    const responseData: any = await response.json();
    console.log("Response Data:", responseData);
    if (responseData.detail) {
        return { recieved: false }
    }
    return responseData as FlockContributionResponse;
}