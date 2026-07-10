import { Eye, Gem, Globe2, Target } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company, values } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-padded">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="À propos de Creapub"
            title="Conçu pour les marques qui considèrent la visibilité comme une infrastructure."
            description={`Fondé en ${company.founded}, Creapub combine stratégie, design, production et installation pour aider les entreprises à devenir visibles, mémorables et plus faciles à choisir.`}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-brand/12 bg-white p-6 shadow-sm">
              <Target className="mb-5 h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-navy">Mission</h3>
              <p className="mt-4 leading-7 text-navy/60">
                Transformer les entreprises en marques visibles et mémorables grâce à une communication visuelle premium.
              </p>
            </article>
            <article className="rounded-3xl border border-brand/12 bg-white p-6 shadow-sm">
              <Globe2 className="mb-5 h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-navy">Vision</h3>
              <p className="mt-4 leading-7 text-navy/60">
                Devenir la référence de la communication visuelle en Afrique et dans la région du Golfe.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-brand/12 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <Eye className="mb-5 h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-navy">Histoire de la marque</h3>
              <p className="mt-4 leading-8 text-navy/60">
                Creapub existe pour le moment où une entreprise devient impossible à manquer. Nous concevons et fabriquons des points de contact visuels efficaces sur le terrain : à distance, sous fort ensoleillement, dans des intérieurs soignés, pour des flottes et sur des parcours clients répétés.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-surface-blue/60 p-4">
                  <Gem className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="font-medium text-navy/80">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
