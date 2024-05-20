import Image from "next/image"
import { Tab } from "@headlessui/react"
import { IImage } from "@/lib/types"
import { cn } from "@/lib/utils"

interface IGalleryTabProps {
    image: IImage;
}


export default function GalleryTab({ image }: IGalleryTabProps) {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute size-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image
                            className="object-cover object-center"
                            src={image.url}
                            alt="Product image"
                            fill
                        />
                    </span>
                    <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2", selected ? "ring-black" : "ring-transparent")} />
                </div>
            )}
        </Tab>
    )
}