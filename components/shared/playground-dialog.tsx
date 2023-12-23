import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";

interface PlaygroundDialogProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    src?: string;
}

export const PlaygroundDialog = ({ title, src }: PlaygroundDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button disabled={src ? false : true}>Load SOLIDE</Button>
            </DialogTrigger>
            <DialogContent className="max-w-full min-h-max">
                <DialogTitle>{title || "Solide IDE"}</DialogTitle>

                <div className="flex items-center justify-center">
                    <iframe src={src} width="100%" height="500px" allow="clipboard-write" />
                </div>
            </DialogContent>
        </Dialog>
    )
}