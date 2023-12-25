"use client"

import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

interface HowToUseProps
    extends React.HTMLAttributes<HTMLDivElement> {

}

const items = [
    {
        title: "Metamask",
        description: "Compile your smart contract from GitHub or any existing on-chain contract anytime, anywhere. For deployment and interaction, we recommend using MetaMask as your wallet provider.",
    },
    {
        title: "Via Github Repo",
        description: "Load valid libraries and smart contracts directly from GitHub into Solide IDE for seamless deployment and editing. Simply paste the GitHub URL into the parameters, and Solide will handle the rest.",
    },
    {
        title: "Via contract Address",
        description: "Have a verified on-chain contract you want to explore or clone? Simply paste the contract address, and SOLIDE will load it for you to compile, deploy your own, and interact with existing contracts.",
    },
    {
        title: "Share it!",
        description: "To integrate it into your website, follow the provided iframe code below. This will allow you to effortlessly load, interact, and play with contracts and protocols—all in one place!",
    },
]

export const HowToUse = ({ }: HowToUseProps) => {
    const router = useRouter();
    const { theme } = useTheme();

    return (
        <section className="my-16">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
                            <h3 className="text-3xl font-semibold">How to use Solide</h3>
                            <span className="text-sm font-bold tracki uppercase dark:text-gray-400">Allow users to play with your contracts anywhere!</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-black before:dark:bg-white">
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
                                    <h3 className="text-xl font-semibold tracki">{item.title}</h3>
                                    <p className="mt-3">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}