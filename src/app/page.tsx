import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/products/">
        <button className="bg-black text-white cursor-pointer">
          Ir a products
        </button>
      </Link>
    </div>
  );
}
