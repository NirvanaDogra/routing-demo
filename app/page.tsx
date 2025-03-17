import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1> This is the home page at  '/'</h1>
      <ul>
        <li><a href="/profile">profile</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/login">Login takes to /login not /auth/login</a></li>
        <li><a href="/register">Login takes to /register not /auth/register</a></li>
      </ul>

    </div>
  );
}