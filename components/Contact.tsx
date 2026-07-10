"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Contact"
          title="Commencez par un lieu, un délai, ou une ambition."
          description="Partagez l'entreprise, l'emplacement, l'usage prévu et le calendrier. Creapub vous conseillera sur les matériaux et la production."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grid gap-5">
              <div className="rounded-3xl border border-brand/12 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-navy">Informations du studio</h3>
                <div className="mt-6 grid gap-4 text-navy/65">
                  <p className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <span>{company.address}</span>
                  </p>
                  <p className="flex gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <a href={`mailto:${company.email}`} className="transition hover:text-brand">
                      {company.email}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="transition hover:text-brand">
                      {company.phone}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <Send className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <span>{company.hours}</span>
                  </p>
                </div>
                <div className="mt-7 flex gap-3">
                  {[
                    { label: "Instagram", Icon: Instagram },
                    { label: "LinkedIn", Icon: Linkedin },
                    { label: "Facebook", Icon: Facebook },
                  ].map(({ label, Icon }) => (
                    <a
                      key={label}
                      href="https://www.creapub.com"
                      className="grid h-11 w-11 place-items-center rounded-2xl border border-brand/15 text-navy/60 transition hover:border-brand/40 hover:text-brand"
                      aria-label={`${label} placeholder`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative min-h-72 overflow-hidden rounded-3xl border border-brand/12 bg-white shadow-soft">
                {company.lat && company.lng ? (
                  <iframe
                    title="Creapub location"
                    src={`https://www.google.com/maps?q=${company.lat},${company.lng}&z=15&output=embed`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(238,243,255,0.9),rgba(255,255,255,0.95)_38%,rgba(241,246,255,0.8)),linear-gradient(rgba(73,90,168,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(73,90,168,0.06)_1px,transparent_1px)] bg-[length:auto,48px_48px,48px_48px]" />
                    <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                      <MapPin className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <p className="absolute bottom-5 left-5 right-5 text-sm text-navy/55">
                      Map placeholder pour la salle d&apos;exposition, l&apos;unité de production et le lieu de rendez-vous client.
                    </p>
                  </>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form
              className="rounded-3xl border border-brand/12 bg-white p-6 shadow-soft md:p-8"
              aria-label="Formulaire de contact"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  const json = await res.json().catch(() => ({}));

                  if (res.ok) {
                    if (json.previewUrl) {
                      alert(`Message envoyé (aperçu): ${json.previewUrl}`);
                    } else {
                      alert("Message envoyé. Nous vous contacterons bientôt.");
                    }
                    form.reset();
                  } else {
                    const mailto = `mailto:${encodeURIComponent("marzouguiadam82@gmail.com")}?subject=${encodeURIComponent(
                      "Demande depuis le site Creapub"
                    )}&body=${encodeURIComponent(JSON.stringify(data, null, 2))}`;
                    window.location.href = mailto;
                  }
                } catch {
                  const mailto = `mailto:${encodeURIComponent("marzouguiadam82@gmail.com")}?subject=${encodeURIComponent(
                    "Demande depuis le site Creapub"
                  )}&body=${encodeURIComponent(JSON.stringify(data, null, 2))}`;
                  window.location.href = mailto;
                }
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-navy/75">
                  Nom
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="min-h-12 rounded-2xl border border-brand/15 bg-white px-4 text-base text-navy outline-none transition placeholder:text-navy/30 focus:border-brand"
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy/75">
                  Société
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="min-h-12 rounded-2xl border border-brand/15 bg-white px-4 text-base text-navy outline-none transition placeholder:text-navy/30 focus:border-brand"
                    placeholder="Business name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy/75">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="min-h-12 rounded-2xl border border-brand/15 bg-white px-4 text-base text-navy outline-none transition placeholder:text-navy/30 focus:border-brand"
                    placeholder="you@company.com"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy/75">
                  Téléphone
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="min-h-12 rounded-2xl border border-brand/15 bg-white px-4 text-base text-navy outline-none transition placeholder:text-navy/30 focus:border-brand"
                    placeholder="+216 ..."
                  />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-medium text-navy/75">
                Type de projet
                <select
                  name="projectType"
                  className="mb-4 min-h-12 rounded-2xl border border-brand/15 bg-white px-4 text-base text-navy outline-none transition focus:border-brand"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Sélectionnez un service
                  </option>
                  <option>Enseignes LED</option>
                  <option>Lettres 3D</option>
                  <option>Impression grand format</option>
                  <option>Covering véhicule</option>
                  <option>Branding intérieur</option>
                  <option>Fabrication sur mesure</option>
                </select>
              </label>

              <label className="mt-5 grid gap-2 text-sm font-medium text-navy/75">
                Détails du projet
                <textarea
                  name="message"
                  rows={6}
                  className="resize-y rounded-2xl border border-brand/15 bg-white px-4 py-3 text-base text-navy outline-none transition placeholder:text-navy/30 focus:border-brand"
                  placeholder="Parlez-nous de l'emplacement, du calendrier, des tailles, matériaux ou objectif de visibilité."
                  required
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(73,90,168,0.24)] transition hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:w-auto"
              >
                Envoyer la demande
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
