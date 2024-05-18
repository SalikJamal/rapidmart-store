"use client"

import { IProduct } from "@/lib/types"
import Image from "next/image";

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
                <div className="opacity-0 group-hover:opacity-100">
                    <div className="flex gap-x-6 justify-center">
                        {/* <IconButton /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}