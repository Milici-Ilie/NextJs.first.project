import Link from "next/link";
import Header from "@/components/header";
//@ => root folder

export default function Home() {
  console.log("backend");
  return (
    <main>
      <Header />
      {/* <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1> */}
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  ); //🐱‍🏍🐱‍🏍[LINK SPA]🐱‍🏍🐱‍🏍
}
