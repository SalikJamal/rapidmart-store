import { IProduct } from "@/lib/types"

interface IProductListProps {
    items: IProduct[];
    title: string;
}


export default function ProductList({ items, title }: IProductListProps) {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
        </div>
    )
}