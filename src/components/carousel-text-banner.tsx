'use client'
import Autoplay from "embla-carousel-autoplay"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

export const data = [
    {
        id: 1,
        title: 'Envio',
        description: '24/7',
        link: '/category/beers',
    },
    {
        id: 2,
        title: 'Second slide label',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/category/wiskeys',
    },
    {
        id: 3,
        title: 'Third slide label',
        description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        link: '/category/wiskeys',
    },
    {
        id: 4,
        title: 'Fourth slide label',
        description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        link: '/category/wiskeys',
    },
];

const CarouselTextBanner = () => {
    const router = useRouter();
    return (
        <div className="bg-gray-200 dark:bg-primary ">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[Autoplay({ delay: 3000 })]} >
                <CarouselContent>
                    {data.map(({ id, title, description, link }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)}
                            className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent" >
                                    <CardContent className="flex flex-col justify-center items-center p-2 text-center ">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

    );
}

export default CarouselTextBanner;