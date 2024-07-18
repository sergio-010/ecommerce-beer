/* eslint-disable @next/next/no-img-element */

import IconButton from "@/components/icon-burron";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Product } from "@/interfaces/product";
import { formatPrice } from "@/lib/formatPrice";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    product: Product;
}


const ProductCard = ({ product }: ProductCardProps) => {
    const images = Array.isArray(product.attributes.images.data)
        ? product.attributes.images.data
        : [product.attributes.images.data];

    const router = useRouter();

    return (
        <Link href={` /product/${product.attributes.slug}`}
            className="relative p-2 transition-all rounded-lg hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4 ">
                <p className="px-2 py-1 text-xs text-white bg-black dark:bg-white dark:text-black rounded">{product.attributes.taste}</p>
                <p className="px-2 py-1 text-xs text-white bg-black dark:bg-white dark:text-black rounded">{product.attributes.origin}</p>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id} className="group">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                                alt={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.productName}`}
                                className="w-[270px] h-[200px] object-cover"
                            />
                            <div className="absolute w-full px-6 transition opacity-0 duration-200 hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={() => router.push(`/product/${product.attributes.slug}`)} icon={<Expand size={20} className="text-gray-600" />} />
                                    <IconButton onClick={() => router.push(`/product/${product.attributes.slug}`)} icon={<ShoppingCart size={20} className="text-gray-600" />} />

                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <p className="text-lg font-bold">{product.attributes.productName}</p>
            <p className="text-sm">{formatPrice(product.attributes.price)}</p>
        </Link>
    );
}

export default ProductCard;
