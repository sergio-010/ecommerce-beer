/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface CarouselProductProps {
    images: {
        data: {
            id: number;
            attributes: {
                url: string;
            }
        }
    }
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props;

    // Verifica que images y images.data sean válidos
    if (!images || !images.data) {
        return null; // O algún UI de fallback
    }

    const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data.attributes.url}`;

    return (
        <div className='sm:px-16 md:px-0'>
            <img
                src={imageUrl}
                alt='Product Image'
                className="w-full h-full object-cover"
            />

        </div>
    );
}

export default CarouselProduct;
