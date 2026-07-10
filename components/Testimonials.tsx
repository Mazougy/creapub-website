import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Avis clients"
          title="Le premium n'a pas besoin de crier. Il doit tenir la distance."
          description="Retours clients représentatifs des types d'entreprises que Creapub sert."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-3xl border border-brand/12 bg-white p-6 shadow-sm">
                <div className="mb-6 flex gap-1 text-brand" aria-label="Avis cinq étoiles">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="leading-8 text-navy/70">{testimonial.review}</p>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} client placeholder`}
                    width={52}
                    height={52}
                    className="rounded-2xl"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-navy">{testimonial.name}</h3>
                    <p className="text-sm text-navy/45">{testimonial.business}</p>
                  </div>
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}
