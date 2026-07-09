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
            eyebrow="About Creapub"
            title="Built for brands that treat visibility as infrastructure."
            description={`Founded in ${company.founded}, Creapub combines strategy, design, production, and installation to help businesses become visible, memorable, and easier to choose.`}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <Target className="mb-5 h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">Mission</h3>
                <p className="mt-4 leading-7 text-white/60">
                  Transform businesses into visible and memorable brands through premium visual communication.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.04}>
              <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <Globe2 className="mb-5 h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">Vision</h3>
                <p className="mt-4 leading-7 text-white/60">
                  Become the leading visual communication company across Africa and the Gulf region.
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-10 rounded-lg border border-white/10 bg-ink-panel p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <Eye className="mb-5 h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-white">Brand story</h3>
              <p className="mt-4 leading-8 text-white/62">
                Creapub exists for the moment a business becomes impossible to miss. We design and manufacture visual touchpoints that work in the real world: at street distance, under harsh sun, inside polished interiors, across fleets, and through repeated customer journeys.
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
