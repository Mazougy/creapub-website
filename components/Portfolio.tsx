"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioItems } from "@/lib/content";

const filters = ["Tous", "Restaurants", "Hôtels", "Usines", "Commerce de détail", "Cliniques", "Immobilier"];
const ALL_FILTER = "Tous";

export function Portfolio() {
  const [active, setActive] = useState(ALL_FILTER);
  const visibleItems = useMemo(
    () => (active === ALL_FILTER ? portfolioItems : portfolioItems.filter((item) => item.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Portfolio"
          title="Systèmes de visibilité sélectionnés dans des environnements exigeants."
          description="Chaque projet équilibre l'impact de la marque, la réalité du site, le comportement des matériaux et le flux client."
        />

        <Reveal className="mb-9 -mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0" aria-label="Filtres de catégorie du portfolio">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`shrink-0 min-h-10 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                active === filter
                  ? "border-brand bg-brand text-white shadow-[0_8px_20px_rgba(73,90,168,0.2)]"
                  : "border-brand/15 bg-white text-navy/65 hover:border-brand/35 hover:text-navy"
              }`}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="columns-1 gap-5 lg:columns-2 xl:columns-3">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.article
                layout
                key={item.title}
                className={`mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-brand/12 bg-white shadow-soft ${
                  index % 3 === 0 ? "md:[&_.project-image]:aspect-[4/5]" : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.45 }}
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
                    <span className="rounded-full bg-white/85 px-3 py-1 text-navy/70 backdrop-blur">Avant</span>
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
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
