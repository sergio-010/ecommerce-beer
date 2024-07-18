/* eslint-disable @next/next/no-img-element */
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/interfaces/product";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
    product: Product
}
const CartItem = (props: CartItemProps) => {

    const { product } = props;
    const router = useRouter();
    const { removeItem } = useCart();
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.attributes.slug}`)} className="cursor-pointer">

                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data.attributes.url}`} alt=""
                    className="w-24 h-24 object-cover overflow-hidden rounded-md m:w-auto sm:h-32" />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-medium">{product.attributes.productName}</h2>
                    <p>{formatPrice(product.attributes.price)}</p>
                    <div className="flex justify-between items-center gap-3">
                        <p className="px-2 py-1 bg-black rounded-full text-white dark:bg-white dark:text-black w-fit">

                            {product.attributes.taste}
                        </p>
                        <p className="px-2 py-1  bg-red-600 rounded-full text-white dark:bg-white dark:text-black w-fit ">

                            {product.attributes.origin}
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeItem(product.id)} />
                    </button>

                </div>


            </div>

        </li >
    );
}

export default CartItem;