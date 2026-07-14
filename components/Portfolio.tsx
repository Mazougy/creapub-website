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
    <section id="portfolio" className="py-16 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Portfolio"
          title="Nos réalisations, pensées pour être vues."
          description="Découvrez des projets conçus pour clarifier la marque, attirer l'attention et guider les clients dans chaque environnement."
        />

        <div className="mb-9 rounded-2xl border border-brand/10 bg-surface-blue/45 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3 px-1 pb-3 text-sm">
            <span className="font-semibold text-navy">Explorer par secteur</span>
            <span className="text-navy/50" aria-live="polite">
              {visibleItems.length} réalisation{visibleItems.length > 1 ? "s" : ""}
            </span>
          </div>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible" aria-label="Filtres de catégorie du portfolio">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`shrink-0 min-h-10 rounded-xl border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
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
        </div>

        <div className="columns-1 gap-5 lg:columns-2 xl:columns-3">
          {visibleItems.map((item, index) => (
            <article
              key={item.title}
              className={`group mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-brand/12 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-xl ${
                index % 3 === 0 ? "md:[&_.project-image]:aspect-[4/5]" : ""
              }`}
            >
              <div className="project-image relative aspect-[4/3] overflow-hidden bg-navy">
                <Image
                  src={item.image}
                  alt={`${item.title} project before and after placeholder`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{item.category}</p>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-tight text-navy">{item.title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-brand transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
                <p className="mt-4 leading-7 text-navy/60">{item.result}</p>
                <p className="mt-5 text-sm font-semibold text-brand">Découvrir la réalisation</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
