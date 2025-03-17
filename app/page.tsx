import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> This is the home page at  '/' we use LINK</h1>
      <ul>
        <li><Link href="/profile">profile</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/login">Login takes to /login not /auth/login</Link></li>
        <li><Link href="/register">Login takes to /register not /auth/register</Link></li>
      </ul>

    </div>
  );
}