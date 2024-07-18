'use client';
import { useLoved } from "@/hooks/use-loved"
import LoveItemProduct from "./components/love-item-product";

export default function Page() {
    const { lovedItems } = useLoved()
    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24 ">
            <h1 className="text-3xl font-bold">Productos que te gustan</h1>
            <div>
                <div>

                    {lovedItems.length === 0 && (
                        <p>No hay productos en la lista de deseos</p>
                    )}
                    {lovedItems.map((item) => (
                        <LoveItemProduct key={item.id} product={item} />
                    ))}
                </div>
            </div>
        </div>

    )
}
