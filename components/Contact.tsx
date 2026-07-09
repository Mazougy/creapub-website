"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Contact"
          title="Start with a site, a deadline, or an ambition."
          description="Share the business, location, intended use, and timing. Creapub will guide the right material and production path."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grid gap-5">
              <div className="rounded-lg border border-white/10 bg-black p-6">
                <h3 className="text-xl font-semibold text-white">Studio information</h3>
                <div className="mt-6 grid gap-4 text-white/68">
                  <p className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>{company.address}</span>
                  </p>
                  <p className="flex gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <a href={`mailto:${company.email}`} className="transition hover:text-white">
                      {company.email}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="transition hover:text-white">
                      {company.phone}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <Send className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
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
                      className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 text-white/70 transition hover:border-gold/60 hover:text-gold"
                      aria-label={`${label} placeholder`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative min-h-72 overflow-hidden rounded-lg border border-white/10 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.2),rgba(255,255,255,0.03)_38%,rgba(0,0,0,0.1)),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,48px_48px,48px_48px]" />
                <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-gold/12 text-gold">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="absolute bottom-5 left-5 right-5 text-sm text-white/58">
                  Map placeholder for showroom, production unit, and client meeting location.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form className="rounded-lg border border-white/10 bg-black p-6 md:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-white/76">
                  Name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="min-h-12 rounded-lg border border-white/12 bg-white/[0.035] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-gold"
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white/76">
                  Company
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="min-h-12 rounded-lg border border-white/12 bg-white/[0.035] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-gold"
                    placeholder="Business name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white/76">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="min-h-12 rounded-lg border border-white/12 bg-white/[0.035] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-gold"
                    placeholder="you@company.com"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white/76">
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="min-h-12 rounded-lg border border-white/12 bg-white/[0.035] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-gold"
                    placeholder="+216 ..."
                  />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-medium text-white/76">
                Project type
                <select
                  name="projectType"
                  className="min-h-12 rounded-lg border border-white/12 bg-white/[0.035] px-4 text-white outline-none transition focus:border-gold"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>LED Signs</option>
                  <option>3D Letters</option>
                  <option>Large Format Printing</option>
                  <option>Vehicle Branding</option>
                  <option>Interior Branding</option>
                  <option>Custom Fabrication</option>
                </select>
              </label>

              <label className="mt-5 grid gap-2 text-sm font-medium text-white/76">
                Project details
                <textarea
                  name="message"
                  rows={6}
                  className="resize-y rounded-lg border border-white/12 bg-white/[0.035] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-gold"
                  placeholder="Tell us about the location, timing, sizes, materials, or visibility goal."
                  required
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-black shadow-gold transition hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-auto"
              >
                Send Request
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
