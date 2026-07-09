import { MessageCircle, Phone } from "lucide-react";
import { LinkButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

export function CTA() {
  return (
    <section className="bg-black py-20">
      <div className="container-padded">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-gold/28 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(255,255,255,0.04)_36%,rgba(0,0,0,0.7))] p-8 shadow-gold md:p-12">
            <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-gold/18" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                  Prêts pour la visibilité
                </p>
                <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-normal text-white md:text-5xl">
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
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-5 text-sm font-semibold text-white/78 transition hover:border-gold/60 hover:text-gold"
                  aria-label="Appeler Creapub"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href={company.whatsapp}
        className="fixed bottom-5 right-5 z-40 hidden min-h-12 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-black shadow-gold transition hover:-translate-y-0.5 hover:bg-gold-soft md:inline-flex"
        aria-label="Floating WhatsApp contact button"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </section>
  );
}
