/* eslint-disable @next/next/no-img-element */
'use client';

import { useGetCategories } from "@/api/useGetCategories";
import { Category } from "@/interfaces/category";
import Link from "next/link";

const ChooseCategory = () => {
    const { result, loading } = useGetCategories();

    console.log(result);
    return (
        <div className="max-w-6xl mx-auto py-4 sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Choose Category</h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3">
                {loading && <p>Loading...</p>}
                {!loading && result && result.map((category: Category) => {
                    const { attributes } = category;
                    const { mainImage, categoryName, slug } = attributes;

                    const imageUrl = mainImage.data.attributes.url
                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${mainImage.data.attributes.url}`
                        : '/placeholder-image.jpg';

                    return (
                        <Link key={category.id}
                            href={`/category/${slug}`}
                            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover">
                            <img
                                src={imageUrl}
                                alt={categoryName}
                                className="max-w-[270px] h-[200px] rounded-lg transition duration-300 ease-in-out hover:scale-105" />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-lg font-semibold text-center text-white">{categoryName}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ChooseCategory;
