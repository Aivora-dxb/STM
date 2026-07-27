"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Industrial hero.
 * Adapted from the 21st.dev "GlassRefractionHero" (dhileepkumargm) — the
 * animated glass-strip + gradient-blob structure is reused, but the neon-blue
 * palette, perpetual rotation and giant type were retuned to STM's restrained
 * navy/steel identity: slow ambient drift, calmer type, real navigation CTAs,
 * and full prefers-reduced-motion support. See CONTENT_REVIEW.md.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-navy-950"
      aria-label="Introduction"
    >
      {/* Ambient gradient blobs — slow drift, low intensity */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Blob
          reduce={reduce}
          style={{ width: "48vw", height: "48vw", left: "-8vw", top: "-6vw" }}
          gradient="radial-gradient(circle, rgba(63,110,165,0.42) 0%, rgba(15,31,54,0) 68%)"
          dur={34}
          dx={40}
        />
        <Blob
          reduce={reduce}
          style={{ width: "42vw", height: "42vw", right: "-6vw", top: "20vh" }}
          gradient="radial-gradient(circle, rgba(30,53,96,0.55) 0%, rgba(15,31,54,0) 70%)"
          dur={40}
          dx={-50}
        />
      </div>

      {/* Vertical glass light strips */}
      <div
        className="pointer-events-none absolute inset-0 flex flex-row opacity-60"
        aria-hidden="true"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1"
            style={{
              background:
                "linear-gradient(90deg, rgba(155,160,170,0) 0%, rgba(10,22,38,0.5) 78%, rgba(183,188,196,0.12) 100%)",
              mixBlendMode: "overlay",
            }}
          />
        ))}
      </div>

      {/* Engineering grid wash */}
      <div className="eng-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Content */}
      <div className="container-x relative z-10 py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-5">Dubai · United Arab Emirates</p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Industrial machinery, equipment and{" "}
            <span className="text-accent-400">factory solutions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            STM MACHINERY supplies machinery, industrial equipment and spare parts,
            and supports factory projects across the UAE and the wider region — from
            a single machine to a complete production line.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/request-a-quotation" className="btn-primary">
              Request a quotation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/products-and-solutions" className="btn-secondary">
              Explore our solutions
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into page */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-navy-950"
        aria-hidden="true"
      />
    </section>
  );
}

function Blob({
  style,
  gradient,
  dur,
  dx,
  reduce,
}: {
  style: React.CSSProperties;
  gradient: string;
  dur: number;
  dx: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ ...style, background: gradient, filter: "blur(60px)" }}
      animate={reduce ? undefined : { x: [0, dx, 0], y: [0, -dx / 2, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
