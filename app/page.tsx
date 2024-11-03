import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <p>Hello</p> 
      <Link href="/users">users</Link>
      <ProductCard />
    </main>
  );
}
