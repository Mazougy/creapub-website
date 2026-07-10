"use client";

import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Buttons";
import { company, targetMarkets } from "@/lib/content";

const stats = [
  { label: "Fondée", value: parseInt(company.founded), prefix: "" },
  { label: "Services clés", value: 12, suffix: "+" },
  { label: "Secteurs ciblés", value: 7, suffix: "+" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100dvh] overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-industrial.svg"
          alt="Premium industrial signage production environment with illuminated brand elements"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.15]"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/90 to-white" />

      <div className="container-padded relative grid min-h-[calc(100dvh-6rem)] items-center py-12 sm:min-h-[calc(100dvh-7rem)] sm:py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-sm text-navy/70 shadow-sm">
            <Sparkles className="h-4 w-4 text-brand" aria-hidden="true" />
            {company.slogan}
          </div>
          <h1 className="font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-navy sm:text-4xl md:text-5xl lg:text-6xl">
            Communication visuelle premium pour les marques qui doivent être vues.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-navy/65 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
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
                className="rounded-full border border-brand/12 bg-white/70 px-3 py-1.5 text-xs font-medium text-navy/60 shadow-sm"
              >
                {market}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 rounded-3xl border border-brand/10 bg-white/80 p-5 shadow-sm sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-brand/10 pb-4 last:pb-0 sm:pb-0 ${
                index < stats.length - 1 ? "border-b lg:border-b-0 lg:border-r lg:last:border-r-0" : ""
              }`}
            >
              <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                {stat.prefix}{stat.value}{stat.suffix}
              </p>
              <p className="mt-2 text-sm text-navy/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
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
