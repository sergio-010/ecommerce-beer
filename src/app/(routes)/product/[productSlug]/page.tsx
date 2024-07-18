'use client';
import { useParams } from "next/navigation";
import { Featured } from '../../../../interfaces/featured';
import { useGetProductSlug } from "@/api/getProductSlug";
import CarouselProduct from './components/carousel-product';
import InfoProduct from "./components/info-product";

export default function Page() {
    const params = useParams();
    const { productSlug } = params;
    const { result, loading }: Featured = useGetProductSlug(productSlug);
    if (result === null) {
        return <p>Loading...</p>
    }

    return (
        <div className="max-w-6xl mx-auto py-4 sm:py32 sm:px-24">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3">
                <div className="grid sm:grid-cols-2">
                    <CarouselProduct images={result[0]?.attributes?.images} />
                </div>
                <div className="sm:px-12">

                    <InfoProduct product={result[0]} />
                </div>

            </div>

        </div>
    )
}
