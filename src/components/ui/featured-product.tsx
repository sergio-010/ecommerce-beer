/* eslint-disable @next/next/no-img-element */
'use client';

import { Featured } from '@/interfaces/featured';
import { useGetFeaturedProducts } from '../../api/useGetFeaturedProducts';
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import SkeletonSchema from '../skeletonSchema';
import { Product } from '../../interfaces/product';
import { Card, CardContent } from './card';
import { Expand, ShoppingCart } from 'lucide-react';
import IconButton from '../icon-burron';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/use-cart';

const FeaturedProduct = () => {
    const { result, loading }: Featured = useGetFeaturedProducts();
    const router = useRouter();

    const { add, items } = useCart();

    console.log(items);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="text-3xl font-bold sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {!loading && result && result.map((product: Product) => {
                        const { id, attributes } = product;
                        const { images, productName, price, slug } = attributes;

                        // Obtener la primera URL de la imagen
                        const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data?.attributes.url}`

                        return (
                            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                <div className="p-1">
                                    <Card className="py-4 border border-gray-200 shadow-none">
                                        <CardContent className="relative flex flex-col justify-center items-center px-6 py-2">
                                            <img
                                                className="w-[200px] h-[200px] object-cover"
                                                src={imageUrl}
                                                alt={productName || 'Product Image'}
                                            />
                                            <div className='absolute w-full px-6 duration-150 opacity-0 group-hover:opacity-100 bottom-5 '>
                                                <div className='flex justify-center gap-x-5'>
                                                    <IconButton
                                                        onClick={() => router.push(`/product/${slug}`)}
                                                        icon={<Expand size={20}
                                                            className='cursor-pointer text-gray-400' />} />
                                                    <IconButton
                                                        onClick={() => add(product)}
                                                        icon={<ShoppingCart size={20}
                                                            className='cursor-pointer text-gray-600' />} />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <div className="flex justify-between items-center px-6 py-2">
                                            <p className="text-lg font-bold">{productName}</p>
                                            <p className="text-lg font-bold">${price}</p>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default FeaturedProduct;
