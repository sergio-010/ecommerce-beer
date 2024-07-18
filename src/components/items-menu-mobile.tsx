import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (

        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col justify-center items-center">
                <Link href="/category/beers">Cerveza</Link>
                <Link href="/category/wiskeys">Vinos</Link>
                <Link href="/category/wiskeys">Wiskies</Link>
            </PopoverContent>
        </Popover>

    );
}

export default ItemsMenuMobile;