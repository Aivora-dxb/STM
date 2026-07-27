import Link from "next/link";
import { mainNav } from "@/content/nav";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow mb-3">Error 404</p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} className="glass-light rounded-full px-4 py-2 text-sm text-slate-200 hover:text-accent-400">
            {item.label}
          </Link>
        ))}
      </div>
      <Link href="/request-a-quotation" className="btn-primary mt-8">Request a quotation</Link>
    </section>
  );
}
