import Link from "next/link";

export default function Archived() {
    return (
        <>
        <h1>Archived /complex-dashabord/archived</h1>
        <p>This will change the url but. chages this but does not change the unmatched slot</p>
        <p>Typing the url gives an error (not-found)</p>
        <Link href="/complex-dashboard">Default view</Link>
        </>
    )
}