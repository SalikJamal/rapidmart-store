export const revalidate = 0

import { getProducts } from "@/actions/get-products"

interface ICategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}


export default async function CategoryPage({ params, searchParams }: ICategoryPageProps) {
    
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })
    
    return (
        <div>Category Page</div>
    )
}