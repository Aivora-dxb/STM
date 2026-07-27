import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/index";

/** Shared shell for legal/policy draft pages. */
export function LegalPage({
  title,
  breadcrumb,
  children,
}: {
  title: string;
  breadcrumb: { name: string; href: string };
  children: ReactNode;
}) {
  const updated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });

  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, breadcrumb]} />
      <article className="container-x py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span>Last updated: {updated}</span>
          <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-amber-300">
            Draft — pending legal review
          </span>
        </div>
        <div className="prose-legal mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-slate-300">
          {children}
        </div>
      </article>
    </>
  );
}
