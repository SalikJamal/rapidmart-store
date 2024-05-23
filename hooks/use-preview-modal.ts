import { create } from "zustand"
import { IProduct } from "@/lib/types"

interface IPreviewModalStore {
  isOpen: boolean;
  data?: IProduct;
  onOpen: (data: IProduct) => void
  onClose: () => void
}


const usePreviewModal = create<IPreviewModalStore>(set => ({
    isOpen: false,
    data: undefined,
    onOpen: data => set({ data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))


export default usePreviewModal