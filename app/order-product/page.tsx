'use client'
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()
    function handleClick(): void {
        router.push("/")
        // router.forward()
        // router.back()
        // router.replace()
    }

    return (
        <>
            <h1>Order Product Page</h1>
            <button onClick={handleClick}>Complete Order</button>
        </>
    )
}