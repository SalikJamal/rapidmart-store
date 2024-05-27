"use client"

import { MouseEventHandler } from "react"
import Image from "next/image"
import toast from "react-hot-toast"
import { X } from "lucide-react"
import { IProduct } from "@/lib/types"
import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"

interface ICartItemProps {
    data: IProduct;
}


export default function CartItem({ data }: ICartItemProps) {
    
    const cart = useCart()

    const removeFromCart: MouseEventHandler<HTMLButtonElement> = e => {
        e.stopPropagation()
        cart.removeItem(data.id)
    }

    return (
        <li className="flex py-6 border-b lg:last:border-b-0">
            <div className="relative size-24 rounded-md overflow-hidden sm:size-48">
                <Image
                    className="object-cover object-center"
                    src={data.images[0].url}
                    alt={data.name}
                    fill
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={removeFromCart} icon={<X size={15} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">
                            {data.name}
                        </p>
                    </div>
                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                    </div>
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    )
}