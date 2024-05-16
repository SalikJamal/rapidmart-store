import { forwardRef, ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}


const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ 
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            className={cn(`w-auto rounded-full bg-black border-transparent 
            px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 
            text-white font-semibold  hover:opacity-75 transition`, className)}
            ref={ref}
            disabled={disabled}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
})


Button.displayName = "Button"

export default Button