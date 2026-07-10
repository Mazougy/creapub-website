import Image from "next/image";
import { BadgeCheck, Clock, MapPin, Maximize2, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company, products } from "@/lib/content";

export function Products() {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Produits"
          title="Packs de production premium, adaptés à chaque site."
          description="Des fiches produits claires aident les équipes à comparer matériaux, délais et cas d'usage avant de demander un devis précis."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.04}>
              <article className="group flex h-full min-h-[480px] flex-col overflow-hidden rounded-3xl border border-brand/12 bg-white shadow-soft transition duration-300 md:hover:-translate-y-1 md:hover:border-brand/25 md:hover:shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-blue">
                  <Image
                    src={product.image}
                    alt={`${product.name} visual placeholder`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 md:group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-brand/20 bg-white/90 px-3 py-1 text-xs font-semibold text-brand backdrop-blur">
                    {product.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <h3 className="text-xl font-semibold text-navy">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-navy/55">{product.material}</p>

                    <dl className="mt-5 grid gap-3 text-sm text-navy/65">
                      <div className="flex gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <div>
                          <dt className="sr-only">Environment</dt>
                          <dd>{product.environment}</dd>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Maximize2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <div>
                          <dt className="sr-only">Sizes</dt>
                          <dd>{product.sizes}</dd>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <div>
                          <dt className="sr-only">Production time</dt>
                          <dd>{product.production}</dd>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <div>
                          <dt className="sr-only">Price</dt>
                          <dd>{product.price}</dd>
                        </div>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-auto grid gap-4 pt-3">
                    <LinkButton href="#contact" className="w-full py-3" aria-label={`Request quote for ${product.name}`}>
                      Demander un devis
                    </LinkButton>
                    <a
                      href={company.whatsapp}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand/15 py-3 text-sm font-semibold text-navy/70 transition hover:border-brand/40 hover:text-brand"
                      aria-label={`Ask about ${product.name} on WhatsApp`}
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp
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
