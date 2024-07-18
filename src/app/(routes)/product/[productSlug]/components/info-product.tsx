import { Separator } from "@/components/ui/separator";
import { Product } from "@/interfaces/product";
import { formatPrice } from '../../../../../lib/formatPrice';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useLoved } from "@/hooks/use-loved";

interface InfoProductProps {
    product: Product | undefined;
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props;

    const { addLove } = useLoved();

    const { add } = useCart();

    if (!product || !product.attributes) {
        return <p>Loading...</p>; // O algún UI de fallback
    }

    return (
        <div className="pX-6">
            <div className="gap-3 flex  justify-between mb-3 sm:flex ">
                <h1 className="text-2xl font-bold">{product.attributes.productName}</h1>
                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-xs text-white bg-black dark:bg-white dark:text-black rounded">
                        {product.attributes.taste}
                    </p>
                    <p className="px-2 py-1 text-xs text-white bg-black dark:bg-white dark:text-black rounded">
                        {product.attributes.origin}
                    </p>
                </div>
            </div>
            <Separator />
            <p>{product.attributes.description}</p>
            <Separator />
            <p className="font-bold">{formatPrice(product.attributes.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full" onClick={() => add(product)}>comprar</Button>
                <Heart strokeWidth={1} className="transition cursor-pointer duration-300 hover:fill-red-600"
                    onClick={() => { addLove(product) }} />
            </div>
        </div>
    );
}

export default InfoProduct;
