import { Box, Lightbulb, Printer } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/content";

const icons = {
  Printer,
  Lightbulb,
  Box,
};

export function Services() {
  return (
    <section id="services" className="py-16 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Notre service"
          title="Découvrez notre service"
          description="Chez Creapub, nous concevons et produisons des solutions publicitaires innovantes pour aider les entreprises à renforcer leur visibilité et à attirer plus de clients. Spécialisés dans la signalétique professionnelle, les affichages portables, les mascottes gonflables et les supports promotionnels personnalisés, nous offrons un service complet alliant créativité, qualité et impact visuel."
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
