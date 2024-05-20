import { IProduct } from "@/lib/types"
import qs from "query-string"

interface IQuery {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export const getProducts = async (query: IQuery): Promise<IProduct[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            colorId: query.colorId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        }
    })
    
    const res = await fetch(url)
    return res.json()
}