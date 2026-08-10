import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-serif text-7xl font-bold text-gold md:text-8xl">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-cream md:text-4xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-cream-dim">
        The page you're looking for doesn't exist or has moved. If you need help with a criminal
        matter, we're here 24/7.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/" className="btn-gold">
          <Home width={18} height={18} /> Back Home
        </Link>
        <a href={site.phoneHref} className="btn-outline">
          <Phone width={18} height={18} /> Call {site.phone}
        </a>
      </div>
    </section>
  );
}
