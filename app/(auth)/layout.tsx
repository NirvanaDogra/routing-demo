'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

export default function AuthLayout({ children }: { children: Readonly<React.ReactNode> }) {
    const navLink: Array<{ name: string, href: string }> = [
        { name: "login", href: "/login" },
        { name: "register", href: "/register" }
    ]

    const pathname = usePathname()
    const [input, setInput] = useState("")

    return (
        <>
            <div style={{ backgroundColor: "lightblue" }}>
                <div>
                    <p>Layout only mounts the part of the content (need to read more) <br /> the value are keept to avoid this use <em>template</em> insted of layout</p>
                    <input value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <nav>
                    <h3> This is navigation set at auth level</h3>
                    {navLink.map((link: { name: string, href: string }) => {
                        const isActive = pathname.startsWith(link.href)
                        return (
                            <Link href={link.href} key={link.href} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
                {children}
            </div>

        </>

    )
}