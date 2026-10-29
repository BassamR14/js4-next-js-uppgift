import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact Us</Link>
    </nav>
  );
}
