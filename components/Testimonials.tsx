import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Avis clients"
          title="Le premium n'a pas besoin de crier. Il doit tenir la distance."
          description="Retours clients représentatifs des types d'entreprises que Creapub sert."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05}>
              <article className="glass-panel h-full rounded-lg p-6">
                <div className="mb-6 flex gap-1 text-gold" aria-label="Avis cinq étoiles">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="leading-8 text-white/72">{testimonial.review}</p>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} client placeholder`}
                    width={52}
                    height={52}
                    className="rounded-lg"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-white/48">{testimonial.business}</p>
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
