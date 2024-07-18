import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-producct";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeauturedProduct from '@/components/ui/featured-product';




export default function Home() {
  return (
    <main >
      <CarouselTextBanner />
      <FeauturedProduct />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />

    </main>
  );
}
