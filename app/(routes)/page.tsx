export const revalidate = 0

import { getBillboard } from "@/actions/get-billboard"
import { getProducts } from "@/actions/get-products"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"
import ProductList from "@/components/product-list"


export default async function HomePage() {
    
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("144e92e7-a956-4000-ba7f-ad1a38a1c98d")
    
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList items={products} title="Featured products" />
                </div>
            </div>
        </Container>
    )
}