"use client"

import Image from "next/image"
import { Tab } from "@headlessui/react"
import { IImage } from "@/lib/types"
import GalleryTab from "@/components/gallery/gallery-tab"

interface IGalleryProps {
    images: IImage[];
}


export default function Gallery({ images }: IGalleryProps) {
    return (
        <Tab.Group className="flex flex-col-reverse" as="div">
            <div className="mx-auto mt-6 hidden sm:block w-full max-w-2xl lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map(image => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
        </Tab.Group>
    )
}