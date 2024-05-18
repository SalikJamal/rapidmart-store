import { IProduct } from "@/lib/types"
import NoResults from "@/components/ui/no-results"

interface IProductListProps {
    items: IProduct[];
    title: string;
}


export default function ProductList({ items, title }: IProductListProps) {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {!items.length && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map(item => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}