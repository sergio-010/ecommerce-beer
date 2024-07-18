import Link from "next/link";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center ">
            <h2 className="uppercase text-3xl font-bold text-primary"> consigue descuentos</h2>
            <h3 className="mt-3 font-semibold">En todos nuestros productos</h3>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8">
                <Link href="/category/beers" className="bg-primary text-white py-2 px-4 mt-8 rounded-md">Comprar</Link>
            </div>


        </div>
    );
}

export default BannerDiscount;