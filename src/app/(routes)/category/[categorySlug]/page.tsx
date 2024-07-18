'use client';
import { useParams, useRouter } from 'next/navigation';
import { Featured } from '@/interfaces/featured';
import { useGetCategoryProduct } from '@/api/getCategoryProduct';
import { Separator } from '@/components/ui/separator';
import FilterControls from '../components/filter-controls';
import ProductCard from '../components/product-card';
import { Product } from '@/interfaces/product';
import { useState } from 'react';

export default function Page() {
    const params = useParams();
    const { categorySlug } = params;
    const { result, loading }: Featured = useGetCategoryProduct(categorySlug);
    console.log(result);
    const router = useRouter();

    const [filterOrigin, setFilterOrigin] = useState('');
    const [filterTaste, setFilterTaste] = useState('');

    const filteredProducts = result !== null && !loading ? result.filter((product: Product) => {
        return (
            (filterOrigin === '' || product.attributes.origin === filterOrigin) &&
            (filterTaste === '' || product.attributes.taste === filterTaste)
        );
    }) : [];



    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1 className='text-2xl font-bold'>{result[0]?.attributes.category.data.attributes.categoryName}</h1>
            )}
            <Separator />
            <div className='sm:flex sm:justify-between'>
                <FilterControls setFilterOrigin={setFilterOrigin} setFilterTaste={setFilterTaste} />
                <div className='grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10'>
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: Product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                        <p>No products found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
