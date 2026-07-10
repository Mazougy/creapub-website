"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioItems } from "@/lib/content";

const filters = ["Tous", "Restaurants", "Hôtels", "Usines", "Commerce de détail", "Cliniques", "Immobilier"];
const ALL_FILTER = "Tous";

export function Portfolio() {
  const [active, setActive] = useState(ALL_FILTER);
  const visibleItems = active === ALL_FILTER ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Portfolio"
          title="Systèmes de visibilité sélectionnés dans des environnements exigeants."
          description="Chaque projet équilibre l'impact de la marque, la réalité du site, le comportement des matériaux et le flux client."
        />

        <div className="mb-9 -mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0" aria-label="Filtres de catégorie du portfolio">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`shrink-0 min-h-10 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                active === filter
                  ? "border-brand bg-brand text-white shadow-sm"
                  : "border-brand/15 bg-white text-navy/65 hover:border-brand/35 hover:text-navy"
              }`}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-5 lg:columns-2 xl:columns-3">
          {visibleItems.map((item, index) => (
            <article
              key={item.title}
              className={`mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-brand/12 bg-white shadow-sm ${
                index % 3 === 0 ? "md:[&_.project-image]:aspect-[4/5]" : ""
              }`}
            >
              <div className="project-image relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} project before and after placeholder`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-4 top-4 flex justify-between text-xs font-semibold uppercase tracking-[0.14em]">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-navy/70">Avant</span>
                  <span className="rounded-full bg-brand px-3 py-1 text-white">Après</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-brand">{item.category}</p>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-navy/30" aria-hidden="true" />
                </div>
                <p className="mt-4 leading-7 text-navy/55">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
