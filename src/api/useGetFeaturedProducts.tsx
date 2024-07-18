import { useEffect, useState } from "react"
export function useGetFeaturedProducts() {
    const url =
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                setResult(data.data)
                setLoading(false)
            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [url])

    return { result, loading, error }
}