"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { IColor, ISize } from "@/lib/types"
import Button from "@/components/ui/button"
import { Dialog, DialogPanel } from "@headlessui/react"
import IconButton from "@/components/ui/icon-button"
import Filter from "@/components/category/filter"

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
                    <DialogPanel className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        {/* Close Button */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>

                        {/* Render Filters */}
                        <div className="p-4">
                            <Filter 
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter 
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}