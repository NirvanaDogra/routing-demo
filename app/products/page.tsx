import Link from "next/link";

export default function Products() {
    return (
        <div>
            <h1> This is the products page at '/products'</h1>
            <ul>
                <li><Link href="/products/1" replace>Product 1</Link></li>
                <li><Link href="/products/2">Product 2</Link></li>
                <li><Link href="/products/3">Product 3</Link></li>
            </ul>
        </div>

    );
}