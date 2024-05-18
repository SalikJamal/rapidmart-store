"use client"

import { IProduct } from "@/lib/types"
import Image from "next/image"
import IconButton from "@/components/ui/icon-button"
import { Expand, ShoppingCart } from "lucide-react"

interface IProductCardProps {
    data: IProduct;
}


export default function ProductCard({ data }: IProductCardProps) {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}

            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    className="aspect-square object-cover rounded-md"
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Product Image"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                            onClick={() => {}}
                            icon={<Expand className="text-gray-600" size={20} />}
                        />
                        <IconButton 
                            onClick={() => {}}
                            icon={<ShoppingCart className="text-gray-600" size={20} />}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="">
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                {/* <Currency value={data?.price} /> */}
            </div>
        </div>
    )
}