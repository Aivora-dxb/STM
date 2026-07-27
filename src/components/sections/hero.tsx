"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Industrial hero with an animated machinery background.
 * Lightweight SVG line-art (rotating gears + moving mechanical rail) layered
 * over the navy engineering grid — evokes machinery in motion without heavy
 * video. Fully disabled under prefers-reduced-motion. No autoplay video, so it
 * stays fast on mobile.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-navy-950"
      aria-label="Introduction"
    >
      <MachineryBackdrop reduce={reduce} />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "46vw", height: "46vw", left: "-10vw", top: "-8vw",
            background: "radial-gradient(circle, rgba(63,110,165,0.38) 0%, rgba(15,31,54,0) 68%)",
            filter: "blur(70px)",
          }}
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "40vw", height: "40vw", right: "-8vw", bottom: "-6vw",
            background: "radial-gradient(circle, rgba(30,53,96,0.5) 0%, rgba(15,31,54,0) 70%)",
            filter: "blur(70px)",
          }}
          animate={reduce ? undefined : { x: [0, -40, 0], y: [0, 24, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-x relative z-10 py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
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

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-navy-950"
        aria-hidden="true"
      />
    </section>
  );
}

function MachineryBackdrop({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="eng-grid absolute inset-0 opacity-40"
        style={reduce ? undefined : { animation: "grid-drift 24s linear infinite alternate" }}
      />

      <svg className="absolute right-[-6%] top-[6%] h-[70vh] w-auto opacity-[0.16]"
        viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g style={{ transformOrigin: "150px 150px" }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
          <Gear cx={150} cy={150} r={90} teeth={16} stroke="#7BA6D8" />
        </motion.g>
        <motion.g style={{ transformOrigin: "285px 235px" }}
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}>
          <Gear cx={285} cy={235} r={62} teeth={12} stroke="#B7BCC4" />
        </motion.g>
      </svg>

      <svg className="absolute left-[-4%] bottom-[-6%] h-[46vh] w-auto opacity-[0.10]"
        viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g style={{ transformOrigin: "150px 150px" }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
          <Gear cx={150} cy={150} r={110} teeth={18} stroke="#5B8DC9" />
        </motion.g>
      </svg>

      <svg className="absolute inset-x-0 bottom-[18%] h-16 w-full opacity-[0.18]"
        preserveAspectRatio="none" viewBox="0 0 1200 40" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="20" x2="1200" y2="20" stroke="#3F6EA5" strokeWidth="1" />
        <motion.line x1="0" y1="20" x2="1200" y2="20" stroke="#7BA6D8" strokeWidth="2"
          strokeDasharray="14 26"
          animate={reduce ? undefined : { strokeDashoffset: [0, -40] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }} />
      </svg>
    </div>
  );
}

function Gear({ cx, cy, r, teeth, stroke }: { cx: number; cy: number; r: number; teeth: number; stroke: string; }) {
  const toothLen = r * 0.16;
  const lines = Array.from({ length: teeth }).map((_, i) => {
    const a = (i / teeth) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * r;
    const y1 = cy + Math.sin(a) * r;
    const x2 = cx + Math.cos(a) * (r + toothLen);
    const y2 = cy + Math.sin(a) * (r + toothLen);
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="3" />;
  });
  return (
    <>
      <circle cx={cx} cy={cy} r={r} stroke={stroke} strokeWidth="3" fill="none" />
      <circle cx={cx} cy={cy} r={r * 0.34} stroke={stroke} strokeWidth="3" fill="none" />
      {lines}
    </>
  );
}
