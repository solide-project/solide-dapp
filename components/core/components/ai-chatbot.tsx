"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Loader, SendIcon, ThumbsUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { CopyIcon } from "@/components/core/components/copy-icon"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { flock } from "@/lib/helpers"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

interface AIChatBotProps extends React.HTMLAttributes<HTMLDivElement> {
    prompt?: string
}

export default function AIChatBot({
    prompt = "",
    className
}: AIChatBotProps) {
    const { isConnected, address } = useAccount();
    const [input, setInput] = useState<string>("")
    const [processing, setProcessing] = useState<boolean>(false)
    const [chatHistory, setChatHistory] = useState<flock.FlockConversationalResponse[]>([])

    useEffect(() => {
        if (prompt) {
            setInput(prompt)
        }
    }, [prompt])

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/flock/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ address })
            })

            const data: { message: string } = await response.json()
            console.log(data)
        })()
    }, [address])

    const handleCompletion = async () => {
        if (!input) return

        setProcessing(true)
        console.log("input", address)
        const response = await fetch("/api/flock/completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: input, history: chatHistory, address })
        })

        if (!response.ok) {
            console.error("Failed to process request")
            setChatHistory([...chatHistory, {
                answer: "Failed to process request. Please try again later.",
                source_docs: [],
                generated_question: input,
            }])

            setInput("")
            setProcessing(false)
            return
        }
        const data: flock.FlockConversationalResponse = await response.json()
        setChatHistory([...chatHistory, data])

        setInput("")
        setProcessing(false)
    }

    return (
        <div className={cn(className)}>
            <div className="flex items-center justify-center space-x-4 mt-4 border-b py-2">
                <div className="text-3xl font-semibold tracking-tight flex items-center justify-center">
                    Smart Contract GPT 🤖
                </div>
                <ConnectButton />
            </div>
            <div className="h-[50vh] overflow-y-auto">
                <Chat
                    className="my-4"
                    name="Solide GPT (Powered by Flock)"
                    message={"Welcome, copy and paste your smart contract related question here to get started! 🚀"}
                />
                {chatHistory.map((chat, index) => (
                    <div key={index} className="space-y-4">
                        <Chat
                            name="You"
                            message={chat.generated_question}
                        />
                        <Chat
                            type="ai"
                            name="Solide GPT (Powered by Flock)"
                            prompt={chat.generated_question}
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
                    disabled={processing}
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
    type?: "ai" | "user",
    image?: string,
    name: string,
    prompt?: string,
    message: string
}

export const Chat = ({
    type = "user",
    image,
    name,
    prompt = "",
    message,
    className
}: ChatProps) => {
    const { address } = useAccount();
    const [hasContributed, setHasContributed] = useState<boolean>(false)

    useEffect(() => {
        if (address) {
            setHasContributed(false)
        }
    }, [address])

    const handleFlockContribute = async () => {
        if (hasContributed) {
            return;
        }

        const response = await fetch("/api/flock/contribution", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt, data: message })
        })
        const data: flock.FlockContributionResponse = await response.json()

        console.log(data)
        setHasContributed(true);
    }

    return <div className={cn("flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group pb-8", className)}>
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
                        {type === "ai" && <div className="flex space-x-2">
                            <CopyIcon copyIcon="lucide:clipboard" payload={message}
                                height={18} />
                            <Tooltip>
                                <TooltipTrigger>
                                    {!address ?
                                        <ThumbsUp color="grey" className="cursor-not-allowed" height={18} />
                                        : <div>
                                            {!hasContributed
                                                ? <ThumbsUp onClick={handleFlockContribute} height={18} />
                                                : <ThumbsUp color="green" height={18} />}
                                        </div>}
                                </TooltipTrigger>
                                <TooltipContent>
                                    {!address ?
                                        <p>Connect wallet to contribute Flock model. Rewards Coming Soon 🎉</p>
                                        : <p>{!hasContributed
                                            ? "Like the response? Help improve the Flock AI, by sending this response for training 😊"
                                            : "Thanks for contributing to Flock AI! 🎉"
                                        }</p>}
                                </TooltipContent>
                            </Tooltip>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
}