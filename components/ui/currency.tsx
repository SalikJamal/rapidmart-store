import { formatter } from "@/lib/utils"

interface ICurrencyProps {
    value?: string | number;
}


export default function Currency({ value }: ICurrencyProps) {
    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}