
export function formatPrice(price: number) {
    const priceFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    const formattedPrice = priceFormat.format(price)
    return formattedPrice
}