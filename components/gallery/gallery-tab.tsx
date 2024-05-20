import Image from "next/image"
import { Tab } from "@headlessui/react"
import { IImage } from "@/lib/types"
import { cn } from "@/lib/utils"

interface IGalleryTabProps {
    image: IImage;
}


export default function GalleryTab({ image }: IGalleryTabProps) {
    return (
        <div>Gallery Tab</div>
    )
}