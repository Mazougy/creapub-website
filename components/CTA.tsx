import { Phone } from "lucide-react";
import { LinkButton } from "@/components/ui/Buttons";
import { company } from "@/lib/content";

export function CTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-padded">
        <div className="relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-surface-blue/95 via-white/98 to-surface-blue/90 p-6 shadow-sm sm:p-8 md:p-12">
            <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-brand/12 bg-brand/5" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                  Prêts pour la visibilité
                </p>
                <h2 className="max-w-3xl font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl md:text-5xl">
                  Transformez votre prochain emplacement, lancement ou flotte en un actif de marque premium.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <LinkButton href={company.whatsapp} icon="whatsapp" aria-label="Contacter Creapub sur WhatsApp">
                  WhatsApp
                </LinkButton>
                <LinkButton href="#contact" variant="secondary" aria-label="Demander un devis Creapub">
                  Devis
                </LinkButton>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand/15 px-5 text-sm font-semibold text-navy/70 transition hover:border-brand/40 hover:text-brand"
                  aria-label="Appeler Creapub"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Appeler
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
