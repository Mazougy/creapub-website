"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { LinkButton } from "@/components/ui/Buttons";
import { company, targetMarkets } from "@/lib/content";

const stats = [
  { label: "Fondée", value: 2025, prefix: "" },
  { label: "Services clés", value: 12, suffix: "+" },
  { label: "Secteurs ciblés", value: 7, suffix: "+" },
];

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 120]);
  const shapeY = useTransform(scrollY, [0, 700], [0, -90]);

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-28">
      <motion.div className="absolute inset-0 -z-20" style={{ y: imageY }}>
        <Image
          src="/images/hero-industrial.svg"
          alt="Premium industrial signage production environment with illuminated brand elements"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.22]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(110,140,220,0.2),transparent_32rem),radial-gradient(circle_at_12%_88%,rgba(73,90,168,0.1),transparent_28rem),linear-gradient(180deg,#fdfcf8_0%,rgba(238,243,255,0.85)_55%,#ffffff_100%)]" />
      <div className="noise" />

      <motion.div
        className="absolute right-[8%] top-32 hidden h-48 w-48 rounded-3xl border border-brand/15 bg-brand/8 shadow-soft backdrop-blur-xl lg:block"
        style={{ y: shapeY, rotate: 8 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-28 right-[18%] hidden h-24 w-24 rounded-full border border-brand/12 bg-white/60 shadow-soft backdrop-blur-lg md:block"
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-sm text-navy/70 shadow-soft backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-brand" aria-hidden="true" />
            {company.slogan}
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-navy md:text-7xl lg:text-8xl">
            Communication visuelle premium pour les marques qui doivent être vues.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-navy/65 md:text-xl">
            Creapub transforme restaurants, hôtels, usines, cliniques, espaces commerciaux, lancements immobiliers et événements en environnements de marque visibles et mémorables.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#contact" aria-label="Demander un devis à Creapub">
              Demander un devis
            </LinkButton>
            <LinkButton href="#portfolio" variant="secondary" aria-label="Voir le portfolio de Creapub">
              Voir les réalisations
            </LinkButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" aria-label="Marchés cibles">
            {targetMarkets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-brand/12 bg-white/70 px-3 py-1.5 text-xs font-medium text-navy/60 shadow-sm backdrop-blur-sm"
              >
                {market}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass-panel mt-14 grid gap-4 rounded-3xl p-5 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-brand/10 pb-4 last:pb-0 sm:pb-0 ${
                index < stats.length - 1 ? "border-b lg:border-b-0 lg:border-r lg:last:border-r-0" : ""
              }`}
            >
              <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-navy/60">
                <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" />
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-navy/45 transition hover:text-brand md:flex"
        aria-label="Scroll to services"
      >
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
        Explorer
      </a>
    </section>
  );
}
