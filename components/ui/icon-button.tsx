import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react"

interface IIconButtonProps {
    icon: React.ReactElement;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement | undefined>;
}


export default function IconButton({ icon, className, onClick }: IIconButtonProps) {
    return (
        <button
            className={cn(`rounded-full flex items-center justify-center 
            bg-white border shadow-md p-2 hover:scale-110 transition`, 
            className)}
            onClick={onClick}
        >
            {icon}
        </button>
    )
}