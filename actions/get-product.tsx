import { IProduct } from "@/lib/types"


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export const getProduct = async (id: string): Promise<IProduct> => {
    const res = await fetch(`${URL}/${id}`)
    return res.json()
}