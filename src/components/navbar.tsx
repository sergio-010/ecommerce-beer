'use client'

import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { MenuList } from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import { ToggleTheme } from "./toogle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLoved } from "@/hooks/use-loved";

const Navbar = () => {
    const router = useRouter();
    const cart = useCart();
    const { lovedItems } = useLoved()
    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl font-bold" onClick={() => router.push("/")}>Beers</h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2">
                {cart.items.length > 0 && (
                    <div className="flex items-center justify-between gap-2">
                        <p className="px-2 py-1 text-xs text-white bg-black dark:bg-white dark:text-black rounded">
                            {cart.items.length}
                        </p>
                        <ShoppingCart strokeWidth={1} className={`cursor-pointer ${cart.items.length === 0 && "text-gray-400"}`} onClick={() => router.push("/cart")} />
                    </div>
                )}

                <Heart strokeWidth={1} className={`cursor-pointer ${lovedItems.length > 0 && "fill-red-500"}`} onClick={() => router.push("/loved-products")} />
                <User strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/login")} />
                <ToggleTheme />
            </div>
        </div>
    );
}

export default Navbar;