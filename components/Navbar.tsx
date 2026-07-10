"use client";

import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Produits", href: "#products" },
  { label: "Processus", href: "#process" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 20));
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-brand/10 bg-white/85 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="container-padded flex h-20 items-center justify-between" aria-label="Navigation principale">
        <a href="#top" className="relative block h-11 w-[184px] shrink-0 sm:w-[216px]" aria-label="Accueil Creapub">
          <Image
            src="/images/logo.svg"
            alt="Creapub"
            fill
            priority
            sizes="(min-width: 640px) 216px, 184px"
            className="object-contain object-left"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/65 transition hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden min-h-11 items-center rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(73,90,168,0.22)] transition hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:inline-flex"
        >
          Demander un devis
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-brand/15 text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Basculer le menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-brand/10 bg-white/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="container-padded flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-base font-medium text-navy/75 transition hover:bg-surface-blue hover:text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Demander un devis
            </a>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
