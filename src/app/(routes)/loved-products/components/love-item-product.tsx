/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLoved } from "@/hooks/use-loved";
import { Product } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { Trash, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface props {

    product: Product
}
const LoveItemProduct = ({ product }: props) => {
    const router = useRouter();
    const { removeLoved } = useLoved();
    const { add } = useCart()

    const addToCheckout = () => {
        add(product)
        removeLoved(product.id)
    }
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.attributes.slug}`)}
            >
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data.attributes.url}`}
                    alt=""
                    className="w-24 h-24 rounded-md overflow-hidden sm:w-auto sm:h-32" />
            </div>
            <div className="flex-1 flex justify-between px-6 ">
                <div>
                    <h2 className="text-gray-900 text-xl font-medium">{product.attributes.productName}</h2>
                    <p className="text-gray-500">${product.attributes.price}</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black">
                            {product.attributes.taste}
                        </p>
                        <p className="px-2 py-1 text-xs text-white bg-red-500 rounded-full dark:bg-white dark:text-black">
                            {product.attributes.origin}
                        </p>
                    </div>
                    <Button className="mt-5 rounded-full" onClick={addToCheckout} >
                        Agregar al carrito
                    </Button>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition")}>
                        <X
                            onClick={() => removeLoved(product.id)}
                            size={20} />
                    </button>
                </div>
            </div>
        </li >
    );
}

export default LoveItemProduct;