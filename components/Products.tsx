import Image from "next/image";
import { BadgeCheck, Clock, MapPin, Maximize2, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company, products } from "@/lib/content";

export function Products() {
  return (
    <section id="products" className="bg-black py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Products"
          title="Premium production packages, tailored to each site."
          description="Clear product cards help teams compare materials, timing, and best-use cases before requesting an exact quote."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-ink-panel transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-gold">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03]">
                  <Image
                    src={product.image}
                    alt={`${product.name} visual placeholder`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-black/60 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                    {product.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{product.material}</p>

                  <dl className="mt-5 grid gap-3 text-sm text-white/66">
                    <div className="flex gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <div>
                        <dt className="sr-only">Environment</dt>
                        <dd>{product.environment}</dd>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Maximize2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <div>
                        <dt className="sr-only">Sizes</dt>
                        <dd>{product.sizes}</dd>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <div>
                        <dt className="sr-only">Production time</dt>
                        <dd>{product.production}</dd>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <div>
                        <dt className="sr-only">Price</dt>
                        <dd>{product.price}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-6 grid gap-2">
                    <LinkButton href="#contact" className="w-full" aria-label={`Request quote for ${product.name}`}>
                      Request Quote
                    </LinkButton>
                    <a
                      href={company.whatsapp}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 text-sm font-semibold text-white/78 transition hover:border-gold/50 hover:text-gold"
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
