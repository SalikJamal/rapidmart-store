"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { IColor, ISize } from "@/lib/types"
import Button from "@/components/ui/button"
import { Dialog } from "@headlessui/react"

interface IMobileFiltersProps {
    sizes: ISize[];
    colors: IColor[];
}


export default function MobileFilters({ sizes, colors }: IMobileFiltersProps) {
    
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
    

    return (
        <>
            <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
                Filters
                <Plus size={20} />
            </Button>

            <Dialog
                className="relative z-40 lg:hidden" 
                open={open}
                onClose={onClose}
                as="div"
            >
                {/* Background */}
                <div className="fixed inset-0 bg-black/25" />

                {/* Dialog Position */}
                <div className="fixed inset-0 z-40 flex">
                    
                </div>
            </Dialog>
        </>
    )
}