"use client";

import {
  Factory,
  FileText,
  Layers,
  PenTool,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/content";

const icons = {
  Search,
  Ruler,
  Sparkles,
  FileText,
  PenTool,
  Layers,
  Factory,
  Wrench,
  ShieldCheck,
};

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-1/2 top-40 h-px w-[80vw] -translate-x-1/2 bg-brand-line opacity-70" aria-hidden="true" />
      <div className="container-padded">
        <SectionHeader
          eyebrow="Process"
          title="A precise workflow from first idea to final installation."
          description="Nine disciplined steps keep creative ambition, technical accuracy, and delivery timing moving together."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-brand/15 md:block lg:left-1/2" aria-hidden="true" />
          <div className="grid gap-5">
            {processSteps.map((step, index) => {
              const Icon = icons[step.icon as keyof typeof icons];
              const right = index % 2 === 1;

              return (
                <motion.article
                  key={step.title}
                  className={`relative grid gap-4 md:grid-cols-[72px_1fr] lg:grid-cols-2 ${
                    right ? "lg:[&>div:last-child]:col-start-2" : ""
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.55, delay: index * 0.03 }}
                >
                  <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-brand/30 bg-white text-brand shadow-soft md:mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="rounded-3xl border border-brand/12 bg-white p-6 shadow-soft lg:w-[calc(50%-3rem)]">
                    <p className="mb-3 text-sm font-semibold text-brand">Étape {index + 1}</p>
                    <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                    <p className="mt-3 leading-7 text-navy/55">{step.detail}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
