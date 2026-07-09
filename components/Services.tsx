"use client";

import {
  BadgeCheck,
  Box,
  Cog,
  Lightbulb,
  PanelTop,
  Printer,
  Scissors,
  Store,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/content";

const icons = {
  Printer,
  Lightbulb,
  Box,
  Scissors,
  Cog,
  Truck,
  PanelTop,
  Store,
  BadgeCheck,
};

export function Services() {
  return (
    <section id="services" className="bg-ink py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Compétences"
          title="Du concept à la présence de marque installée."
          description="Un studio complet de communication visuelle pour campagnes, espaces commerciaux, sites industriels et signalétique à fort impact."
        />

        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.article
                key={service.title}
                className="group rounded-lg border border-white/9 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/42 hover:bg-white/[0.055] hover:shadow-premium"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg border border-gold/24 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/58">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
