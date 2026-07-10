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
    <section id="services" className="py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Compétences"
          title="Du concept à la présence de marque installée."
          description="Un studio complet de communication visuelle pour campagnes, espaces commerciaux, sites industriels et signalétique à fort impact."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <article
                key={service.title}
                className="rounded-3xl border border-brand/12 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-md"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-brand/20 bg-brand/8 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-4 leading-7 text-navy/55">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
