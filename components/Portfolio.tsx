"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioItems } from "@/lib/content";

const filters = ["All", "Restaurants", "Hotels", "Factories", "Retail", "Clinics", "Real Estate"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visibleItems = useMemo(
    () => (active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="bg-black py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected visibility systems across demanding environments."
          description="Each project balances brand impression, site reality, material behavior, and customer flow."
        />

        <Reveal className="mb-9 flex flex-wrap justify-center gap-2" aria-label="Portfolio category filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`min-h-10 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                active === filter
                  ? "border-gold bg-gold text-black"
                  : "border-white/12 bg-white/[0.035] text-white/68 hover:border-gold/50 hover:text-white"
              }`}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="columns-1 gap-5 md:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.article
                layout
                key={item.title}
                className={`mb-5 break-inside-avoid overflow-hidden rounded-lg border border-white/10 bg-ink-panel ${
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
                  <div className="absolute inset-x-4 top-4 flex justify-between text-xs font-semibold uppercase tracking-[0.14em] text-white/78">
                    <span className="rounded-full bg-black/55 px-3 py-1 backdrop-blur">Before</span>
                    <span className="rounded-full bg-gold px-3 py-1 text-black">After</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-gold">{item.category}</p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/38" aria-hidden="true" />
                  </div>
                  <p className="mt-4 leading-7 text-white/58">{item.result}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
