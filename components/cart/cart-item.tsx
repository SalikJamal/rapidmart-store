import { IProduct } from "@/lib/types"

interface ICartItemProps {
    data: IProduct;
}


export default function CartItem({ data }: ICartItemProps) {
    return (
        <div>
            Cart Item
        </div>
    )
}