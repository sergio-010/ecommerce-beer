import { Product } from "@/interfaces/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";

interface CartStore {
    items: Product[],
    add: (data: Product) => void,
    removeItem: (id: number) => void,
    removeAll: () => void,
}

export const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            add: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === data.id);

                if (existingItem) {
                    return toast({
                        title: "Error",
                        description: "Ya existe este item en el carrito",
                        duration: 3000,
                    });
                }
                set({
                    items: [...get().items, data]
                });
                toast({
                    title: "Agregado al carrito",
                    description: "Se agregó un nuevo item al carrito",
                    duration: 3000,
                });
            },
            removeItem: (id: number) => {
                set({
                    items: get().items.filter((item) => item.id !== id)
                });
                toast({
                    title: "Eliminado del carrito",
                    description: "Se eliminó un item del carrito",
                    duration: 3000,
                });
            },
            removeAll: () => {
                set({
                    items: []
                });
                toast({
                    title: "Carrito vaciado",
                    description: "Se vació el carrito",
                    duration: 3000,
                });
            }
        }),

        {
            name: "cart",
            storage: createJSONStorage(() => localStorage)
        }

    )
);
