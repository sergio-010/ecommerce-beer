'use client'
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from '../../../lib/formatPrice';
import { Button } from "@/components/ui/button";
import CartItem from "./components/cart-item";
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from "@/api/payment";

export default function Page() {

    const { items, removeAll } = useCart();
    const prices = items.map((product => product.attributes.price));
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

    const buyStripe = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post('/api/orders', {
                products: items
            });
            await stripe?.redirectToCheckout({
                sessionId: res.data.id

            });
            removeAll()
        } catch (error) {
            console.error(error);
        }
    }
    const totalPrice = () => {
        return prices.reduce((total, price) => total + price, 0);
    }
    return (
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

            <p className="text-3xl font-bold mb-5">Cart</p>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 && (
                        <p>Your cart is empty</p>
                    )}
                    <ul>
                        {items.map((item) => (

                            <CartItem key={item.id} product={item} />

                        ))}
                    </ul>

                </div>
                <div className="max-w-xl ">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="text-3xl font-bold">Total</p>
                        <Separator />
                        <div className="flex  justify-between gap-5 my-4">
                            <p>Subtotal</p>
                            <p>{formatPrice(totalPrice())}</p>

                        </div>
                        <div className="flex items-center justify-between gap-5 my-4">
                            <Button className="w-full" onClick={buyStripe} > Comprar</Button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
