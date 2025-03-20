import Link from "next/link";

export default function InterceptedRoute() {
    return (
        <>
            <h1>This page has the capability to intercept the route</h1>
            <Link href="/intersepted-route/nextPage">Next page</Link>
        </>
)
}