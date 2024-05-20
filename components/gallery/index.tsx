"use client"

import Image from "next/image"
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import { IImage } from "@/lib/types"
import GalleryTab from "@/components/gallery/gallery-tab"

interface IGalleryProps {
    images: IImage[];
}


export default function Gallery({ images }: IGalleryProps) {
    return (
        <TabGroup className="flex flex-col-reverse" as="div">
            <div className="mx-auto mt-6 hidden sm:block w-full max-w-2xl lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                    {images.map(image => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </TabList>
            </div>
            <TabPanels className="aspect-square w-full">
                {images.map(image => (
                    <TabPanel key={image.id}>
                        <div className="aspect-square relative size-full sm:rounded-ld overflow-hidden">
                            <Image
                                className="object-cover object-center"
                                src={image.url}
                                alt="Image"
                                fill
                            />
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    )
}