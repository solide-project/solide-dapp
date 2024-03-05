import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const requestBody = await request.json();
    const headers = new Headers();
    headers.append("accept", "application/json");
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "wallet_address": requestBody.address
    });

    const response = await fetch("https://rag-chat-ml-backend-dev.flock.io/api_key/generate", {
        method: "POST",
        headers,
        body,
    });

    const data = await response.json();
    // Success means the message is empty, either way we don't care about the message
    return NextResponse.json({ message: data.detail || "" })
}

