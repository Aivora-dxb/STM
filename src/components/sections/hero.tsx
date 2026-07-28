"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../../../public/images/hero-cnc.jpg";

/**
 * Industrial hero with an animated CNC-machining photo background.
 * The photo (supplied by STM) sits behind a dark navy overlay so the white
 * heading stays readable (WCAG contrast). A slow "Ken Burns" zoom/pan gives
 * subtle motion; a faint moving highlight sweeps across to suggest activity.
 * All motion is disabled under prefers-reduced-motion. No autoplay video, so
 * it stays fast on mobile.
 *
 * IMAGE: public/images/hero-cnc.jpg — supplied by client. Licensing to be
 * confirmed and recorded in IMAGE_SOURCES.md.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-navy-950"
      aria-label="Introduction"
    >
      {/* Photo background with slow zoom/pan */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.12, x: 8 }}
        animate={reduce ? undefined : { scale: 1, x: 0 }}
        transition={{ duration: 18, ease: "easeOut" }}
        aria-hidden="true"
      >
        <Image
          src={heroImg}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark navy overlays for readability + brand tint */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-navy-950/60"
        aria-hidden="true"
      />

      {/* Faint sweeping highlight to suggest motion/activity */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-1/3"
          style={{
            background:
              "linear-gradient(90deg, rgba(123,166,216,0) 0%, rgba(123,166,216,0.10) 50%, rgba(123,166,216,0) 100%)",
          }}
          initial={{ left: "-33%" }}
          animate={{ left: ["-33%", "133%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
          aria-hidden="true"
        />
      )}

      {/* Engineering grid wash */}
      <div className="eng-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

      {/* Content */}
      <div className="container-x relative z-10 py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl">
            Industrial machinery, equipment and{" "}
            <span className="text-accent-400">factory solutions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
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
