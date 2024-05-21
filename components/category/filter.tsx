import { ISize } from "@/lib/types"

interface IFilterProps {
    valueKey: string;
    name: string;
    data: ISize[];
}


export default function Filter({ valueKey, name, data }: IFilterProps) {
    return (
        <div>Filter</div>
    )
}