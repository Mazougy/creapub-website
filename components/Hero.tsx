"use client";

import Image from "next/image";
import { ArrowDown, Megaphone, Sparkles, Target, Wand2 } from "lucide-react";
import { LinkButton } from "@/components/ui/Buttons";
import { company } from "@/lib/content";

const stats = [
  { label: "Fondée", value: parseInt(company.founded), prefix: "" },
  { label: "Services clés", value: 12, suffix: "+" },
  { label: "Solutions publicitaires", value: 7, suffix: "+" },
];

const highlights = [
  {
    icon: Megaphone,
    title: "Produits publicitaires de qualité",
    detail:
      "Panneaux A-frame portables, mascottes gonflables, panneaux LED et bien plus.",
  },
  {
    icon: Target,
    title: "Impossible à ignorer",
    detail:
      "Chaque produit est conçu pour attirer l'attention et stimuler vos ventes.",
  },
  {
    icon: Wand2,
    title: "Créativité sur mesure",
    detail:
      "Une équipe dédiée transforme vos idées en solutions personnalisées.",
  },
];


export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/creapub-hero-bg.jpg"
          alt="Creapub brand background"
          fill
          priority
          sizes="100vw"
          className="scale-[1.03] object-cover blur-[5px]"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-white/25 to-white/55" />

      <div className="container-padded flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center pb-28 pt-16 md:pb-32">

        {/* Hero Content */}
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full border border-brand/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-brand" />

            <span className="text-sm font-medium text-navy/70">
              {company.slogan}
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-7xl">
            Creapub
            <br />
            Vos Solutions Publicitaires Créatives
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-navy/65 sm:text-xl">
            Creapub est né de l&apos;envie d&apos;aider les commerçants et
            entrepreneurs à se démarquer dans un marché concurrentiel.
            Nous croyons que la créativité et la visibilité vont main dans la
            main.
          </p>

          {/* Highlight Cards */}
          <div className="mt-14 grid w-full gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-3xl border border-brand/10 bg-white/80 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-navy/60">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href="#contact">
              Demander un devis
            </LinkButton>

            <LinkButton href="#portfolio" variant="secondary">
              Voir les réalisations
            </LinkButton>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 rounded-3xl border border-brand/10 bg-white/80 p-8 text-center shadow-lg md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center ${index !== stats.length - 1
                ? "border-b border-brand/10 pb-6 md:border-b-0 md:border-r md:pb-0"
                : ""
                }`}
            >
              <p className="font-display text-5xl font-bold text-brand">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </p>

              <p className="mt-3 text-base text-navy/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-brand/10 bg-white/70 px-5 py-2 text-sm text-navy/60 shadow-sm backdrop-blur transition hover:border-brand hover:text-brand md:flex"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Explorer
      </a>
    </section>
  );
}
