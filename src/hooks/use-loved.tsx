import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { Product } from "@/interfaces/product";



interface Props {
    lovedItems: Product[],
    addLove: (data: Product) => void,
    removeLoved: (id: number) => void,
}
export const useLoved = create(persist<Props>((set, get) => ({

    lovedItems: [],
    addLove: (data: Product) => {
        const currentItems = get().lovedItems;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
            return toast({
                title: "Error",
                description: "Ya existe este item en la lista de deseos",
                duration: 3000,
            });
        }

        set({
            lovedItems: [...get().lovedItems, data]
        });
        toast({
            title: "Agregado a la lista de deseos",
            duration: 3000,
        });
    },
    removeLoved: (id: number) => {
        set({
            lovedItems: get().lovedItems.filter((item) => item.id !== id)
        });
        toast({
            title: "Eliminado de la lista de deseos",
            duration: 3000,
        });
    },

}),
    {

        name: 'loved',
        storage: createJSONStorage(() => localStorage)
    }
));
