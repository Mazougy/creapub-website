"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { LinkButton } from "@/components/ui/Buttons";
import { company, targetMarkets } from "@/lib/content";

const stats = [
  { label: "Founded", value: 2025, prefix: "" },
  { label: "Core services", value: 12, suffix: "+" },
  { label: "Target sectors", value: 7, suffix: "+" },
];

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 120]);
  const shapeY = useTransform(scrollY, [0, 700], [0, -90]);

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-28 hero-mask">
      <motion.div className="absolute inset-0 -z-20" style={{ y: imageY }}>
        <Image
          src="/images/hero-industrial.svg"
          alt="Premium industrial signage production environment with illuminated brand elements"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-72"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_16%,rgba(212,175,55,0.2),transparent_28rem),linear-gradient(90deg,rgba(5,5,5,0.96),rgba(5,5,5,0.74)_48%,rgba(5,5,5,0.42))]" />
      <div className="noise" />

      <motion.div
        className="absolute right-[8%] top-32 hidden h-48 w-48 rounded-lg border border-gold/20 bg-gold/8 backdrop-blur-xl lg:block"
        style={{ y: shapeY, rotate: 8 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-28 right-[18%] hidden h-24 w-24 rounded-full border border-white/12 bg-white/5 backdrop-blur-lg md:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="container-padded relative grid min-h-[calc(100vh-7rem)] items-center py-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm text-white/78 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            {company.slogan}
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[0.96] tracking-normal text-white md:text-7xl lg:text-8xl">
            Premium visual communication for brands that need to be seen.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Creapub transforms restaurants, hotels, factories, clinics, retail spaces, real estate launches, and events into visible, memorable brand environments.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#contact" aria-label="Request a quote from Creapub">
              Request a Quote
            </LinkButton>
            <LinkButton href="#portfolio" variant="secondary" aria-label="View Creapub portfolio">
              View Selected Work
            </LinkButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" aria-label="Target markets">
            {targetMarkets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-white/64"
              >
                {market}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass-panel mt-14 grid gap-6 rounded-lg p-5 md:grid-cols-3 md:p-6"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-white/10 md:border-r md:last:border-r-0">
              <p className="font-display text-3xl font-semibold text-white md:text-4xl">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-white/55">
                <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-white/50 transition hover:text-white md:flex"
        aria-label="Scroll to services"
      >
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
        Explore
      </a>
    </section>
  );
}
