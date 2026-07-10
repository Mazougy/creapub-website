"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/lib/content";

export function WhatsAppFloat() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-[0_12px_28px_rgba(73,90,168,0.32)] transition hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] md:inline-flex md:h-auto md:min-h-12 md:w-auto md:gap-2 md:rounded-full md:px-5 md:py-3 md:text-sm md:font-semibold"
      aria-label="Contacter Creapub sur WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-4 md:w-4" aria-hidden="true" />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}
