import { IReactChildren } from "@/lib/types"


export default function Container({ children }: IReactChildren) {
    return (
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
    )
}