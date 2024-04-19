export interface FlockConversationalResponse {
    answer: string;
    source_docs: string[];
    generated_question: string;
}


export interface FlockContributionResponse {
    recieved: boolean;
}

export const getFlockKey = (): string => {
    const keys = (process.env.FLOCK_API_KEY || "").split(",");
    const randomIndex = Math.floor(Math.random() * keys.length);
    const apiKey: string = keys[randomIndex] || "";
    return apiKey;
}