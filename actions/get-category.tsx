import { ICategory } from "@/lib/types"


const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export const getCategory = async (id: string): Promise<ICategory> => {
    const res = await fetch(`${URL}/${id}`)
    return res.json()
}