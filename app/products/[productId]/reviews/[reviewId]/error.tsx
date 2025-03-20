'use client'
export default function Error({error, reset}: {error: Error, reset: () => void}) {
    return (
        <>
            <h2>This is an erro page: {error.message}</h2>
            <p>This will be show in prod on error in dev as server-side-error</p>
            <button onClick={reset}>Try Again</button>
        </>
    )
}