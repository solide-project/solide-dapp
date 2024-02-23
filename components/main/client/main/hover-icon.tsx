import { getIconByChainId } from "@/lib/chains/icon";
import { ChainID } from "@/lib/chains/id";
import { cn } from "@/lib/utils";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

export const HoverIcons = ({
    background = "bg-primary",
    images = [],
    text,
    className,
}: any) => {
    //#region Get dimensions of the container
    const [dimension, setDimension] = useState({
        width: 0,
        height: 0,
    });
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            if (componentRef.current) {
                setDimension({
                    width: entries[0].contentRect.width,
                    height: entries[0].contentRect.height,
                })
            }
        });

        if (componentRef.current) {
            resizeObserver.observe(componentRef.current);
            setDimension({ width: componentRef.current.offsetWidth, height: componentRef.current.offsetHeight });
        }

        return () => {
            if (componentRef.current) {
                resizeObserver.unobserve(componentRef.current);
            }
        };
    }, []);
    //#endregion

    const handleHover: MouseEventHandler<HTMLDivElement> = (event) => {
        const icons = event.currentTarget.querySelectorAll('.icon');

        icons.forEach((icon: Element, index: number) => {
            if (!(icon as HTMLElement).classList.contains('show')) {
                (icon as HTMLElement).classList.add('show');
                (icon as HTMLElement).style.opacity = "1";
                (icon as HTMLElement).style.transformStyle = "preserve-3d";
                switch (index) {
                    case 0:
                        // BR
                        (icon as HTMLElement).style.transform = `translate3d(${0.6 * dimension.width}px, ${1 / 2 * dimension.height - 28}px, 0)`;
                        break;
                    case 1:
                        // TR
                        (icon as HTMLElement).style.transform = `translate3d(${0.8 * dimension.width}px, ${2 * -dimension.height}px, 0px)`;
                        break;
                    case 2:
                        // BL
                        (icon as HTMLElement).style.transform = `translate3d(${-0.3 * dimension.width}px, ${-0.5 * dimension.height}px, 0px)`;
                        break;
                    case 3:
                        // BBL
                        (icon as HTMLElement).style.transform = `translate3d(${-0.2 * dimension.width}px, ${0.8 * dimension.height}px, 0px)`;
                        break;
                    case 4:
                        // TL
                        (icon as HTMLElement).style.transform = `translate3d(${-0.5 * dimension.width}px, ${-2 * dimension.height}px, 0px)`;
                        break;
                    case 5:
                        // MR
                        (icon as HTMLElement).style.transform = `translate3d(${1.16 * dimension.width}px, ${-0.7 * dimension.height}px, 0px)`;
                        break;
                }
            }
        });
    };

    const handleMouseOut = (event: any) => {
        const icons = event.currentTarget.querySelectorAll('.icon');

        icons.forEach((icon: any) => {
            icon.classList.remove('show');
            (icon as HTMLElement).style.opacity = "0";
            (icon as HTMLElement).style.transformStyle = "preserve-3d";
            (icon as HTMLElement).style.transform = "translate3d(0px, 0px, 0px)";
        });
    };

    return (
        <div className={cn("relative", className)}
            ref={componentRef}
            style={{ display: "inline-block", cursor: "pointer" }}
            onMouseOver={handleHover} onMouseOut={handleMouseOut}>
            <span className={cn("flex py-2 px-3 rounded-lg tilt-div", background)}>{" "}{text || "Hi"}{" "}</span>
            {images.map((url: string, index: number) => {
                return (
                    <img key={index}
                        className="flex items-center justify-center absolute icon z-50"
                        src={url}
                        height={64}
                        width={64}
                        alt="img"
                    />
                )
            })}
        </div>
    );
};
