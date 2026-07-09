import { Eye, Gem, Globe2, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company, values } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-black py-24 md:py-32">
      <div className="container-padded">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="À propos de Creapub"
            title="Conçu pour les marques qui considèrent la visibilité comme une infrastructure."
            description={`Fondé en ${company.founded}, Creapub combine stratégie, design, production et installation pour aider les entreprises à devenir visibles, mémorables et plus faciles à choisir.`}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <Target className="mb-5 h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">Mission</h3>
                <p className="mt-4 leading-7 text-white/60">
                  Transformer les entreprises en marques visibles et mémorables grâce à une communication visuelle premium.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.04}>
              <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <Globe2 className="mb-5 h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">Vision</h3>
                <p className="mt-4 leading-7 text-white/60">
                  Devenir la référence de la communication visuelle en Afrique et dans la région du Golfe.
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-10 rounded-lg border border-white/10 bg-ink-panel p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <Eye className="mb-5 h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-white">Histoire de la marque</h3>
              <p className="mt-4 leading-8 text-white/62">
                Creapub existe pour le moment où une entreprise devient impossible à manquer. Nous concevons et fabriquons des points de contact visuels efficaces sur le terrain : à distance, sous fort ensoleillement, dans des intérieurs soignés, pour des flottes et sur des parcours clients répétés.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-lg border border-white/9 bg-black/32 p-4">
                  <Gem className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="font-medium text-white/82">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
