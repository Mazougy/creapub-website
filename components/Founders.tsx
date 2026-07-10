import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { founders } from "@/lib/content";

export function Founders() {
  return (
    <section id="founders" className="py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Fondateurs"
          title="Stratégie et production, alignées dès le premier jour."
          description="Creapub est dirigé par des fondateurs complémentaires qui relient la clarté de la marque à l'exécution technique."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 0.06}>
              <article className="grid overflow-hidden rounded-3xl border border-brand/12 bg-white shadow-soft md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-56 bg-surface-blue sm:min-h-72 md:min-h-96">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} profile placeholder`}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                      {founder.role}
                    </p>
                    <h3 className="text-2xl font-semibold text-navy">{founder.name}</h3>
                    <p className="mt-5 leading-8 text-navy/60">{founder.bio}</p>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <a
                      href="mailto:hello@creapub.com"
                      className="grid h-10 w-10 place-items-center rounded-2xl border border-brand/15 text-navy/60 transition hover:border-brand/40 hover:text-brand"
                      aria-label={`Email ${founder.name}`}
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      className="grid h-10 w-10 place-items-center rounded-2xl border border-brand/15 text-navy/60 transition hover:border-brand/40 hover:text-brand"
                      aria-label={`${founder.name} LinkedIn profile placeholder`}
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
