import { Filter } from "@/interfaces/filters"
import { useEffect, useState } from "react"

export function useGetProductField() {
    const url =
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`
    const [result, setResult] = useState<Filter | null>(null)
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

