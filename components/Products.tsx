"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeCheck, Clock, MapPin, Maximize2, MessageCircle, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Buttons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company, products } from "@/lib/content";

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);

  useEffect(() => {
    if (!selectedProduct) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  return (
    <>
      <section id="products" className="py-16 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Produits"
          title="Packs de production premium, adaptés à chaque site."
          description="Des fiches produits claires aident les équipes à comparer matériaux, délais et cas d'usage avant de demander un devis précis."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand/12 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-md"
            >
              <div className="group/image relative aspect-[7/10] overflow-hidden bg-surface-blue">
                <Image
                  src={product.image}
                  alt={`${product.name} visual placeholder`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <button
                  type="button"
                  className="absolute inset-0 cursor-zoom-in bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                  aria-label={`Open a larger view of ${product.name}`}
                  onClick={() => setSelectedProduct(product)}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-navy">{product.name}</h3>
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
          ))}
        </div>
      </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProduct.name} enlarged image`}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden bg-transparent shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg ring-2 ring-white/80 transition hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Close enlarged image"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative mx-auto h-[88vh] max-w-full aspect-[7/10] overflow-hidden bg-transparent">
              <Image
                src={selectedProduct.image}
                alt={`${selectedProduct.name} enlarged view`}
                fill
                sizes="(min-width: 1024px) 960px, 92vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}
