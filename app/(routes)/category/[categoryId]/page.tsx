export const revalidate = 0

import { getCategory } from "@/actions/get-category"
import { getColors } from "@/actions/get-colors"
import { getProducts } from "@/actions/get-products"
import { getSizes } from "@/actions/get-sizes"
import Billboard from "@/components/billboard"
import Filter from "@/components/category/filter"
import Container from "@/components/ui/container"

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
    
    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })
    
    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Add Mobile Filters */}
                        <div className="hidden lg:block">
                            <Filter 
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}