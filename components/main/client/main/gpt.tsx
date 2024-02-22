"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Loader, SendIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"

interface GPTProps extends React.HTMLAttributes<HTMLDivElement> { }

export const GPT = ({ }: GPTProps) => {
    const [input, setInput] = useState<string>("")
    const [processing, setProcessing] = useState<boolean>(false)
    const [chatHistory, setChatHistory] = useState<FlockConversationalResponse[]>([])

    const handleCompletion = async () => {
        if (!input) return

        setProcessing(true)
        const response = await fetch("/api/flock", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: input, history: chatHistory })
        })
        const data: FlockConversationalResponse = await response.json()
        setChatHistory([...chatHistory, data])

        setInput("")
        setProcessing(false)
    }

    return (
        <div className="">
            <div className="h-[80vh] overflow-y-auto">
                {chatHistory.map((chat, index) => (
                    <div key={index} className="space-y-4">
                        <Chat
                            name="You"
                            message={chat.generated_question}
                        />
                        <Chat
                            name="Solide GPT (Powered by Flock)"
                            message={chat.answer}
                        />
                    </div>

                ))}
            </div>

            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg text-sm">
                <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-24 flex-1 bg-transparent border-0"
                    placeholder="Message Solide Smart Contract GPT..."
                />
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={handleCompletion}
                    disabled={!input || processing}
                >
                    {processing
                        ? <Loader className="h-4 w-4" />
                        : <SendIcon className="h-4 w-4" />}
                    <span className="sr-only">Send</span>
                </Button>
            </div>
        </div>
    )
}

interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
    image?: string,
    name: string,
    message: string
}

export const Chat = ({
    image,
    name,
    message
}: ChatProps) => {
    return <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
        <div className="flex-shrink-0 flex flex-col relative items-end">
            <div>
                <div className="pt-0.5">
                    <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                        <div className="relative flex">
                            {/* <img
                            alt="User"
                            loading="lazy"
                            width={24}
                            height={24}
                            decoding="async"
                            data-nimg={1}
                            className="rounded-sm"
                            src="https://lh3.googleusercontent.com/a/AEdFTp4kDubG-lynDSqOaGFXoFxzBeDmupUkumR0SaEZ=s96-c"
                            style={{ color: "transparent" }}
                        /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex w-full flex-col">
            <div className={cn(
                "font-semibold select-none",
                `${name === "You" ? "text-orange-600" : "text-green-600"}`,
            )}>{name}</div>
            <div className="flex-col gap-1 md:gap-3">
                <div className="flex flex-grow flex-col max-w-full">
                    <div
                        data-message-author-role="user"
                        data-message-id="aaa221ac-7215-4871-a3bb-5d052740f11a"
                        className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&]:mt-5 overflow-x-auto"
                    >
                        <div className="">{message}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}